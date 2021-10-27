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
    employeesApi.fetchEmployees()
      .then(res => {
        commit('setEmployees', res)
      })
      .catch(err => {
        console.log(err)
      })
  },

  fetchEmployee ({commit}, id) {
    employeesApi.fetchEmployee(id)
    .then(res => {
      commit('setEmployee', res)
    })
    .catch(err => {
      console.log(err)
    })
  },

  fetchEmployeeTeams ({commit}, id) {
    employeesApi.fetchEmployeeTeams(id)
    .then(res => {
        commit('setEmployeeTeams', res)
      })
      .catch(err => {
        console.log(err)
      })
  },

  fetchEmployeeProjects ({commit}, id) {
    employeesApi.fetchEmployeeProjects(id)
      .then(res => {
        commit('setEmployeeProjects', res)
      })
      .catch(err => {
        console.log(err)
      })
  },

  fetchEmployeeClients ({commit}, id) {
    employeesApi.fetchEmployeeClients(id)
      .then(res => {
        commit('setEmployeeClients', res)
      })
      .catch(err => {
        console.log(err)
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
