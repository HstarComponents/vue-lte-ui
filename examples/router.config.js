import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {
  Home
} from './pages';

const routes = [
  { path: '', component: Home }
];

export const router = new VueRouter({
  mode: 'hash',
  routes
});
