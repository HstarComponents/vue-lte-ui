<template>
  <div class="page-home">
    <div class="row">
      <div class="col-md-4">
        <input type="number" v-model.number="pageState.totalCount">
        <input type="number" v-model.number="pageState.value">
        <lte-pagination :totalCount="pageState.totalCount" v-model="pageState.value"></lte-pagination>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
    </div>
    <hr>
    <label for="">Type: <input type="text" v-model="boxOpt.type"></label>
    <label for="">Show Header Border: <input type="checkbox" v-model="boxOpt.showHeaderBorder"></label>
    <label for="">Collapsed: <input type="checkbox" v-model="boxOpt.collapsed"></label>
    <hr>
    <div class="row">
      <div class="col-md-4">
        <lte-box header="xxx" :type="boxOpt.type" :show-header-border="boxOpt.showHeaderBorder" :collapsed="boxOpt.collapsed">
          <div>Box 内容区域</div>
          <template slot="box-title"><b>我是自定义加粗Title</b></template>
          <template slot="box-tools">
            <button type="button" class="btn btn-box-tool"><i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool"><i class="fa fa-times"></i></button>
          </template>
          <template slot="box-footer">
            这是Box Footer!
          </template>
        </lte-box>
      </div>
      <div class="col-md-4">
        <lte-box icon="fa fa-fire" header="我是另一个Box"></lte-box>
      </div>
      <div class="col-md-4"></div>
    </div>
    <hr>
    <label for="">Box Bg: <input type="text" v-model="infoBoxOpt.boxBg"></label>
    <label for="">Icon: <input type="text" v-model="infoBoxOpt.icon"></label>
    <label for="">Icon Bg: <input type="text" v-model="infoBoxOpt.iconBg"></label>
    <hr>
    <div class="row">
      <div class="col-md-4">
        <lte-info-box :icon="infoBoxOpt.icon" :icon-bg="infoBoxOpt.iconBg" :icon-bg-class="infoBoxOpt.iconBgClass" :box-bg="infoBoxOpt.boxBg"
          :box-bg-class="infoBoxOpt.boxBgClass">
          <span class="info-box-text">Inventory</span>
          <span class="info-box-number">5,200</span>

          <div class="progress">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
          <span class="progress-description">
                    50% Increase in 30 Days
                  </span>
        </lte-info-box>
      </div>
      <div class="col-md-4">
        <lte-small-box :box-bg-class="'bg-aqua'" icon="fa fa-lock" @footer-click="footerClick">
          <h3>150</h3>
          <p>New Orders</p>
          <template slot="box-footer">
            More info <i class="fa fa-arrow-circle-right"></i>
          </template>
        </lte-small-box>
      </div>
      <div class="col-md-4"></div>
    </div>
    <hr>
    <span v-lte-tooltip="xxx">鼠标放上来就会出现ToolTip</span>
    <hr>
    <div class="row">
      <div class="col-md-4">
        <lte-alert :show-close-btn="true" @close="alertClose">
          <h4><i class="icon fa fa-ban"></i> Alert!</h4>
          Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire soul, like these
          sweet mornings of spring which I enjoy with my whole heart.
        </lte-alert>
      </div>
      <div class="col-md-4">
        <lte-alert :calloutStyle="true" type="danger">
          <h4><i class="icon fa fa-ban"></i> Alert!</h4>
          Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire soul, like these
          sweet mornings of spring which I enjoy with my whole heart.
        </lte-alert>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <input type="number" v-model.number="pOpt.v">
        <lte-progress :value="pOpt.v" :max="pOpt.m" :text="pOpt.v.toString()" :active="true" :striped="true"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" :text="pOpt.v.toString()" size="sm" type="success" :active="true" :striped="true"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" :text="pOpt.v.toString()" size="xs" type="warning" :striped="true"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" :text="pOpt.v.toString()" size="xxs" type="danger" :striped="true"></lte-progress>
      </div>
      <div class="col-md-4">
        <lte-progress :value="pOpt.v" :max="pOpt.m" :text="pOpt.v.toString()" :active="true"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" type="success" :active="true"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" type="warning"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" type="danger"></lte-progress>
      </div>
      <div class="col-md-4">
        <lte-progress :value="pOpt.v" :max="pOpt.m" :vertical="true"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" type="success" :vertical="true"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" type="warning" :vertical="true"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" type="danger" :vertical="true"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" type="success" size="sm" :vertical="true"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" type="warning" size="xs" :vertical="true"></lte-progress>
        <lte-progress :value="pOpt.v" :max="pOpt.m" type="danger" size="xxs" :vertical="true"></lte-progress>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pOpt: {
          v: 60,
          m: 100
        },
        pageState: {
          totalCount: 100,
          value: 1
        },
        boxOpt: {
          type: 'info',
          showHeaderBorder: true,
          collapsed: false
        },
        infoBoxOpt: {
          boxBg: '',
          boxBgClass: 'bg-green',
          icon: 'fa fa-home',
          iconBg: '',
          iconBgClass: ''
        },
        xxx: '我是一个Tooltip'
      };
    },
    created() {
      setInterval(() => {
        this.xxx = Math.random();
      }, 5000);
    },
    methods: {
      footerClick() {
        alert('footer click');
      },
      alertClose() {
        console.log('alert closed.');
      }
    }
  };

</script>
