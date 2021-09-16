import Vue from 'vue'
import Vuex from 'vuex'

import employees from './modules/employees'
import teams from './modules/teams'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    employees,
    teams
  }
})
