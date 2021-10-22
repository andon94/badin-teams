import Vue from "vue";
import VueRouter from "vue-router";

import { ability } from './rules/ability'
import defineRulesFor from './rules/defineRulesFor'
import { MANAGE } from './rules/constants'

import Home from "../views/Home.vue";
import authRoutes from './modules/auth.js'
import teamsRoutes from './modules/teams.js'
import employeesRoutes from './modules/employees.js'
import projectsRoutes from './modules/projects.js'
import clientsRoutes from './modules/clients.js'

Vue.use(VueRouter);

export const canNavigate = (meta, next) => {
    let roles = []
    const storage = JSON.parse(localStorage.getItem('badinTeamsStorage'))
    if (storage) roles = [...storage.roles]

    if (roles.length) {
      roles.forEach(role => ability.update(defineRulesFor(role)))
      const can = ability.can(MANAGE, meta)
      can ? next() : next(`/not-found`)
    } else {
      ability.update(defineRulesFor('ROLE_UNAUTHORIZED'))
      const can = ability.can(MANAGE, meta)
      can ? next() : next(`/not-found`)
    }
}

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
