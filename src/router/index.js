import Vue from 'vue';
import Router from 'vue-router';
import routerMap from './router'
import NProgress from 'nprogress'; // 进度条插件
import 'nprogress/nprogress.css';
import {
  getToken
} from 'utils/token';
import whiteList from './whitelist'; // 登白名单

//const routerMap = require('./router');
Vue.use(Router);

const router = new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routerMap
})


router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  if (getToken()) { // 判断是否有token
    if (to.path === '/login') {
      next({
        path: '/'
      });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
      NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

export default router;
