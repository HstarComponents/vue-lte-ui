<style lang="stylus">
  .lte-rating {
    i {
      cursor: pointer;
      &.fa-star {
        color: #f5a623;
      }
    }
    &.readonly i {
      cursor: default;
    }
  }
</style>
<template>
  <span class="lte-rating" :class="{readonly: readonly}" @mouseleave="onMouseLeave">
    <i class="fa" v-for="idx in max" @click="starClick(idx)" @mousemove="onMouseMove(idx)"
    :class="{'fa-star': idx <= innerValue || idx <= tempIdx, 'fa-star-o': idx > innerValue}"></i>
  </span>
</template>
<script>
  export default {
    name: 'lte-rating',
    props: {
      max: { type: Number, default: 5 },
      allowHalf: { type: Boolean, default: false },
      value: { type: Number, default: 1 },
      readonly: { type: Boolean, default: false }
    },
    data() {
      return {
        innerValue: -1,
        tempIdx: -1
      };
    },
    created() {
      this.innerValue = this.value;
    },
    watch: {
      value() {
        this.innerValue = this.value;
      },
      max(newVal) {
        this._setStarArr(newVal);
      }
    },
    methods: {
      onMouseMove(idx) {
        if (this.readonly) {
          return;
        }
        this.tempIdx = idx;
      },
      onMouseLeave() {
        this.tempIdx = -1;
      },
      starClick(idx) {
        if (this.readonly) {
          return;
        }
        this._setValue(idx);
      },
      _setValue(v) {
        this.$emit('input', v);
        this.$emit('change', v);
      }
    }
  };

</script>
