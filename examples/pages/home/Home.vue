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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        boxOpt: {
          type: 'info',
          showHeaderBorder: true,
          collapsed: true
        }
      };
    }
  };

</script>
