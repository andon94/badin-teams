import { teamsApi } from '../../services/api/teams.js'


const state = {
  teams: [],
  team: {},
  teamMembers: [],
  teamProjects: [],
  teamClients: []
}

const getters = {
  teams: (state) => state.teams,
  team: (state) => state.team,
  teamMembers: (state) => state.teamMembers,
  teamProjects: (state) => state.teamProjects,
  teamClients: (state) => state.teamClients
}

const actions = {

  fetchTeams({commit}) {
    return teamsApi.fetchTeams()
      .then(res => {
        commit('setTeams', res)
      })
      .catch(err => {
        console.log(err)
      })
  },

  fetchTeam ({commit}, id) {
    return teamsApi.fetchTeam(id)
      .then(res => {
        commit('setTeam', res)
      })
      .catch(err => {
        console.log(err)
      })
  },

  fetchTeamMembers ({commit}, id) {
    return teamsApi.fetchTeamMembers(id)
      .then(res => {
        commit('setTeamMembers', res)
      })
      .catch(err => {
        console.log(err)
      })
  },

  fetchTeamProjects ({commit}, id) {
    return teamsApi.fetchTeamProjects(id)
      .then(res => {
        commit('setTeamProjects', res)
      })
      .catch(err => {
        console.log(err)
      })
  },

  fetchTeamClients ({commit}, id) {
    return teamsApi.fetchTeamClients(id)
      .then(res => {
        commit('setTeamClients', res)
      })
      .catch(err => {
        console.log(err)
      })
  }

}

const mutations = {
  setTeams(state, teams) {state.teams = teams},
  setTeam(state, team) {state.team = team},
  setTeamMembers(state, teamMembers) {state.teamMembers = teamMembers},
  setTeamProjects(state, teamProjects) {state.teamProjects = teamProjects},
  setTeamClients(state, teamClients) {state.teamClients = teamClients}
}

export default {
  state,
  getters,
  actions,
  mutations
}
