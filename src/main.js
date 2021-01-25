import 'regenerator-runtime'
import Vue from 'vue'
import App from './App'
import store from './store'
import searchData from './plugins/searchData'

Vue.use(searchData)

new Vue({
    el: '#app',
    store: store,
    render: createElement => createElement(App),

})