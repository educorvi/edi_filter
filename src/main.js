import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import VueCookie from "vue-cookie";
Vue.use(VueCookie);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
