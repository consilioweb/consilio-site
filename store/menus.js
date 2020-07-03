import api from '@/api/index';

// Enable module namespaced
const namespaced = true;

// States
const state = () => ({
    mainMenu: [],
    statsMainMenu: false
});

// Getters
const getters = {
    getStatsMainMenu: state => state.statsMainMenu,
    lengthMainMenu: state => state.mainMenu.length
};

// Mutations
const mutations = {
    OPEN_MAIN_MENU: (state) => {
        state.statsMainMenu = true;
    },
    CLOSE_MAIN_MENU: (state) => {
        state.statsMainMenu = false;
    },
    TOGGLE_STATS_MAIN_MENU: (state) => {
        state.statsMainMenu = !state.statsMainMenu;
    },
    GET_MAIN_MENU: (state, payload) => {
        state.mainMenu = payload;
    }
};

// Actions
const actions = {
    async openMainMenu({ commit }) {
        await commit('OPEN_MAIN_MENU');
    },
    async closeMainMenu({ commit }) {
        await commit('CLOSE_MAIN_MENU');
    },
    async toogleStatsMainMenu({ commit }) {
        await commit('TOGGLE_MAIN_MENU');
    },
    async getMainMenu({ commit }) {
        await api.getMainMenu()
            .then(res => {
                commit('GET_MAIN_MENU', res.data);
            });
    },
};

const debug = process.env.NODE_ENV !== 'production';

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations,
    strict: debug
};