import db from '../../firebase/firebaseInit'

const state = {
  employees: [],
  teamEmployees: [],
  selectedEmployee: {}
}

const getters = {
  allEmployees: (state) => state.employees,
  allTeamEmployees: (state) => state.teamEmployees,
  selectedEmployee: (state) => state.selectedEmployee
}

const actions = {
  // povuci sve zaposlene
  fetchEmployees({commit, rootState}) {
    let teams = rootState.teams.teams;
    let data = []

    teams.forEach(team => {
      db.collection(team).get().then( res => {
        res.docs.forEach(doc => {
          data.push({...doc.data(), id: doc.id})
        })
        commit('setEmployees', data)
      })
    })
  },
  // povuci zaposlene jednog tima
  fetchTeamEmpolyees({commit, rootState}) {
    let team = rootState.teams.team
    let data = []
    if (team !== '') {
      db.collection(team).get().then( res => {
        res.docs.forEach(doc => {
          data.push({...doc.data(), id: doc.id})
        })
        commit('setTeamEmployees', data)
      })
    }
  }
}

const mutations = {
  setEmployees: (state, employees) => (state.employees = employees),
  setTeamEmployees: (state, teamEmployees) => (state.teamEmployees = teamEmployees),
  clearTeamEmployees: (state, emptyArr) => (state.teamEmployees = emptyArr),
  setSelectedEmployee(state, selectedEmployee) {state.selectedEmployee = selectedEmployee}
}

export default {
  state,
  getters,
  actions,
  mutations
}