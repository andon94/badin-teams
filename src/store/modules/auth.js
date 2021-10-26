const state = {
  permissions: null
}

const getters = {
  permissions(state) {
    return state.permissions
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
