// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Animate from "../views/Animate.vue";
import Api from "../views/Api.vue";
import TestForm from "../views/TestForm.vue";
import ToDoList from "../views/ToDoList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/animate",
    name: "animate",
    component: Animate,
  },
  {
    path: "/form",
    name: "form",
    component: TestForm,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/api",
    name: "Api",
    component: Api,
  },
  {
    path: "/todo",
    name: "list",
    component: ToDoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
