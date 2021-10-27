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
      requireAuth: false
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/team-profile/:id",
    name: "TeamProfile",
    component: TeamProfile,
    meta: {
      title: 'TeamProfile',
      requireAuth: false
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/create-team",
    name: "CreateTeam",
    component: CreateTeam,
    meta: {
      title: 'CreateTeam',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/edit/teams",
    name: "EditTeams",
    component: EditTeams,
    meta: {
      title: 'EditTeams',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/edit/team/:id",
    name: "EditTeam",
    component: EditTeam,
    meta: {
      title: 'EditTeam',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
]

export default routes