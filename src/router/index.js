import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import ForgotPass from "../views/ForgotPass.vue";

import Teams from "../views/Teams.vue";
import TeamProfile from "../views/TeamProfile.vue";
import CreateTeam from "../views/CreateTeam.vue";
import EditTeams from "../views/EditTeams.vue";
import EditTeam from "../views/EditTeam.vue";
import Employees from '../views/Employees.vue'
import AddEmployee from '../views/AddEmployee.vue'
import EditEmployees from "../views/EditEmployees.vue";
import EmployeeProfile from '../views/EmployeeProfile.vue'
import CreateClient from "../views/CreateClient.vue";

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
  {
    path: "/employees/:id",
    name: "Employees",
    component: Employees,
    meta: {
      title: 'Employees',
    },
  },
  {
    path: "/team/:id",
    name: "TeamProfile",
    component: TeamProfile,
    meta: {
      title: 'TeamProfile',
    },
  },
  {
    path: "/create-team",
    name: "CreateTeam",
    component: CreateTeam,
    meta: {
      title: 'Create Teams',
    },
  },
  {
    path: "/edit/teams",
    name: "EditTeams",
    component: EditTeams,
    meta: {
      title: 'EditTeams',
    },
  },
  {
    path: "/edit/team/:id",
    name: "EditTeam",
    component: EditTeam,
    meta: {
      title: 'EditTeam',
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
    path: "/edit/employees",
    name: "EditEmployees",
    component: EditEmployees,
    meta: {
      title: 'EditEmployees',
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
    path: "/create-client",
    name: "CreateClient",
    component: CreateClient,
    meta: {
      title: 'CreateClient',
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
