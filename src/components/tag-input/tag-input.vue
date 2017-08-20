<style lang="stylus">
  .lte-tag-input {
    border: 1px solid #d2d6de;
    line-height: 34px;
    background: #fff;
    padding: 0 5px;

    &.focus {
      border-color: #3c8dbc;
    }
    /* min-height: 34px; */
    .form-control {
      border: none;
      width: auto;
      display: inline;
      padding-left: 0;
    }
    .label {
      float: left;
      margin-top: 5px;
      margin-right: 5px;
      height: 24px;
      line-height: 24px;
      padding: 0 .6em;
      .fa.fa-remove {
        float: right;
        cursor: pointer;
        margin: 0 -5px 0 5px;
        &:hover {
          color: orange;
        }
      }
    }
  }
</style>
<template>
  <div class="lte-tag-input" @click="$refs.input.focus()" :class="{focus: focused}">
    <label class="label label-primary" v-for="(t, idx) in tags" :key="idx">
      {{t}}
      <i class="fa fa-remove" @click="removeTag(idx)"></i>
    </label>
    <input type="text" class="form-control" v-model="inputTag" ref="input" @blur="focused = false" @focus="focused = true" @keypress.enter="addTag">
  </div>
</template>
<script>
  export default {
    name: 'lte-tag-input',
    data() {
      return {
        focused: false,
        tags: [],
        inputTag: ''
      };
    },
    props: {
      allowDuplicate: { type: Boolean, default: false },
      value: null
    },
    mounted() {
      this._setValue();
    },
    watch: {
      value() {
        this._setValue();
      }
    },
    methods: {
      removeTag(idx) {
        this.tags.splice(idx, 1);
      },
      addTag() {
        if (this.inputTag) {
          // 如果不允许重复，但重复，禁止添加
          if (!this.allowDuplicate && this.tags.indexOf(this.inputTag) >= 0) {
            return;
          }
          this.tags.push(this.inputTag);
          this._emitValue();
        }
        this.inputTag = '';
      },
      _setValue() {
        this.tags = (this.value || []).slice(0);
      },
      _emitValue() {
        this.$emit('input', this.tags);
      }
    }
  };

</script>
