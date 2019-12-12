import api from "@/api/index";

// Enable module namespaced
const namespaced = true;

// States
const state = () => ({
  info: {},
})

// Mutations
const mutations = {
  GET_INFO: (state, payload) => {
    return state.info = payload;
  }
}

// Actions
const actions = {
  async getInfo({ commit }) {
    await api.getInfo()
      .then(res => {
        commit("GET_INFO", res.data)
      })
  },
}

export default {
  namespaced,
  state,
  actions,
  mutations,
  strict: true
}