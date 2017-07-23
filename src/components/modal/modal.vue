<template>
  <div class="modal fade in" style="padding-right: 17px;" :class="['modal-' + type]" :style="{display: innerValue ? 'block': 'none'}">
    <div class="modal-dialog" :class="modalSizeClass" :style="modalStyle">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" v-if="closable"><span @click="cancelClick">×</span></button>
          <slot name="modal-header">
            <h4 class="modal-title">{{header}}</h4>
          </slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="modal-footer">
            <button type="button" class="btn pull-left" :class="[!type ? 'btn-default': 'btn-outline']" @click="cancelClick">{{cancelText}}</button>
            <button type="button" class="btn" :class="[!type ? 'btn-primary': 'btn-outline']" @click="okClick">{{okText}}</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'lte-modal',
    props: {
      type: { type: String, default: '' },
      header: { type: String, default: '' },
      okText: { type: String, default: 'Save changes' },
      cancelText: { type: String, default: 'Cancel' },
      closable: { type: Boolean, default: true },
      value: { type: Boolean, default: false },
      size: { type: String, default: '' },
      width: { type: [Number, String] }
    },
    data() {
      return {
        innerValue: false
      }
    },
    mounted() {
      this.innerValue = this.value;
    },
    computed: {
      modalSizeClass() {
        return this.size ? ['modal-' + this.size] : null;
      },
      modalStyle() {
        return this.width ? { width: this.width + 'px' } : null;
      }
    },
    watch: {
      value(newVal) {
        this.innerValue = newVal;
      }
    },
    methods: {
      cancelClick(evt) {
        this.innerValue = false;
        this.$emit('input', false);
        this.$emit('cancel', evt);
      },
      okClick(evt) {
        this.$emit('ok', evt);
      }
    }
  };

</script>
