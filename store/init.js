// Enable module namespaced
const namespaced = true;
// State
const state = () => {
  site_data: { }
}
// Mutations
const mutations = {
  SITE_DATA_UPDATE(state, payload) {
    state.site_data = { ...payload }
  }
}
// Actions
const actions = {
  async nuxtServerInit({ commit }) {
    const getSiteData = await wp.siteData()
      .then(res => {
        commit(SITE_DATA_UPDATE, res.site_data)
      })
    return Promise.all([getSiteData])
  }
}

export default {
  namespaced,
  state,
  actions,
  mutations,
  strict: true,
}