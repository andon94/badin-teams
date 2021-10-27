import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Auth404 from "../views/Auth404.vue";
import auth from './routes/auth.js'
import teams from './routes/teams.js'
import employees from './routes/employees.js'
import projects from './routes/projects.js'
import clients from './routes/clients.js'

import store from "../store"
import {CAN_SEE_PAGE_ABILITY} from "../services/authorization/permissions";
import * as Roles from "../services/authorization/permissions";

Vue.use(VueRouter);

export const isLoggedIn = () => {
  try {
    const badinTeamsStorage = localStorage.getItem('badinTeamsStorage')

    if(badinTeamsStorage) {
      const parsedStorage = JSON.parse(badinTeamsStorage)
      const isLoggedIn = Boolean(parsedStorage.token)

      if(isLoggedIn) {
        // ubaci proveru za expiration
        if(parsedStorage.roles.includes('ROLE_ADMIN')) store.commit('setPermissions', Roles.ADMIN)
        return isLoggedIn;
      }
      return false
    }
    return false
  } catch (e) {
    return false
  }
}

export const canNavigate = (meta, next) => {
  if (meta.requireAuth) {
    const permissions = store.getters.permissions
    if (permissions) {
      if(typeof permissions.can === 'function' && permissions.can(CAN_SEE_PAGE_ABILITY, meta.title)) next()
      else next('/404');
    } else next('/404')
  } else next()
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home',
      requireAuth: false
    }
  },
  {
    path: "/404",
    name: "NotFound",
    component: Auth404,
    meta: {
      title: '404',
    }
  },
  ...auth,
  ...teams,
  ...employees,
  ...projects,
  ...clients,

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
