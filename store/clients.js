import api from "@/api/index"

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  clients: [],
})

// Getters
const getters = {
  lengthClients: state => state.clients.length,
}

// Mutations
const mutations = {
  GET_CLIENTS: (state, payload) => {
    state.clients = payload;
  }
}

// Actions
const actions = {
  async getClients({ commit }) {
    await api.getClients()
      .then(res => {
        commit("GET_CLIENTS", res.data)
      })
  },
}

// Export default
export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
  strict: true
}
