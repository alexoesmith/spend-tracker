import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import { auth } from "../firebase";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }

  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
    next("/login");
    return;
  }

  next();
});
export default router;
