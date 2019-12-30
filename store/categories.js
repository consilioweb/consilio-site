import api from "@/api/index";

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  category: {},
  categories: [],
  total: 0,
  totalPages: 0
});

// Getters
const getters = {
  lengthCategories: state => state.categories.length
};

// Mutations
const mutations = {
  GET_CATEGORIES: (state, { data, total, totalPages }) => {
    state.categories = data;
    state.total = total;
    state.totalPages = totalPages;
  },
  GET_CATEGORY: (state, payload) => {
    state.category = payload;
  }
};

// Actions
const actions = {
  async getCategories({ commit }, { page, per_page }) {
    await api.getCategories(page, per_page).then(res => {
      commit("GET_CATEGORIES", res);
    });
  },
  async getCategory({ commit }, slug) {
    await api.getCategory(slug).then(res => {
      commit("GET_CATEGORY", res.data);
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
