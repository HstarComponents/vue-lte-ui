<template>
  <div class="lte-alert" :class="alertClass">
    <button type="button" class="close" v-if="showCloseBtn" @click="closeBtnClick">×</button>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'lte-alert',
    props: {
      type: { type: String, default: 'info' },
      calloutStyle: { type: Boolean, default: false },
      showCloseBtn: { type: Boolean, default: false }
    },
    beforeDestroy() {
      this.$emit('close', true);
    },
    computed: {
      alertClass() {
        let prefix = this.calloutStyle ? 'callout' : 'alert';
        return [prefix, `${prefix}-${this.type}`];
      }
    },
    methods: {
      closeBtnClick(evt) {
        this.$el.remove(); // 使用DOM方法，移除自身
        this.$destroy(true); // 释放组件
      }
    }
  };

</script>
