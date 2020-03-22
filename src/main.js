import Vue from 'vue'
import App from './App.vue'
import routes from './route'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import index from './store';
import axios from './require'
Vue.config.productionTip = false;
const router = new VueRouter({
    routes
})
Vue.use(VueRouter);
Vue.use(Vuex);
const store = new Vuex.Store(
    index
)
Vue.prototype.$axios = axios
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')