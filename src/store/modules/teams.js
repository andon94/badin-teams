import db from '../../firebase/firebaseInit'
import firebase from 'firebase/app';
import 'firebase/firestore';

const state = {
  teams: [],
  team: {},
  updated: false
}

const getters = {
  allTeams: (state) => state.teams,
  selectedTeam: (state) => state.team,
  isUpdated: (state) => state.updated
}

const actions = {

  fetchTeam({commit}, payload) {
    db.collection('teams')
      .where(firebase.firestore.FieldPath.documentId(), "==", payload)
      .get()
      .then( res => {
        let data = {}
        res.docs.forEach(doc => {
          data = {
            name: doc.data().name,
            id: doc.id
          }
        })
        commit('setTeam', data)
      })
  },

  fetchTeams({commit}) {
    db.collection('teams').get().then(res => {
      let data = []
      res.forEach(doc => {
        data.push({
          name: doc.data().name,
          id: doc.id
        })
      })
      commit('setTeams', data)
    })
  },

  createTeam({commit}, payload) {
    db.collection("teams").add({
      name: payload,
    })
    .then((docRef) => {
      console.log("Successfully added a team!");
      commit('createTeam', {name:payload, id:docRef.id})
    })
  },

  deleteTeam({commit}, payload) {
    db.collection('teams').doc(payload).delete()
    .then(() => {
      console.log("Successfully deleted a team!");
      commit('deleteTeam', {id:payload})
    })
  },

  updateTeam({commit}, payload) {
    const docId = `${payload.employeeId}_${payload.teamId}`
    db.collection('junction').doc(docId).set({
      employeeId: payload.employeeId,
      teamId: payload.teamId
    })
    .then(() => {
      console.log("Team successfully updated!");
      commit('updateTeam', true)
    })
  },

  removeFromTeam({commit}, payload) {
    const docId = `${payload.employeeId}_${payload.teamId}`
    db.collection('junction').doc(docId).delete()
    .then(() => {
      console.log("Successfully removed from team!");
      commit('updateTeam', true)
    })
  }}

const mutations = {
  setTeams(state, teams) {state.teams = teams},
  setTeam(state, team) {state.team = team},
  createTeam (state, payload) {state.teams.unshift({name: payload.name, id: payload.id})},
  deleteTeam (state, payload) {state.teams = state.teams.filter(team => team.id !== payload.id)},
  updateTeam (state, payload) {state.updated = payload},
}

export default {
  state,
  getters,
  actions,
  mutations
}