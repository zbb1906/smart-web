import Vue from 'vue';
import Router from 'vue-router';
import Layout from 'components/layout/Layout';

Vue.use(Router);

const routerMap = [{
  path: "/login",
  name: "登录",
  component: resolve => require(['views/Login.vue'], resolve)
}, {
  path: '/',
  name: '首页',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    name: '任务看板',
    path: 'dashboard',
    component: resolve => require(['views/dashboard/Dashboard.vue'], resolve)
  }]

}];

export default routerMap;
