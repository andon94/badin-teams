import { canNavigate } from '../index'
import Teams from "../../views/Teams.vue";
import TeamProfile from "../../views/TeamProfile.vue";
import CreateTeam from "../../views/TeamCreate.vue";
import EditTeams from "../../views/TeamsEdit.vue";
import EditTeam from "../../views/TeamEdit.vue";

const routes = [
  {
    path: "/teams",
    name: "Teams",
    component: Teams,
    meta: {
      title: 'Teams',
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  },
  {
    path: "/team-profile/:id",
    name: "TeamProfile",
    component: TeamProfile,
    meta: {
      title: 'TeamProfile',
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  },
  {
    path: "/create-team",
    name: "CreateTeam",
    component: CreateTeam,
    meta: {
      title: 'Create Teams',
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  },
  {
    path: "/edit/teams",
    name: "EditTeams",
    component: EditTeams,
    meta: {
      title: 'EditTeams',
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  },
  {
    path: "/edit/team/:id",
    name: "EditTeam",
    component: EditTeam,
    meta: {
      title: 'EditTeam',
    },
    beforeEnter (to, from, next) {
      canNavigate(to.name, next)
    }
  },
]

export default routes