import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

import authRoutes from './modules/auth.js'
import teamsRoutes from './modules/teams.js'
import employeesRoutes from './modules/employees.js'
import projectsRoutes from './modules/projects.js'
import clientsRoutes from './modules/clients.js'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  ...authRoutes,
  ...teamsRoutes,
  ...employeesRoutes,
  ...projectsRoutes,
  ...clientsRoutes,

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | BadinTeams`;
  next();
})

export default router;
