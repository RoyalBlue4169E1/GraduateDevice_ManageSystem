// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from "./components/SidebarPlugin";                     //引入侧边导航栏

// asset imports                引入css属性
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "./assets/scss/material-dashboard.scss";

// library auto imports
import "es6-promise/auto";

/**
 * This is the main Light Bootstrap Dashboard Vue plugin where dashboard related plugins are registerd.
 */
export default {
  install(Vue) {
    Vue.use(SideBar);
    Vue.use(VueMaterial);
  }
};



