<style lang="stylus">
  .content-wrapper {
    min-height: 100vh;
  }

  .content-header {
    height: 37px;
    padding: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .breadcrumb {
      top: 0;
      float: left;
      left: 10px;
      line-height: 37px;
      padding: 0 5px;
      font-size: 14px;
    }
  }

  .content {
    position: fixed;
    top: 87px;
    right: 0;
    bottom: 0;
    left: 230px;
    overflow-y: auto;
  }
  .navbar-nav>.user-menu>.dropdown-menu{
    width: 500px;
  }
  .navbar-nav>.user-menu>.dropdown-menu>li.user-header{
    height: auto;
  }
  .navbar-nav>.user-menu>.dropdown-menu>li.user-header>img{
    width: calc(50% - 3px);
    height: auto;
  }
</style>
<template>
  <div id="app">
    <div class="wrapper">
      <header class="main-header">
        <a href="" class="logo">
          <span class="logo-mini">
            <b>A</b>L</span>
          <span class="logo-lg">
            <b>Admin</b> LTE</span>
        </a>
        <nav class="navbar navbar-static-top">
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <li>
                <a href="https://github.com/HstarComponents/vue-lte-ui" target="_blank">
                  <i class="fa fa-github"></i>
                  Github 仓库
                </a>
              </li>
              <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    <span class="hidden-xs"><i class="fa fa-money"></i> 打赏我</span>
                  </a>
                <ul class="dropdown-menu">
                  <!-- User image -->
                  <li class="user-header">
                    <img src="http://mock.hstar.org/static/img/alipay.ddb0b8b.jpg" alt="Alipay">
                    <img src="http://mock.hstar.org/static/img/wechat.151fc01.png" alt="Wepay">
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 542px;">
          <section class="sidebar" style="height: 542px; overflow: hidden; width: auto;">
            <ul class="sidebar-menu tree" data-widget="tree">
              <li class="header">{{systemName}}</li>
              <li v-for="m1 in menus" :class="{'treeview menu-open': m1.hasChildren}">
                <template v-if="m1.hasChildren">
                  <a href="javascript:;">
                    <i :class="m1.icon"></i>
                    <span>{{m1.text}}</span>
                  </a>
                  <ul class="treeview-menu" style="display: block;">
                    <li v-for="m2 in m1.children">
                      <router-link :to="m2.path"><i :class="m2.icon"></i> {{m2.text}}</router-link>
                    </li>
                  </ul>
                </template>
                <template v-else>
                  <router-link :to="m1.path"><i :class="m1.icon"></i> {{m1.text}}</router-link>
                </template>
              </li>
            </ul>
          </section>
        </div>
      </aside>
      <div class="content-wrapper">
        <section class="content-header">
          <ol class="breadcrumb">
            <li>
              <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
            </li>
            <li v-for="(b, idx) in breadcrumbs" :class="{active: idx === breadcrumbs.length - 1}">
              <template v-if="idx === breadcrumbs.length - 1">
                {{b.text}}
              </template>
              <template v-else>
                <router-link :to="b.path"><i :class="b.icon"></i> {{b.text}}</router-link>
              </template>
            </li>
          </ol>
        </section>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { eventBus } from './services/eventBus';
  export default {
    data() {
      return {
        systemName: 'AdminLTE UI DEMO',
        menus: [], // 菜单
        breadcrumbs: [] // 面包屑
      }
    },
    created() {
      this._loadSystemMenus();
      this._setBreadcrumb(this.$route.path);
    },
    watch: {
      $route(r) {
        eventBus.emit('route-change', r.path);
        this._setBreadcrumb(r.path);
      }
    },
    methods: {
      _loadSystemMenus() {
        let menus = _.cloneDeep(AppConf.menus);
        this._processMenus(menus, null);
        this.menus = menus;
      },
      _processMenus(menus, parent) {
        menus.forEach(m => {
          m.$parent = parent;
          m.hasChildren = m.children && m.children.length > 0;
          if (m.hasChildren) {
            this._processMenus(m.children, m);
          }
        });
      },
      _setBreadcrumb(path) {
        let currentMenu = this._searchCurrentMenu(path, this.menus);
        let breadcrumbs = [];
        while (currentMenu) {
          breadcrumbs.push(currentMenu);
          currentMenu = currentMenu.$parent;
        }
        this.breadcrumbs = breadcrumbs.reverse();
      },
      _searchCurrentMenu(path, menus) {
        for (let m of menus) {
          if (!m.hasChildren && m.path === path) {
            return m;
          }
          if (m.hasChildren) {
            let result = this._searchCurrentMenu(path, m.children);
            if (result) {
              return result;
            }
          }
        }
        return null;
      }
    }
  };

</script>
