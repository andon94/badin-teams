import { projectsApi } from '../../services/api/projects.js'

const state = {
  projects: [],
}

const getters = {
  projects: (state) => state.projects,
}

const actions = {

  fetchProjects({commit}) {
    return projectsApi.fetchProjects()
      .then(res => {
        commit('setProjects', res)
      })
      .catch(err => {
        commit('setError', err)
      })
  }
}

const mutations = {
  setProjects(state, projects) {state.projects = projects}
}

export default {
  state,
  getters,
  actions,
  mutations
}
