import Vue from 'vue';
import { router } from './router.config';
import App from './App.vue';

import LTEUI from '../src';
Vue.use(LTEUI);

import { COMPONENTS } from './components';
COMPONENTS.forEach(c => {
  Vue.component(c.name, c);
});

import 'lodash';
import './config.js';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
