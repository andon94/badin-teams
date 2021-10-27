import { canNavigate } from '../index'
import Projects from "../../views/Projects.vue"
import ProjectProfile from "../../views/ProjectProfile.vue";
import CreateProject from "../../views/ProjectCreate.vue";
import EditProjects from "../../views/ProjectsEdit"
import EditProject from '../../views/ProjectEdit.vue'

const routes = [
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: 'Projects',
      requireAuth: false
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/project-profile/:id",
    name: "ProjectProfile",
    component: ProjectProfile,
    meta: {
      title: 'ProjectProfile',
      requireAuth: false
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/edit/projects",
    name: "EditProjects",
    component: EditProjects,
    meta: {
      title: 'EditProjects',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/create-project",
    name: "CreateProject",
    component: CreateProject,
    meta: {
      title: 'CreateProject',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/edit/project/:id",
    name: "EditProject",
    component: EditProject,
    meta: {
      title: 'EditProject',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  }
]

export default routes