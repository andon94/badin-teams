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
  },
  {
    path: "/team-profile/:id",
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
  }
]

export default routes