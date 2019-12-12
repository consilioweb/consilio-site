import api from "@/api/index"

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  testimonials: [],
})

// Getters
const getters = {
  lengthTestimonials: state => state.testimonials.length,
}

// Mutations
const mutations = {
  GET_TESTIMONIALS: (state, payload) => {
    state.testimonials = payload;
  }
}

// Actions
const actions = {
  async getTestimonials({ commit }) {
    await api.getTestimonials()
      .then(res => {
        commit("GET_TESTIMONIALS", res.data)
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