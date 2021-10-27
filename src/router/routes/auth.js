import { canNavigate } from '../index'
import Login from "../../views/AuthLogin.vue";
import ForgotPass from "../../views/AuthForgotPass.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login',
      requireAuth: false
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/forgot-pass",
    name: "ForgotPass",
    component: ForgotPass,
    meta: {
      title: 'ForgotPass',
      requireAuth: false
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  }
]

export default routes