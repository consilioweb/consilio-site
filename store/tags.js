import api from "@/api/index";

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  tag: {},
  tags: [],
  total: 0,
  totalPages: 0
});

// Getters
const getters = {
  lengthTags: state => state.tags.length
};

// Mutations
const mutations = {
  GET_TAGS: (state, { data, total, totalPages }) => {
    state.tags = data;
    state.total = total;
    state.totalPages = totalPages;
  },
  GET_TAG: (state, payload) => {
    state.tag = payload;
  }
};

// Actions
const actions = {
  async getTags({ commit }, { page, per_page }) {
    await api.getTags(page, per_page).then(res => {
      commit("GET_TAGS", res);
    });
  },
  async getTag({ commit }, slug) {
    await api.getTag(slug).then(res => {
      commit("GET_TAG", res.data);
    });
  }
};

// Export default
export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
  strict: true
};
