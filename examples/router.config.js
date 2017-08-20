import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {
  Home,
  DemoContainer
} from './pages';

const routes = [
  { path: '', component: DemoContainer }
];

export const router = new VueRouter({
  mode: 'hash',
  routes
});
