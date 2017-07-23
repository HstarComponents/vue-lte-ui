<template>
  <div class="page-home">
    <label for="">Type: <input type="text" v-model="boxOpt.type"></label>
    <label for="">Show Header Border: <input type="checkbox" v-model="boxOpt.showHeaderBorder"></label>
    <label for="">Collapsed: <input type="checkbox" v-model="boxOpt.collapsed"></label>
    <hr>
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
    <hr>
    <label for="">Box Bg: <input type="text" v-model="infoBoxOpt.boxBg"></label>
    <label for="">Icon: <input type="text" v-model="infoBoxOpt.icon"></label>
    <label for="">Icon Bg: <input type="text" v-model="infoBoxOpt.iconBg"></label>
    <hr>
    <lte-info-box :icon="infoBoxOpt.icon" :icon-bg="infoBoxOpt.iconBg" :icon-bg-class="infoBoxOpt.iconBgClass" :box-bg="infoBoxOpt.boxBg" :box-bg-class="infoBoxOpt.boxBgClass">
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
</template>
<script>
  export default {
    data() {
      return {
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
        }
      };
    }
  };

</script>
