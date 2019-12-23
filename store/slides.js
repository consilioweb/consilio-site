import api from "@/api/index"

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  slides: [],
})

// Getters
const getters = {
  lengthSlides: state => state.slides.length,
}

// Mutations
const mutations = {
  GET_SLIDES: (state, payload) => {
    state.slides = payload;
  }
}

// Actions
const actions = {
  async getSlides({ commit }) {
    await api.getSlides()
      .then(res => {
        commit("GET_SLIDES", res.data)
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