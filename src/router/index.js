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
import EmployeeProfile from '../views/EmployeeProfile.vue'
import AddEmployee from '../views/AddEmployee.vue'
import EditEmployees from "../views/EditEmployees.vue";
import EditEmployee from "../views/EditEmployee.vue";
import Clients from '../views/Clients.vue'
import CreateClient from "../views/CreateClient.vue";
import EditClients from '../views/EditClients.vue'
import EditClient from "../views/EditClient.vue";
import ClientProfile from "../views/ClientProfile.vue";
import Projects from "../views/Projects.vue"
import ProjectProfile from "../views/ProjectProfile.vue";
import CreateProject from "../views/CreateProject.vue";
import EditProjects from "../views/EditProjects"
import EditProject from '../views/EditProject.vue'

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
    path: "/employees/:id",
    name: "Employees",
    component: Employees,
    meta: {
      title: 'Employees',
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
    path: "/edit/employees",
    name: "EditEmployees",
    component: EditEmployees,
    meta: {
      title: 'EditEmployees',
    },
  },
  {
    path: "/edit/employee/:id",
    name: "EditEmployee",
    component: EditEmployee,
    meta: {
      title: 'EditEmployee',
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: 'Projects',
    },
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
    meta: {
      title: 'Clients',
    },
  },
  {
    path: "/edit/clients",
    name: "EditClients",
    component: EditClients,
    meta: {
      title: 'EditClients',
    },
  },
  {
    path: "/edit/client/:id",
    name: "EditClient",
    component: EditClient,
    meta: {
      title: 'EditClient',
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
    path: "/client/:id",
    name: "ClientProfile",
    component: ClientProfile,
    meta: {
      title: 'ClientProfile',
    },
  },
  {
    path: "/edit/projects",
    name: "EditProjects",
    component: EditProjects,
    meta: {
      title: 'EditProjects',
    },
  },
  {
    path: "/create-project",
    name: "CreateProject",
    component: CreateProject,
    meta: {
      title: 'CreateProject',
    },
  },
  {
    path: "/edit/project/:id",
    name: "EditProject",
    component: EditProject,
    meta: {
      title: 'EditProject',
    },
  },
  {
    path: "/project-profile/:id",
    name: "ProjectProfile",
    component: ProjectProfile,
    meta: {
      title: 'ProjectProfile',
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
