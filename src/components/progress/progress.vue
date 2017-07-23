<style lang="stylus">
  .lte-progress .progress-text {
    position: absolute;
    width: 100%;
    text-align: center;
  }
</style>
<template>
  <div class="lte-progress progress" :class="['progress-' + size, {active: active, vertical: vertical}]">
    <div class="progress-bar" :class="['progress-bar-' + type, {'progress-bar-striped': striped}]" :style="progressBarStyle">
    </div>
    <div class="progress-text">{{text}}</div>
  </div>
</template>
<script>
  export default {
    name: 'lte-progress',
    props: {
      type: { type: String, default: 'info' },
      striped: { type: Boolean, default: false },
      vertical: { type: Boolean, default: false },
      value: { type: Number },
      text: { type: String, default: '' },
      max: { type: Number, default: 100 },
      size: { type: String, default: '' },
      active: { type: Boolean, default: false }
    },
    computed: {
      progressBarStyle() {
        let percent = Math.min((this.value || 0) / this.max * 100, 100).toFixed(2);
        return { [this.vertical ? 'height' : 'width']: percent + '%' };
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
