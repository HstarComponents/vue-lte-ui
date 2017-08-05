<template>
  <span class="lte-tag" :class="classArr" :style="{'background-color': bgColor + '!important'}">
    <slot></slot>
  </span>
</template>
<script>
  export default {
    name: 'lte-tag',
    props: {
      type: { type: String, default: 'primary' },
      badge: { type: Boolean, default: false },
      bgColor: { type: String, default: '' },
      bgClass: { type: String, default: '' }
    },
    computed: {
      classArr() {
        let clsArr = [];
        if (this.badge) {
          clsArr.push('badge');
          this.bgClass && (clsArr.push(this.bgClass));
        } else {
          clsArr.push('label');
          this.type && (clsArr.push(`label-${this.type}`));
        }
        return clsArr;
      }
    }
  };

</script>
