import api from "@/api/index";

// Enable module namespaced
const namespaced = true;

// States
const state = () => ({
  info: {},
  routes: []
})

// Mutations
const mutations = {
  GET_INFO: (state, payload) => {
    return state.info = payload;
  },
  GET_ROUTES: (state, payload) => {
    return state.routes = payload;
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
  async getRoutes({ commit }) {
    await api.getRoutes()
      .then(res => {
        commit("GET_ROUTES", res.data)
      })
  },
}

const debug = process.env.NODE_ENV !== 'production'

export default {
  namespaced,
  state,
  actions,
  mutations,
  strict: debug
}