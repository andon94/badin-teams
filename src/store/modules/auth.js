import Storage from '../../services/storage'
import {isAuthenticated, setRolesIfUserIsAuthenticated} from "../../utils/auth";

const storage = Storage.getItem('storage')

const state = {
  permissions: setRolesIfUserIsAuthenticated(storage),
  loginStatus: isAuthenticated(storage)
}

const getters = {
  permissions(state) {
    return state.permissions
  },
  loginStatus(state) {
    return state.loginStatus
  }
}

const actions = {
  setPermissions(ctx, permissions){
    ctx.commit('setPermissions', permissions);
  }
}

const mutations = {
  setPermissions(state, permissions){
    state.permissions = permissions;
  },
  setLoginStatus(state, boolean) {
    state.loginStatus = boolean
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
