<style lang="stylus">
  .lte-tabset{
    margin-bottom: 0;
  }
  .lte-tabset .fa.fa-close {
    margin-left: 5px;
    width: 16px;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: #dd4b39;
      border: 1px solid #dd4b39;
      border-radius: 50%;
    }
  }
</style>
<template>
  <div class="lte-tabset nav-tabs-custom">
    <ul class="nav nav-tabs" :class="{'pull-right': direction === 'right'}">
      <li v-for="item in tabItems" :class="{active: innerValue === item.name}" @click="changeTab(item)">
        <a href="javascript:;">
        <i :class="item.icon"></i>  {{item.header}} <i v-show="item.closable" class="fa fa-close" @click="removeTabItem(item)"></i>
        </a>
      </li>
      <slot name="tabset-tools"></slot>
    </ul>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'lte-tabset',
    props: {
      direction: { type: String, default: 'left' },
      value: null
    },
    data() {
      return {
        tabItems: [],
        innerValue: 0
      }
    },
    mounted() {
      this.innerValue = this.value;
    },
    watch: {
      value() {
        this.innerValue = this.value;
      }
    },
    methods: {
      changeTab(tabItem) {
        this._updateValue(tabItem.name);
        this.$emit('tab-click', tabItem);
      },
      removeTabItem(tabItem) {
        let waitForRemoveItem = this._getTabItems().find(x => x.name === tabItem.name);
        if (waitForRemoveItem) {
          waitForRemoveItem.removeSelf();
          this.$emit('tab-remove', tabItem);
        }
      },
      updateTabs() {
        let matchValue = false;
        let tabs = [];
        this._getTabItems().forEach((item, i) => {
          let tabItem = {
            header: item.header || '',
            icon: item.icon || '',
            name: item.name || i,
            closable: item.closable,
            disabled: item.disabled
          };
          tabs.push(tabItem);
          if (tabItem.name === this.value) {
            matchValue = true;
          }
        });
        if (!matchValue && tabs.length > 0) {
          this._updateValue(tabs[0].name);
        }
        this.tabItems = tabs;
      },
      _updateValue(value) {
        this.innerValue = value;
        this.$emit('input', value);
      },
      _getTabItems() {
        return this.$children.filter(x => x.$options.name === 'lte-tab-item');
      }
    }
  };

</script>
