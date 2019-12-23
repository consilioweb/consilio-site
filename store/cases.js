import api from "@/api/index"

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  cases: [],
})

// Getters
const getters = {
  lengthCases: state => state.cases.length,
}

// Mutations
const mutations = {
  GET_CASES: (state, payload) => {
    state.cases = payload;
  }
}

// Actions
const actions = {
  async getCases({ commit }) {
    await api.getCases()
      .then(res => {
        commit("GET_CASES", res.data)
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
