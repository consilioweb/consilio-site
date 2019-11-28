export default {
  actions: {
    nuxtServerInit({ dispatch }, context) {
      return Promise.all([
        dispatch('menus/getMainMenu', context),
        dispatch('slides/getSlides', context),
        dispatch('cases/getCases', context)
      ]);
    }
  }
}

