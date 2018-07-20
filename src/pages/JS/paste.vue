<template>
  <div>
    <h-breadcrumb :list="readcrumbList"></h-breadcrumb>
    <textarea name="" id="" cols="30" rows="5"></textarea>

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
        console.info(e.clipboardData .items[0]);
        var item = e.clipboardData .items[0]
        if(item.kind == 'string') {
            item.getAsString((str) => {
                console.log(str)
                this.content = str
            })
        }
      },
      destroyed() {
        document.removeEventListener('paste', this.fn)
      },
    }
  }
</script>

<style lang="less" scoped>
</style>
