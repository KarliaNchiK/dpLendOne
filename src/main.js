import Vue from 'vue';
import App from './pages/App.vue';
import store from "./store"
import globalComponents from "./plugins/globalComponent"
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tippy.js/dist/tippy.css';
import tippy from 'tippy.js';

Vue.config.productionTip = false

Vue.use(globalComponents);

window.openDialog = function () {
  store.commit('setDialogActive', true);
}

window.closeDialog = function () {
  store.commit('setDialogActive', false);
}

window.tippy = tippy;

new Vue({
  store,
  render: h => h(App),
  mounted() {
    AOS.init({
      offset: 300,
      duration: 750,
      easing: 'ease-in-sine',
    });
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

    if (!isMobile) {
      tippy('[data-tippy-content]', {
        allowHTML: true,
      });
    }
  },
}).$mount('#app')
