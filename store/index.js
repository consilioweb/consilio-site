export default {
    state() {
        return {
            colorLogo: '#586371',
            buttonHover: false,
            modal: false,
            errorInformation: {
                code: '',
                message: ''
            }
        };
    },
    getters: {
        getStatsModal: state => state.modal
    },
    mutations: {
        LOGO_HEADER_PRIMARY: state => {
            return (state.colorLogo = '#586371');
        },
        LOGO_HEADER_SECONDARY: state => {
            return (state.colorLogo = '#7691a1');
        },
        LOGO_HEADER_TERTIARY: state => {
            return (state.colorLogo = '#666e82');
        },
        LOGO_HEADER_WHITE: state => {
            return (state.colorLogo = '#fff');
        },
        LOGO_HEADER_BLACK: state => {
            return (state.colorLogo = '#000');
        },
        HOVER_BUTTON_HEADER: (state, payload) => {
            return (state.buttonHover = payload);
        },
        UPDATE_ERROR_MESSAGE: (state, data) => {
            state.errorInformation = data;
        },
        TOOGLE_MODAL: state => {
            state.modal = !state.modal;
        },
        OPEN_MODAL: state => {
            state.modal = true;
        }
    },
    actions: {
        async toogleModal({ commit }) {
            await commit('TOOGLE_MODAL');
        },
        async openModal({ commit }) {
            await commit('OPEN_MODAL');
        },
        nuxtServerInit({ dispatch }, context) {
            return Promise.all([
                dispatch('menus/getMainMenu', context),
                dispatch('slides/getSlides', context),
                dispatch('cases/getCases', context),
                dispatch('posts/getRecent', context),
                dispatch('strategies/getStrategies', context),
                dispatch('about/getAbout', context),
                dispatch('testimonials/getTestimonials', context),
                dispatch('clients/getClients', context),
                dispatch('core/getInfo', context),
                dispatch('core/getRoutes', context)
            ]);
        }
    }
};
