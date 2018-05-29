<template>
  <div>
    <span> 插槽</span>
    <slot>666</slot>
    <slot name="one">999</slot>
    <h4>zone.js</h4>

  </div>
</template>

<script>
  import zone from 'zone.js';

  export default {
    created() {
      var rootZone = Zone.root;
      console.log('rootZone', rootZone.name);

      var zoneA = Zone.current.fork({
        name: 'ZoneA'
      });

      zoneA.run(() => {
        setTimeout(function () {
          console.log(`run------current zone is ${Zone.current.name}`);
        }, 2000)
      })
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

