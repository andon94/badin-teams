import Vue from "vue";
import VueRouter from "vue-router";

import { baseFetcher } from "../services/api"

import { ability } from './rules/ability'
import defineRulesFor from './rules/defineRulesFor'
import { MANAGE } from './rules/constants'

import Home from "../views/Home.vue";
import Auth404 from "../views/Auth404.vue";
import authRoutes from './modules/auth.js'
import teamsRoutes from './modules/teams.js'
import employeesRoutes from './modules/employees.js'
import projectsRoutes from './modules/projects.js'
import clientsRoutes from './modules/clients.js'

Vue.use(VueRouter);

export const isLoggedIn = () => {
  let auth = JSON.parse(localStorage.getItem('badinTeamsStorage'))
  if (!auth) auth = null
  else {
    // ubaci expiration uslov
    if (auth.token) auth = true
  }
  baseFetcher.checkLoginStatus()
  return auth
}

export const canNavigate = (meta, next) => {
    let roles = []
    const storage = JSON.parse(localStorage.getItem('badinTeamsStorage'))
    if (storage) roles = [...storage.roles]

    if (roles.length) {
      roles.forEach(role => ability.update(defineRulesFor(role)))
      const can = ability.can(MANAGE, meta)
      can ? next() : next(`/404`)
    } else {
      ability.update(defineRulesFor('ROLE_UNAUTHORIZED'))
      const can = ability.can(MANAGE, meta)
      can ? next() : next(`/404`)
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
  {
    path: "/404",
    name: "NotFound",
    component: Auth404,
    meta: {
      title: '404',
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
