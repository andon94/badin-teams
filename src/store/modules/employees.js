import db from '../../firebase/firebaseInit'
import firebase from 'firebase/app';
import 'firebase/firestore';

const state = {
  employees: [],
  teamEmployees: [],
  selectedEmployee: {},
  newEmployee: {}
}

const getters = {
  allEmployees: (state) => state.employees,
  allTeamEmployees: (state) => state.teamEmployees,
  selectedEmployee: (state) => state.selectedEmployee,
  newEmployee: (state) => state.newEmployee
}

const actions = {
  fetchEmployees({commit}) {
    let data = []
    db.collection('employees')
      .get()
      .then( res => {
        res.docs.forEach(doc => {
          data.push({...doc.data(), id: doc.id})
        })
        commit('setEmployees', data)
      })
      .catch(err => {
        console.log(err)
      })
  },

  fetchTeamEmployees({commit}, payload) {
    let data = []
    db.collection('junction')
      .where("teamId", "==", payload)
      .get()
      .then( res => {
        // privremeno
        if (res.docs.length === 0) commit('setTeamEmployees', [])

        res.docs.forEach(doc => {
          db.collection('employees')
            .where(firebase.firestore.FieldPath.documentId(), "==", doc.data().employeeId)
            .get()
            .then( res => {
              res.docs.forEach(doc => {
                data.push({...doc.data(), id: doc.id})
              })
              commit('setTeamEmployees', data)
            })
        })
      })
  },

  addEmployee({commit}, payload) {
    db.collection("employees").add(payload)
    .then((docRef) => {
      console.log("Successfully added an employee!");
      commit('addEmployee', {...payload, id:docRef.id})
    })
  },

  removeEmployee({commit}, payload) {
    // izbaci zaposlenog i iz junction kolekcije
    db.collection('employees').doc(payload).delete()
    .then(() => {
      console.log("Successfully removed an employee!");
      commit('removeEmployee', {id:payload})
    })
  },

  fetchEmployee({commit}, payload) {
    db.collection('employees')
    .where(firebase.firestore.FieldPath.documentId(), "==", payload)
    .get()
    .then( res => {
        let data = {}
        res.forEach(doc => {
          data = { ...doc.data() }
        })
        commit('setSelectedEmployee', data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mutations = {
  setEmployees: (state, employees) => (state.employees = employees),
  setTeamEmployees: (state, teamEmployees) => (state.teamEmployees = teamEmployees),
  setSelectedEmployee(state, selectedEmployee) {state.selectedEmployee = selectedEmployee},
  addEmployee (state, payload) {
    state.newEmployee = payload
    state.employees.push(payload)
    state.selectedEmployee = payload
  },
  removeEmployee (state, payload) {state.employees = state.employees.filter(employee => employee.id !== payload.id)},
}

export default {
  state,
  getters,
  actions,
  mutations
}