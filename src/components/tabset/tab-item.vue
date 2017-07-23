<template>
  <div class="lte-tab-item tab-pane" :class="{active: active}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'lte-tab-item',
    props: {
      name: { type: [String, Number] },
      header: { type: String, default: '' },
      icon: { type: String, default: '' },
      closable: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false }
    },
    data() {
      return {
      }
    },
    mounted() {
      this._updateParent();
    },
    computed: {
      active() {
        return this.name === this.$parent.innerValue;
      },
      propsChange() {
        return `name = ${this.name} | header = ${this.header} | icon = ${this.icon} | closable = ${this.closable} | disabled = ${this.disabled}`;
      }
    },
    watch: {
      propsChange() {
        this._updateParent();
      }
    },
    methods: {
      removeSelf() {
        this.$el.remove();
        this.$destroy(true);
        this._updateParent();
      },
      _updateParent() {
        this.$parent.updateTabs();
      }
    }
  };

</script>
