import api from "@/api/index"

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  about: {}
})

// Getters
const getters = {
}

// Mutations
const mutations = {
  GET_ABOUT: (state, payload) => {
    state.about = payload;
  }
}

// Actions
const actions = {
  async getAbout({ commit }) {
    await api.getPage("a-consilio")
      .then(res => {
        commit("GET_ABOUT", res);
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