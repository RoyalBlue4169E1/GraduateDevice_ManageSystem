// =========================================================
// * Vue Material Dashboard - v1.3.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";                                        //入口组件

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";                //全局组件引入
import GlobalDirectives from "./globalDirectives";                //全局指令引入，如鼠标点击等交互指令
import Notifications from "./components/NotificationPlugin";      //通知系统引入

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";         //仪表盘模块引入

import Chartist from "chartist";                //js数据可视化工具引入

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"         //精确匹配时激活的css类
});

//引入后全部使用↓↓↓

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
    
  }
});
