<template>
  <el-menu class="el-menu-style" :default-openeds="menu.defaultOpeneds" :default-active="menu.defaultActive" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" @select="menuSelect">
    <div v-for="(menu, index1) of menuData" :key="index1">
      <el-submenu :index="menu.index" v-if="menu.child&&menu.child.length>0">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{menu.name}}</span>
        </template>
        <el-menu-item :route="child.path" v-for="(child, index2) of menu.child" :index="child.index" :key="index2" @click="menuClick(child)">{{child.name}}</el-menu-item>
      </el-submenu>
      <el-menu-item :index="menu.index" @click="menuClick(menu)" v-else>
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{menu.name}}</span>
        </template>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        menu: {
          defaultOpeneds: [], // ['1']
          defaultActive: '', // '1-1'
        },
        menuData: [{
            name: 'vue',
            icon: 'el-icon-edit',
            index: '1',
            child: [{
              name: '组件交互',
              index: '1-1',
            }, {
              name: '时间过滤器',
              index: '1-2',
            }, {
              name: '自定义指令',
              index: '1-3',
            }, {
              name: 'axios',
              index: '1-4',
              path: {
                path: 'axios'
              }
            }, {
              name: '全局属性',
              index: '1-5',
              path: {
                path: 'globalProperty'
              }
            }, {
              name: '路由监听',
              index: '1-6',
              path: {
                path: 'route'
              }
            }]
          },
          {
            name: 'sass',
            icon: 'el-icon-setting',
            index: '2',
            child: [],
          }, {
            name: '插件',
            icon: 'el-icon-success',
            index: '3',
            child: [{
              name: '自定义插件内容',
              index: '3-1',
            }, {
              name: '自定义toast插件',
              index: '3-2',
            }]
          }, {
            name: 'test',
            icon: 'el-icon-edit',
            index: '4',
            path: {
              path: 'test'
            }
          },
          {
            name: 'JS',
            icon: 'el-icon-edit',
            index: '5',
            child: [{
              name: '黏贴板监听',
              index: '5-1',
              path: {
                path: 'paste'
              }
            },]
          },
        ]
      }
    },
    mounted() {
      // console.log(this.$router)
      console.log('route', this.$route)
      // console.log(this.$route.path.split('/'))
      this.initMenu()
    },
    watch: {
      $route(to, from) {
        console.log('to', from)
        console.log('from', from)
      }
    },
    methods: {
      initMenu() {
        var nowPath = this.$route.path.split('/')[this.$route.path.split('/').length - 1]

        this.menuData.forEach(menu => {
          if (menu.child && menu.child.length > 0) {
            menu.child.forEach(item => {
              if (item.path && item.path.path === nowPath) {
                this.menu.defaultActive = item.index
                this.menu.defaultOpeneds.splice(0, 1, menu.index)
              }
            })
          } else {
            if (menu.path && menu.path.path === nowPath) {
              this.menu.defaultActive = menu.index
              this.menu.defaultOpeneds.splice(0, 1)
            }
          }
        });
      },
      menuSelect(index, indexPath) {
        // console.log(index)
        // console.log(indexPath)
      },
      menuClick(item) {
        if (item.path) {
          this.$router.push(item.path)
        }
      }

    }
  }
</script>


<style lang="less" scoped>
  .el-menu-style {
    height: 100%;
  }
</style>
