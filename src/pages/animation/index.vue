<template>
  <div>
    <h4>过度&动画</h4>

    <!-- 过度 -->
    <button v-on:click="show = !show">toggle</button>
    <transition name="fade">
      <p class="p1" v-if="show">过度测试</p>
    </transition>
    <div></div>

    <!-- 动画 -->
    <button v-on:click="show2 = !show2">toggle2</button>
    <div ref="animation" @animationend="animationend">
      <!-- transition 设置ref属性不起效果 -->
      <transition name="fade2" type="animationend">
        <p v-if="show2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum
          id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
    </div>

    <h4>自定义过度的类名&animates.css</h4>
    <button v-on:click="show3 = !show3">animates.css</button>
    <!-- <div @transitionend='transitionend'> -->
    <div @animationend='transitionend'>
      <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
        <p class="p1" v-if="show3">animates动画库</p>
      </transition>
    </div>

    <h4>Velocity动画库</h4>
    <div class="element" ref="animate"></div>

  </div>
</template>



<script>
  export default {
    data() {
      return {
        show: true,
        show2: true,
        show3: true,
      }
    },
    created() {

    },
    mounted() {
      //  this.$refs['animation'].addEventListener('animationend', function() { //该方法会多次触发
      //自定义类名使用animatess.css会多次触发
      // window.addEventListener('animationend', function () {  
      //   console.log('动画完成')
      // })
      this.animate()
    },
    methods: {
      animationend() {
        console.log('动画完成2')
      },
      transitionend() {
        console.log('自定义类名动画完成')
      },

      animate() {
        Velocity(this.$refs.animate, 
        {
          width: '100px', 
          height: '100px',
          opacity: 0.5
        }, 
        {
          duration: 4000,
          delay: 1000,
          loop: true
        })
      }
    }
  }

</script>


<style lang="less" scoped>
  .p1 {
    font-size: 20px;
  }

  .fade-enter-active,
  .fade-leave-active {
    //   transition: opacity .5s;
    transition: font-size .5s;
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */

    {
    //   opacity: 0;
    font-size: 12px;
  }


  .fade2-enter-active {
    animation: bounce-in .5s;
  }

  .fade2-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .element {
    width: 150px;
    height: 150px;
    background-color: pink;
  }

</style>
