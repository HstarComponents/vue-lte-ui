<style lang="stylus">
  .full-height {
    height: 100%;
  }
  .page-demo-container {
    .half-height {
      height: 50%;
    }
    .left-border {
      border-left: 1px solid #ccc;
    }
    .preview-container {
      background: #fff;
      padding: 0;
    }
  }
</style>
<template>
  <div class="page-demo-container full-height">
    <div class="row full-height">
      <div class="col-xs-6 full-height">
        <div class="top-part half-height">
          <lte-tabset v-model="tabsetVal">
            <lte-tab-item header="Document" name="doc">
              <div style="overflow:auto" :style="{height: editorHeight + 'px'}">
                <md-dob-box :markdown="document"></md-dob-box>
              </div>
            </lte-tab-item>
          </lte-tabset>
        </div>
        <div class="bottom-part half-height">
          <lte-tabset v-model="tabsetVal2">
            <lte-tab-item header="HTML" name="html">
              <ace-editor v-model="demoHtmlCode" mode="html" :height="editorHeight"></ace-editor>
            </lte-tab-item>
            <lte-tab-item header="JavaScript" name="js">
              <ace-editor v-model="demoJsCode" :height="editorHeight"></ace-editor>
            </lte-tab-item>
          </lte-tabset>
        </div>
      </div>
      <div class="col-xs-6 full-height left-border preview-container">
        <live-code-box :code="liveHtml"></live-code-box>
      </div>
    </div>
  </div>
</template>
<script>
  import { templateService, eventBus } from '../../services';
  export default {
    data() {
      return {
        liveHtml: '',
        tabsetVal: 'doc',
        tabsetVal2: 'html',
        document: '# Welcome!',
        demoHtmlCode: '',
        demoJsCode: '',
        editorHeight: 100,
        componentName: 'box'
      };
    },
    created() {
      this.updateLiveHtml = _.debounce(this.updateLiveHtml, 500);
      eventBus.on('route-change', path => {
        this.processRouteChange(path);
      });
      this.processRouteChange(this.$route.path);
    },
    mounted() {
      this.loadComponentDemoAndDocument();
      this.liveHtml = this._buildHtmlForPreview();
      window.addEventListener('resize', this._setEditorHeight, false);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this._setEditorHeight);
    },
    watch: {
      demoHtmlCode() {
        this.updateLiveHtml();
      },
      demoJsCode() {
        this.updateLiveHtml();
      }
    },
    methods: {
      processRouteChange(path) {
        let arr = path.split('/');
        this.componentName = arr.pop();
        this.loadComponentDemoAndDocument();
      },
      updateLiveHtml() {
        this.liveHtml = this._buildHtmlForPreview();
      },
      loadComponentDemoAndDocument() {
        this._loadDocument();
        this._loadDemo();
        this._setEditorHeight();
      },
      _setEditorHeight() {
        this.$nextTick(() => {
          this.editorHeight = this.$el.offsetHeight / 2 - 64;
        });
      },
      _buildHtmlForPreview() {
        let html = templateService.buildHtmlForPreview(this.demoHtmlCode, this.demoJsCode);
        return html;
      },
      _loadDocument() {
        axios.get(`http://localhost:8080/src/components/${this.componentName}/README.md`).then(res => {
          let doc = res.data; this.document = doc;
        });
      },
      _loadDemo() {
        axios.get(`http://localhost:8080/src/components/${this.componentName}/usage.html`)
          .then(({ data }) => { this.demoHtmlCode = data; });
        axios.get(`http://localhost:8080/src/components/${this.componentName}/usage.js`)
          .then(({ data }) => { this.demoJsCode = data; })
      }
    }
  };

</script>
