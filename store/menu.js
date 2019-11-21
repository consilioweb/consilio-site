
// Enable module namespaced
const namespaced = true;

// Initial state
const state = () => {
  return {
    stats: false
  }
}

const getters = {
  getMenuStats: state => state.stats
}

// Mutations
const mutations = {
  OPEN: (state) => {
    state.stats = true
  },
  CLOSE: (state) => {
    state.stats = false
  },
  TOGGLE: (state) => {
    state.stats = !state.stats
  }
}


// Actions
const actions = {
  async open({ commit }) {
    await commit('OPEN')
  },

  async close({ commit }) {
    await commit('CLOSE')
  },
}


export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
  strict: true,
}