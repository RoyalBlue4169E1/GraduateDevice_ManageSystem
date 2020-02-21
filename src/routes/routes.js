import DashboardLayout from "@/pages/Layout/DashboardLayout.vue"
import Login from '@/pages/Layout/Login.vue';

import UserProfile from "@/pages/UserProfile.vue";
import DeviceManage from "@/pages/DeviceManage.vue";
import UserManage from "@/pages/UserManage.vue";
import HoldingDeviceProfile from '@/pages/HoldingDeviceProfile.vue';
import Message from "@/pages/Message.vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component:DashboardLayout,
    redirect: "/user",
    children:[
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path:"message",
        name:"Message",
        component:Message
      },
      {
        path:"deviceManage",
        name:"Device Manage",
        component:DeviceManage
      },
      {
        path:"userManage",
        name:"User Manage",
        component:UserManage
      },
      {
        path:"holdingDeviceProfile",
        name:"HoldingDevice Profile",
        component:HoldingDeviceProfile
      }

    ]
  },
  {
    path:"/login",
    name:"Login",
    component:Login
  },

];

export default routes;








