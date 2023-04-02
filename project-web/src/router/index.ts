import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/components",
      name: "components",
      component: () => import("../views/Components.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/Search.vue"),
    },
    {
      path: "/statistics",
      name: "statistics",
      component: () => import("../views/Statistics.vue"),
    },
    {
      path: "/download",
      name: "download",
      component: () => import("../views/Download.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    }
  ],
});

export default router;