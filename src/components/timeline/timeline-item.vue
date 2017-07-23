<template>
  <li :class="{'time-label': isLabel}">
    <template v-if="isLabel">
      <span :class="labelBgClass"><slot></slot></span>
    </template>
    <template v-if="!isLabel">
      <i :class="[icon, iconBgClass]"></i>
      <div class="timeline-item" v-if="!end">
        <slot></slot>
      </div>
    </template>
  </li>
</template>
<script>
  export default {
    name: 'lte-timeline-item',
    props: {
      isLabel: { type: Boolean, default: false },
      labelBgClass: { type: String },
      icon: { type: String, default: '' },
      iconBgClass: { type: String, default: '' },
      end: { type: Boolean, default: false }
    }
  };

</script>
