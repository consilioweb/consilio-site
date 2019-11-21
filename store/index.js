import api from "@/api/index";
// Enable module namespaced
const namespaced = true;
// State
const state = () => {
  slides: { }
}
// Mutations
const mutations = {
  SLIDES: (state, slide) => {
    state.slide = slide;
  },
}
// Actions
const actions = {
  getSlides({ commit, state }, slug) {
    return new Promise((resolve, reject) => {
      api.getSlides(slug).then(
        response => {
          commit("SLIDES", response);
          resolve(response);
        },
        response => {
          reject(response);
        }
      );
    });
  }
}

export default {
  namespaced,
  state,
  actions,
  mutations,
  strict: true,
}