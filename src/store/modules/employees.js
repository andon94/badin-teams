import { employeesApi } from '../../services/api/employees.js'

const state = {
  employees: [],
  employee: {},
  employeeTeams: [],
  employeeProjects: [],
  employeeClients: []
}

const getters = {
  employees: (state) => state.employees,
  employee: (state) => state.employee,
  employeeTeams: (state) => state.employeeTeams,
  employeeProjects: (state) => state.employeeProjects,
  employeeClients: (state) => state.employeeClients
}

const actions = {

  fetchEmployees({commit}) {
    return employeesApi.fetchEmployees()
      .then(res => {
        commit('setEmployees', res)
      })
      .catch(err => {
        console.log(err)
        commit('setError', err)
      })
  },

  fetchEmployee ({commit}, id) {
    return employeesApi.fetchEmployee(id)
    .then(res => {
      commit('setEmployee', res)
    })
    .catch(err => {
      console.log(err)
      commit('setError', err)
    })
  },

  fetchEmployeeTeams ({commit}, id) {
    return employeesApi.fetchEmployeeTeams(id)
      .then(res => {
          commit('setEmployeeTeams', res)
        })
      .catch(err => {
        console.log(err)
        commit('setError', err)
      })
  },

  fetchEmployeeProjects ({commit}, id) {
    return employeesApi.fetchEmployeeProjects(id)
      .then(res => {
        commit('setEmployeeProjects', res)
      })
      .catch(err => {
        console.log(err)
        commit('setError', err)
      })
  },

  fetchEmployeeClients ({commit}, id) {
    return employeesApi.fetchEmployeeClients(id)
      .then(res => {
        commit('setEmployeeClients', res)
      })
      .catch(err => {
        console.log(err)
        commit('setError', err)
      })
  }

}

const mutations = {
  setEmployees(state, employees) {state.employees = employees},
  setEmployee(state, employee) {state.employee = employee},
  setEmployeeTeams(state, employeeTeams) {state.employeeTeams = employeeTeams},
  setEmployeeProjects(state, employeeProjects) {state.employeeProjects = employeeProjects},
  setEmployeeClients(state, employeeClients) {state.employeeClients = employeeClients}
}

export default {
  state,
  getters,
  actions,
  mutations
}
