import api from "@/api/index";

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  author: {},
  authors: [],
  strategy: {},
  strategies: [],
  total: 0,
  totalPages: 0
});

// Getters
const getters = {
  lengthStrategies: state => state.strategies.length
};

// Mutations
const mutations = {
  GET_AUTHORS: (state, payload) => {
    state.authors = payload;
  },
  GET_AUTHOR: (state, payload) => {
    state.author = payload;
  },
  GET_STRATEGIES: (state, { data, total, totalPages }) => {
    state.strategies = data;
    state.total = total;
    state.totalPages = totalPages;
  },
  GET_STRATEGY: (state, payload) => {
    state.strategy = payload;
  }
};

// Actions
const actions = {
  async getAuthors({ commit }) {
    await api.getAuthors().then(res => {
      commit("GET_AUTHORS", res.data);
    });
  },
  async getAuthor({ commit }, { slug }) {
    await api.getAuthor(slug).then(res => {
      commit("GET_AUTHOR", res);
    });
  },
  async getStrategies({ commit }, { page, per_page, category, tag, author }) {
    await api.getStrategies(page, per_page, category, tag, author).then(res => {
      commit("GET_STRATEGIES", res);
    });
  },
  async getStrategy({ commit }, { slug }) {
    await api.getStrategy(slug).then(res => {
      commit("GET_STRATEGY", res);
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
