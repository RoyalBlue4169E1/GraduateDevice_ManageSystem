<template>
  <div
    class="sidebar"
    :data-color="activeColor"
    :data-image="backgroundImage"
    :style="sidebarStyle"
  >
    <div class="logo">                              <!--导航栏VUE logo-->
      <a href="#" class="simple-text logo-mini">
        <div class="logo-img">
          <img :src="imgLogo" alt="" />
        </div>
      </a>
                                                    <!--logo附上链接-->
      <a
        href="https://www.creative-tim.com/product/vue-material-dashboard"
        target="_blank"
        class="simple-text logo-normal"
      >
        {{ title }}                                 <!--可改系统名-->
      </a>
    </div>
    <div class="sidebar-wrapper">
      <slot name="content"></slot>                  <!--预留位置手机登陆时补充MoblieMenu-->
      <md-list class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot>                                      <!--预留位置显示菜单-->
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :to="link.path"
            :link="link"
          >
          </sidebar-link>                           <!--循环显示导航-->
        </slot>
      </md-list>
    </div>
  </div>
</template>
<script>
import SidebarLink from "./SidebarLink.vue";

export default {
  components: {
    SidebarLink
  },
  props: {
    title: {
      type: String,
      default: "研究生设备管理系统"
    },
    backgroundImage: {
      type: String,
      default: require("@/assets/img/sidebar-2.jpg")
    },
    imgLogo: {
      type: String,
      default: require("@/assets/img/vue-logo.png")
    },
    activeColor: {                          //更换选中时背景颜色
      type: String,
      default: "green",
      validator: value => {
        let acceptedValues = ["", "purple", "blue", "green", "orange", "red"];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      };
    }
  }
};
</script>
<style>
@media screen and (min-width: 991px) {                      
  .nav-mobile-menu {
    display: none;
  }
}
</style>

<!--当屏幕宽度小于991px 隐藏sidebar-->