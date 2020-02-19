import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";


import Message from "@/pages/Message.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/user",
    children: [
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path:"message",
        name:"Message",
        component:Message
      }
    ]
  }
];

export default routes;
