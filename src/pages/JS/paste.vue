<template>
  <div>
    <h-breadcrumb :list="readcrumbList"></h-breadcrumb>
    <textarea name="" id="" cols="30" rows="5"></textarea>
    <input type="text">

    <div>你复制的内容是: {{content}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        readcrumbList: [{
            name: 'JS',
            path: {}
          },
          {
            name: '黏贴板监听',
            path: {}
          },
        ],
        content: ''
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        document.addEventListener('paste', this.fn);
      },
      fn(e) {
        console.info(e);
        // console.info(e.clipboardData .items);
        console.info(e.clipboardData.items[0]);
        var item = e.clipboardData.items[0]
        if (item.kind == 'string') {
          item.getAsString((str) => {
            console.log(str)
            this.content = str
          })
        }
      },
      destroyed() {
        document.removeEventListener('paste', this.fn)
      },

      fn2(e) {
        var cbd = e.clipboardData;
        var fr = new FileReader();
        var html = '';
        for (var i = 0; i < cbd.items.length; i++) {
          var item = cbd.items[i];
          console.info(item);
          if (item.kind == "file") {
            var blob = item.getAsFile();
            if (blob.size === 0) {
              return;
            }
            console.info(blob);
            fr.readAsDataURL(blob);
            fr.onload = function (e) {
              console.log(e)
              //   var result = document.getElementById("result");
              //   //显示文件
              //   result.innerHTML = '<img src="' + this.result + '" alt="" />';
            }
          }
        }
      },
    }
  }
</script>

<style lang="less" scoped>
</style>
