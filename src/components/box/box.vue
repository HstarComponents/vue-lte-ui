<template>
  <div class="lte-box box" :class="[boxType, {'collapsed-box': collapsed}]">
    <div class="box-header" :class="{'with-border': showHeaderBorder}">
      <h3 class="box-title">
        <slot name="box-title">
          <i v-if="!!icon" :class="icon"></i> {{header}}
        </slot>
      </h3>
      <div class="box-tools pull-right">
        <slot name="box-tools">
        </slot>
      </div>
    </div>
    <div class="box-body">
      <slot></slot>
    </div>
    <div class="box-footer clearfix" v-if="!!$slots['box-footer']">
      <slot name="box-footer"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'lte-box',
    props: {
      type: { type: String, default: 'default' },
      header: { type: String, default: '' },
      icon: { type: String },
      collapsed: { type: Boolean, default: false },
      showHeaderBorder: { type: Boolean, default: true }
    },
    computed: {
      boxType() {
        return `box-${this.type}`;
      }
    }
  };

</script>
