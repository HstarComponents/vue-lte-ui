<style>
  .monaco-editor .margin {
    margin: 0;
  }
</style>
<template>
  <div class="monaco-editor" :style="{height: this.height + 'px'}"></div>
</template>
<script>
  export default {
    name: 'monaco-editor',
    props: {
      language: { type: String, default: 'typescript' },
      theme: { type: String, default: 'vs' }, //"vs" | "vs-dark" | "hc-black"
      height: { type: Number, default: 100 },
      readonly: { type: Boolean, default: false },
      value: null,
    },
    data() {
      return {
        editor: null
      };
    },
    created() {
      this.initEditor();
    },
    watch: {
      theme() {
        window.monaco && (window.monaco.editor.setTheme(this.theme));
      },
      readonly() {
        this.editor && (this.editor.updateOptions({ readOnly: this.readonly }));
      },
      language() {
        if (this.editor && window.monaco) {
          window.monaco.editor.setModelLanguage(this.editor.getModel(), this.language);
        }
      }
    },
    methods: {
      initEditor() {
        let intervalId = setInterval(() => {
          console.log('xxx');
          if (!window.monaco) {
            return;
          }
          clearInterval(intervalId);
          this.editor = monaco.editor.create(this.$el, {
            value: this.value || '',
            theme: this.theme,
            language: this.language,
            readOnly: this.readonly
          });
        }, 300);
      }
    }
  };

</script>
