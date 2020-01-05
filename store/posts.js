import api from "@/api/index";

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  author: {},
  authors: [],
  post: {},
  posts: [],
  recent: [],
  total: 0,
  totalPages: 0
});

// Getters
const getters = {
  lengthPosts: state => state.posts.length
};

// Mutations
const mutations = {
  GET_AUTHORS: (state, payload) => {
    state.authors = payload;
  },
  GET_AUTHOR: (state, payload) => {
    state.author = payload;
  },
  GET_POSTS: (state, { data, total, totalPages }) => {
    state.posts = data;
    state.total = total;
    state.totalPages = totalPages;
  },
  GET_POST: (state, payload) => {
    state.post = payload;
  },
  FETCHED_RECENT: (state, payload) => {
    state.recent = payload;
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
  async getPosts({ commit }, { page, per_page, category, tag, author }) {
    await api.getPosts(page, per_page, category, tag, author).then(res => {
      commit("GET_POSTS", res);
    });
  },
  async getPost({ commit }, { slug }) {
    await api.getPost(slug).then(res => {
      commit("GET_POST", res);
    });
  },
  async getRecent({ commit }, { page, per_page }) {
    await api.getPosts(page, per_page).then(res => {
      commit("FETCHED_RECENT", res.data);
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
