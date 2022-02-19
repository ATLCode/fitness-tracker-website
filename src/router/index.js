import { createRouter, createWebHashHistory } from "vue-router";
import FrontPage from "../views/FrontPage.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "FrontPage",
    component: FrontPage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
