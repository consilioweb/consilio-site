export default {
  state() {
    return {
      colorLogo: "#586371",
      buttonHover: false,
    }
  },
  mutations: {
    LOGO_HEADER_PRIMARY: (state) => {
      return state.colorLogo = "#586371";
    },
    LOGO_HEADER_SECONDARY: (state) => {
      return state.colorLogo = "#7691a1";
    },
    LOGO_HEADER_TERTIARY: (state) => {
      return state.colorLogo = "#666e82";
    },
    LOGO_HEADER_WHITE: (state) => {
      return state.colorLogo = "#fff";
    },
    LOGO_HEADER_BLACK: (state) => {
      return state.colorLogo = "#000";
    },
    HOVER_BUTTON_HEADER: (state, payload) => {
      return state.buttonHover = payload;
    },
  },
  actions: {
    nuxtServerInit({ dispatch }, context) {
      return Promise.all([
        dispatch('menus/getMainMenu', context),
        dispatch('slides/getSlides', context),
        dispatch('cases/getCases', context),
        dispatch('posts/getPosts', context),
        dispatch('about/getAbout', context),
        dispatch('testimonials/getTestimonials', context),
        dispatch('clients/getClients', context),
        dispatch('core/getInfo', context)
      ]);
    }
  }
}