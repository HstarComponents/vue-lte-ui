<template>
  <div class="lte-small-box small-box" :class="boxBgClass" :style="boxStyle">
    <div class="inner">
      <slot></slot>
    </div>
    <div class="icon">
      <i :class="icon"></i>
    </div>
    <a href="javascript:;" class="small-box-footer" v-if="!!$slots['box-footer']" @click="footerClick">
      <slot name="box-footer"></slot>
    </a>
  </div>
</template>
<script>
  export default {
    name: 'lte-small-box',
    props: {
      icon: { type: String },
      boxBg: { type: String },
      boxBgClass: { type: String }
    },
    computed: {
      boxStyle() {
        return this._getBgStyle(this.boxBg);
      }
    },
    methods: {
      footerClick(evt) {
        this.$emit('footer-click', evt);
      },
      _getBgStyle(color) {
        let style = {};
        color && (style['background-color'] = color);
        return style;
      }
    }
  };

</script>
