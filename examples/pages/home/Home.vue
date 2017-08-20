<template>
  <div class="page-home">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-xs-6">
            <lte-tag>Hello</lte-tag>
            <lte-tag type="danger">Hello</lte-tag>
            <lte-tag badge bg-class="bg-green">Hello</lte-tag>
            <lte-tag badge bg-color="#abc">Hello</lte-tag>
            <lte-tag bg-color="orange">Hello</lte-tag>
          </div>
          <div class="col-xs-6">
            {{tagInputValues}}
            <lte-tag-input v-model="tagInputValues"></lte-tag-input>
          </div>
        </div>
        <div class="row">
          {{ratingValue}}
          <br>
          <lte-rating v-model="ratingValue" :readonly="true"></lte-rating>
        </div>
        <div class="row">
          <lte-timeline>
            <lte-timeline-item icon="fa fa-leaf">
              <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>

              <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

              <div class="timeline-body">
                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity
                jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...
              </div>
              <div class="timeline-footer">
                <a class="btn btn-primary btn-xs">Read more</a>
                <a class="btn btn-danger btn-xs">Delete</a>
              </div>
            </lte-timeline-item>
            <lte-timeline-item icon="fa fa-list" :end="true" />
          </lte-timeline>
        </div>
        <div class="row">
          {{modalShown}}
          <lte-modal v-model="modalShown" size="sm" width="1111">
            Hello,你丫要干啥？
          </lte-modal>
        </div>
        <div class="row">
          <div class="col-md-6">
            <lte-tabset v-model="xx" @tab-remove="tabRemove">
              <template slot="tabset-tools">
                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                          Dropdown <span class="caret"></span>
                        </a>
                  <ul class="dropdown-menu">
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                    <li role="presentation" class="divider"></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                  </ul>
                </li>
              </template>
              <lte-tab-item :header="xxxs" name="t1" icon="fa fa-home" closable>
                AAA,Tab1
              </lte-tab-item>
              <lte-tab-item header="Tab2" name="t2" icon="fa fa-lock">
                AAA,Tab2
              </lte-tab-item>
              <lte-tab-item header="Tab3" name="t3">
                AAA,Tab3
              </lte-tab-item>
            </lte-tabset>
          </div>
          <div class="col-md-6">
            <lte-tabset v-model="xx" direction="right">
              <template slot="tabset-tools">
                <li class="pull-left header"><i class="fa fa-th"></i> Custom Tabs</li>
              </template>
              <lte-tab-item :header="xxxs" name="t1" icon="fa fa-home">
                AAA,Tab1
              </lte-tab-item>
              <lte-tab-item header="Tab2" name="t2" icon="fa fa-lock">
                AAA,Tab2
              </lte-tab-item>
              <lte-tab-item header="Tab3" name="t3">
                AAA,Tab3
              </lte-tab-item>
            </lte-tabset>
          </div>
        </div>
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

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tagInputValues: ['xxxx', 'bbbb'],
        ratingValue: 3,
        modalShown: false,
        xx: 't1',
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
        xxx: '我是一个Tooltip',
        xxxs: ''
      };
    },
    created() {
    },
    methods: {
      tabRemove(item) {
        alert('remove' + item.name);
      },
      footerClick() {
        alert('footer click');
      },
      alertClose() {
        console.log('alert closed.');
      }
    }
  };

</script>
