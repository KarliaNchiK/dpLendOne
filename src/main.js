import Vue from 'vue';
import Vuex from 'vuex'
import App from './pages/App.vue';
import globalComponents from "./plugins/globalComponent"

Vue.config.productionTip = false

Vue.use(globalComponents);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        dialogFormActive: false,
        windowWidth: 0,
        isMobile: false,
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
        }
    },
    getters: {
        dialogFormActive: s => s.dialogFormActive,
        windowWidth: s => s.windowWidth,
        isMobile: s => s.isMobile,
    },
});

window.openDialog = function () {
  store.commit('setDialogActive', true);
}

window.closeDialog = function () {
  store.commit('setDialogActive', false);
}

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
