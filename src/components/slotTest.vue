<template>
  <div>
    <span> 插槽</span>
    <slot>666</slot>
    <slot name="one">999</slot>
    <h4>zone.js</h4>
    <input type="button" value="run zone" @click="runZone">

  </div>
</template>

<script>
  import zone from 'zone.js';

  export default {
    created() {

    },
    methods: {
      runZone() {
        var rootZone = Zone.root;
        console.log('rootZone', rootZone.name);

        var zoneA = Zone.current.fork({
          name: 'ZoneA',
          //通过onScheduleTask onInvokeTask，我们能在异步任务创建的前后，异步任务回调函数执行的前后添加一些需要的操作。
          onScheduleTask: function(parentZoneDelegate, currentZone, targetZone, task) {
            console.log('ZoneA before');
            return parentZoneDelegate.scheduleTask(targetZone, task);
          },
          onInvokeTask: function(parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) {
            console.log('ZoneA end')
            parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
          },
        });

        zoneA.run(() => {
          setTimeout(function () {
            console.log(`run------current zone is ${Zone.current.name}`);
          }, 2000)
        })

      }
    }
  }

</script>

<style lang="scss" scoped>
  // @import './common.scss';
  @import './common';
  span {
    color: $color-pink
  }

</style>

