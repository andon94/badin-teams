import Vue from "vue";
import VueRouter from "vue-router";

import { baseFetcher } from "../services/api/api"

// import { ability } from '../services/authorization/ability'
// import defineRulesFor from '../services/authorization/defineRulesFor'
// import { MANAGE } from '../services/authorization/constants'

import Home from "../views/Home.vue";
import Auth404 from "../views/Auth404.vue";
import authRoutes from './routes/auth.js'
import teamsRoutes from './routes/teams.js'
import employeesRoutes from './routes/employees.js'
import projectsRoutes from './routes/projects.js'
import clientsRoutes from './routes/clients.js'
import store from "../store"
import {CAN_SEE_PAGE_ABILITY} from "../services/authorization/permissions";
import * as Roles from "../services/authorization/permissions";

Vue.use(VueRouter);

export const isLoggedIn = () => {
  try {
    const badinTeamsStorage = localStorage.getItem('badinTeamsStorage');

    if(badinTeamsStorage) {
      const parsedStorage = JSON.parse(badinTeamsStorage);
      const isLoggedIn = Boolean(parsedStorage.token);
      if(isLoggedIn) {
        if(parsedStorage.roles.includes('ADMIN')) {
          store.dispatch('setPermissions', Roles.ADMIN)
        } else {
          store.dispatch('setPermissions', Roles.UNAUTHORIZED)
        }
        /// ?????
        baseFetcher.checkLoginStatus()
        return isLoggedIn;
      }

      return null;

    }

  } catch (e) {
    return null;
  }


}

export const canNavigate = (meta, next) => {
    const getPermissions = store.state.permissions;

    // let roles = []
    // const storage = JSON.parse(localStorage.getItem('badinTeamsStorage'))
    // if (storage) roles = [...storage.roles]
    //
    // if (roles.length) {
    //   roles.forEach(role => ability.update(defineRulesFor(role)))
    //   const can = ability.can(MANAGE, meta)
    //   can ? next() : next(`/404`)
    // } else {
    //   ability.update(defineRulesFor('ROLE_UNAUTHORIZED'))
    //   const can = ability.can(MANAGE, meta)
    //   can ? next() : next(`/404`)
    // }
  if(getPermissions) {
    const permissions = getPermissions();
    if(typeof permissions.can === 'function' && permissions.can(CAN_SEE_PAGE_ABILITY, meta)) {
      next()
    } else {
      next('/404');
    }
  } else {
    next();
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
