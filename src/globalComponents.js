//全局组件配置

import DropDown from "./components/Dropdown.vue";             //下拉列表组件引入

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
  }
};

export default GlobalComponents;
