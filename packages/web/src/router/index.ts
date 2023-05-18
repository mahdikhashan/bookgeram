import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";

import { routes as BookRouter } from "../features/Book";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, name: "Home", meta: { layout: 'Default' } },
    ...BookRouter,
  ],
});

export default router;
