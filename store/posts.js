import api from "@/api/index"

// Enable module namespaced
const namespaced = true;

// State
const state = () => ({
  posts: [],
  post: {}
})

// Getters
const getters = {
  lengthPosts: state => state.posts.length,
}

// Mutations
const mutations = {
  GET_POSTS: (state, payload) => {
    state.posts = payload;
  },
  GET_POST: (state, payload) => {
    state.post = payload;
  }
}

// Actions
const actions = {
  async getPosts({ commit }) {
    await api.getPosts()
      .then(res => {
        commit("GET_POSTS", res.data)
      })
  },
  async getPost({ commit }) {
    await api.getPost(slug)
      .then(res => {
        commit("GET_POST", res.data)
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