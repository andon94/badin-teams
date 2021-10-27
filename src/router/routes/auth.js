import { canNavigate } from '../index'
import Login from "../../views/AuthLogin.vue";
import ForgotPassword from "../../views/AuthForgotPassword.vue";

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
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: 'ForgotPassword',
      requireAuth: false
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  }
]

export default routes