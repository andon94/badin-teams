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
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  },
  {
    path: "/project-profile/:id",
    name: "ProjectProfile",
    component: ProjectProfile,
    meta: {
      title: 'ProjectProfile',
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  },
  {
    path: "/edit/projects",
    name: "EditProjects",
    component: EditProjects,
    meta: {
      title: 'EditProjects',
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  },
  {
    path: "/create-project",
    name: "CreateProject",
    component: CreateProject,
    meta: {
      title: 'CreateProject',
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  },
  {
    path: "/edit/project/:id",
    name: "EditProject",
    component: EditProject,
    meta: {
      title: 'EditProject',
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  }
]

export default routes