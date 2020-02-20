import GraduateLayout from "@/pages/Layout/GraduateLayout.vue";
import TutorLayout from "@/pages/Layout/TutorLayout.vue";
import LabManagerLayout from '@/pages/Layout/LabManagerLayout';
import CollageManagerLayout from '@/pages/Layout/CollageManagerLayout.vue';
import Login from '@/pages/Layout/Login.vue';

import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";


import Message from "@/pages/Message.vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/graduate",
  },
  {
    path:"/graduate",
    name:"graduate",
    component: GraduateLayout,
    redirect:"/graduate/user",
    children: [
      {
        path: "/graduate/user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "/graduate/table",
        name: "Table List",
        component: TableList
      },
      {
        path:"/graduate/message",
        name:"Message",
        component:Message
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








