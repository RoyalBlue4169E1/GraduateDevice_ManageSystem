<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>         <!--  触发通知的标签-->


    <side-bar>                                      <!--右侧导航栏-->
     <mobile-menu slot="content"></mobile-menu>    <!--用MobliMenu补充sidebar中预留的<sllot name="content"></slot>-->

      <sidebar-link to="/user"><!--路由-->
        <md-icon>person</md-icon><!--选项图标-->
        <p>User Profile</p>
      </sidebar-link>

      <sidebar-link to="/message">                      <!--########注意：用v-if来根据权限条件渲染导航栏选项-->
        <md-icon>notifications</md-icon>                <!--########注意： 一定要加上全局导航守卫防止跨权限访问-->
        <p>Message</p>
      </sidebar-link>

      <sidebar-link to="/deviceManage">
        <md-icon>notifications</md-icon>
        <p>Device Manage</p>
      </sidebar-link>

      <sidebar-link to="/userManage">
        <md-icon>notifications</md-icon>
        <p>User Manage</p>
      </sidebar-link>

      <sidebar-link to="/holdingDeviceProfile">
        <md-icon>notifications</md-icon>
        <p>HoldingDevice Profile</p>
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
  },
  data:function(){
    return{
      identity:"graduate"
    }
      
    
  }
};
</script>
