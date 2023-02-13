import Vue from 'vue';
import App from './pages/App.vue';
import store from "./store"
import globalComponents from "./plugins/globalComponent"

Vue.config.productionTip = false

Vue.use(globalComponents);

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
