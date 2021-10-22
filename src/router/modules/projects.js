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
  }
]

export default routes