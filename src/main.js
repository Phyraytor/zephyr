import Vue from 'vue'
import App from './App.vue'
import VuePopover from './plugins/VuePopover/VuePopover.js';

Vue.config.productionTip = false
Vue.use(VuePopover)

new Vue({
  render: h => h(App),
}).$mount('#app')
