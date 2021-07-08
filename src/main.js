import 'regenerator-runtime'
import Vue from 'vue'
import App from './App'
import store from './store'
import searchData from './plugins/searchData'
import fetchData from "./plugins/fetchData";
import lazyLoad from "./plugins/lazyLoad";

Vue.use(lazyLoad)
Vue.use(searchData)
Vue.use(fetchData)

new Vue({
    el: '#app',
    store,
    render: createElement => createElement(App)
})
