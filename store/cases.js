import api from "@/api/index"

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  cases: [],
  zIndex: 0,
  xtrans: 0,
  ytrans: 0,
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

// Export default
export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
  strict: true
}
