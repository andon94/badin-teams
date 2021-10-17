import { teamsApi } from '../../services/teams.js'


const state = {
  teams: [],
}

const getters = {
  teams: (state) => state.teams,
}

const actions = {

  fetchTeams({commit}) {
    teamsApi.fetchTeams()
    .then(res => {
      commit('setTeams', res)
    })
    .catch(err => {
      console.log(err)
    })
  }

}

const mutations = {
  setTeams(state, teams) {state.teams = teams}
}

export default {
  state,
  getters,
  actions,
  mutations
}