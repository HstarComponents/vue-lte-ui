<template>
  <div class="lte-info-box info-box" :class="boxBgClass" :style="boxStyle">
    <span class="info-box-icon" :class="iconBgClass" :style="iconStyle">
      <i :class="icon"></i>
    </span>
    <div class="info-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'lte-info-box',
    props: {
      icon: { type: String },
      iconBg: { type: String },
      iconBgClass: { type: String },
      boxBg: { type: String },
      boxBgClass: { type: String }
    },
    computed: {
      boxStyle() {
        return this._getBgStyle(this.boxBg);
      },
      iconStyle() {
        return this._getBgStyle(this.iconBg);
      }
    },
    methods: {
      _getBgStyle(color) {
        let style = {};
        color && (style['background-color'] = color);
        return style;
      }
    }
  };

</script>
