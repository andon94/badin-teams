import db from '../../firebase/firebaseInit'

const state = {
  teams: [],
  team: ''
}

const getters = {
  allTeams: (state) => state.teams,
  selectedTeam: (state) => state.team
}

const actions = {
  fetchTeams({commit}) {
    db.collection('teamNames').get().then(res => {
      let data = null
      res.forEach(doc => {
        data = doc.data().teams
      })
      commit('setTeams', data)
    })
  }
}

const mutations = {
  setTeams: (state, teams) => (state.teams = teams),
  setTeam(state, team) {state.team = team}
}

export default {
  state,
  getters,
  actions,
  mutations
}