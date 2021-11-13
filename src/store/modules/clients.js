import { clientsApi } from '../../services/api/clients.js'

const state = {
  clients: [],
}

const getters = {
  clients: (state) => state.clients,
}

const actions = {

  fetchClients({commit}) {
    return clientsApi.fetchClients()
      .then(res => {
        commit('setClients', res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mutations = {
  setClients(state, clients) {state.clients = clients}
}

export default {
  state,
  getters,
  actions,
  mutations
}
