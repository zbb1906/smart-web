import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: (resolve) => {
      require(['@/views/index'], resolve);
    }
  }]
});
export default routes;
