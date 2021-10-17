import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import employees from './modules/employees'
import teams from './modules/teams'
import clients from './modules/clients'
import projects from './modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    employees,
    teams,
    clients,
    projects
  }
})
