import { projectsApi } from '../../services/projects.js'

const state = {
  projects: [],
}

const getters = {
  projects: (state) => state.projects,
}

const actions = {

  fetchProjects({commit}) {
    projectsApi.fetchProjects()
      .then(res => {
        commit('setProjects', res)
      })
      .catch(err => {
        console.log(err)
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