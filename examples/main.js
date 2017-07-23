import Vue from 'vue';
import { router } from './router.config';
import App from './App.vue';

import LTEUI from '../src';

Vue.use(LTEUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
