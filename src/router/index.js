import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Teams from "../views/Teams.vue";
// import TeamBubbles from "../views/TeamBubbles.vue";
import CreateTeams from "../views/CreateTeams.vue";
import EditTeam from "../views/EditTeam.vue";
import EmployeeProfile from '../views/EmployeeProfile.vue'
import AddEmployee from '../views/AddEmployee.vue'
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPass from "../views/ForgotPass.vue";

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
  {
    path: "/teams",
    name: "Teams",
    component: Teams,
    meta: {
      title: 'Teams',
    },
  },
  // {
  //   path: "/teams/:id",
  //   name: "TeamBubbles",
  //   component: TeamBubbles,
  //   meta: {
  //     title: 'Team Bubbles',
  //   },
  // },
  {
    path: "/create-teams",
    name: "CreateTeams",
    component: CreateTeams,
    meta: {
      title: 'Create Teams',
    },
  },
  {
    path: "/create-teams/:id",
    name: "EditTeam",
    component: EditTeam,
    meta: {
      title: 'Edit a Team',
    },
  },
  {
    path: "/employee-profile/:id",
    name: "EmployeeProfile",
    component: EmployeeProfile,
    meta: {
      title: 'EmployeeProfile',
    },
  },
  {
    path: "/add-employee",
    name: "AddEmployee",
    component: AddEmployee,
    meta: {
      title: 'AddEmployee',
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register',
    },
  },
  {
    path: "/forgot-pass",
    name: "ForgotPass",
    component: ForgotPass,
    meta: {
      title: 'ForgotPass',
    },
  },
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
