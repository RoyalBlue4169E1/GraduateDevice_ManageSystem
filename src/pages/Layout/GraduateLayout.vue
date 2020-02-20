<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>         <!--  触发通知的标签-->


    <side-bar>                                      <!--右侧导航栏-->
     <mobile-menu slot="content"></mobile-menu>    <!--用MobliMenu补充sidebar中预留的<sllot name="content"></slot>-->

      <sidebar-link to="/graduate/user"><!--路由-->
        <md-icon>person</md-icon><!--选项图标-->
        <p>研究生个人信息</p>
      </sidebar-link>
      <sidebar-link to="/graduate/table">
        <md-icon>content_paste</md-icon>
        <p>设备信息</p>
      </sidebar-link>

    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>                     <!--内容区头部：左侧显示当前路由名 右侧工具栏-->

      <dashboard-content> </dashboard-content>                        <!--动画补充-->

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>       <!--内容页底部的作者注释-->
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>
