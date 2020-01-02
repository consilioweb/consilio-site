import api from "@/api/index";

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
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
  async getPosts({ commit }, { page, per_page }) {
    await api.getPosts(page, per_page).then(res => {
      commit("GET_POSTS", res);
    });
  },
  async getRecent({ commit }, { page, per_page }) {
    await api.getPosts(page, per_page).then(res => {
      commit("FETCHED_RECENT", res.data);
    });
  },
  async getPost({ commit }, { slug }) {
    await api.getPost(slug).then(res => {
      commit("GET_POST", res);
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
