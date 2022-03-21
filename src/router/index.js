import { createRouter, createWebHashHistory } from "vue-router";
import FrontPage from "../views/FrontPage.vue";
import Login from "../views/Login.vue";
import Library from "../views/Library.vue";
import Calendar from "../views/Calendar.vue";
import Settings from "../views/Settings.vue";
import useUserState from "@/store/useUserState";
const userState = useUserState();

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
  {
    path: "/library",
    name: "Library",
    component: Library,
  },
  {
    path: "/logout",
    name: "Logout",
    beforeEnter: () => {
      userState.logout();
      router.push("/");
    },
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  if (!userState.state.user) {
    const user = localStorage.getItem("user");
    if (user) {
      userState.state.user = user;
    }
  }
});

export default router;
