import api from "@/api/index"

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  team: []
})

// Getters
const getters = {
}

// Mutations
const mutations = {
  GET_TEAM: (state, payload) => {
    state.team = payload;
  }
}

// Actions
const actions = {
  async getTeam({ commit }) {
    await api.getTeam()
      .then(res => {
        commit("GET_TEAM", res.data);
      })
  },
}

const debug = process.env.NODE_ENV !== 'production'

// Export default
export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
  strict: debug
}