import { teamsApi } from '../../services/teams.js'


const state = {
  teams: [],
}

const getters = {
  teams: (state) => state.teams,
  selectedTeam: (state) => state.team,
}

const actions = {

  fetchTeams({commit},) {
    teamsApi.fetchTeams()
    .then(res => {
      commit('setTeams', res)
    })
    .catch(err => {
      console.log(err)
    })
  },

  // fetchTeams({commit}) {
  //   db.collection('teams').get().then(res => {
  //     let data = []
  //     res.forEach(doc => {
  //       data.push({
  //         name: doc.data().name,
  //         id: doc.id
  //       })
  //     })
  //     commit('setTeams', data)
  //   })
  // },

  // createTeam({commit}, payload) {
  //   db.collection("teams").add({
  //     name: payload,
  //   })
  //   .then((docRef) => {
  //     console.log("Successfully added a team!");
  //     commit('createTeam', {name:payload, id:docRef.id})
  //   })
  // },

  // deleteTeam({commit}, payload) {
  //   db.collection('teams').doc(payload).delete()
  //   .then(() => {
  //     console.log("Successfully deleted a team!");
  //     commit('deleteTeam', {id:payload})
  //   })
  // },

  // updateTeam({commit}, payload) {
  //   const docId = `${payload.employeeId}_${payload.teamId}`
  //   db.collection('junction').doc(docId).set({
  //     employeeId: payload.employeeId,
  //     teamId: payload.teamId
  //   })
  //   .then(() => {
  //     console.log("Team successfully updated!");
  //     commit('updateTeam', true)
  //   })
  // },

  // removeFromTeam({commit}, payload) {
  //   const docId = `${payload.employeeId}_${payload.teamId}`
  //   db.collection('junction').doc(docId).delete()
  //   .then(() => {
  //     console.log("Successfully removed from team!");
  //     commit('updateTeam', true)
  //   })
  // }}
}

const mutations = {
  setTeams(state, teams) {state.teams = teams},
  // createTeam (state, payload) {state.teams.unshift({name: payload.name, id: payload.id})},
  // deleteTeam (state, payload) {state.teams = state.teams.filter(team => team.id !== payload.id)},
  // updateTeam (state, payload) {state.updated = payload},
}

export default {
  state,
  getters,
  actions,
  mutations
}