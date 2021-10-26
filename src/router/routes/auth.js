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
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  },
  {
    path: "/forgot-pass",
    name: "ForgotPass",
    component: ForgotPass,
    meta: {
      title: 'ForgotPass',
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  }
]

export default routes