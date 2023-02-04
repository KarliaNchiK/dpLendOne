import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dialogFormActive: false,
        windowWidth: 0,
        isMobile: false,
        scrollTop: 0,
    },
    mutations: {
        setDialogActive(state, status) {
            state.dialogFormActive = status;
        },
        setWindowWidth(state, width) {
            state.windowWidth = width;
        },
        setIsMobile(state, status) {
            state.isMobile = status;
        },
        setScrollTop(state, scroll) {
            state.scrollTop = scroll;
        }
    },
    getters: {
        dialogFormActive: s => s.dialogFormActive,
        windowWidth: s => s.windowWidth,
        isMobile: s => s.isMobile,
        scrollTop: s => s.scrollTop,
    },
});
