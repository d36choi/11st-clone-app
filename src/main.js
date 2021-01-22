import Vue from 'vue'
import App from './App'
import store from './store'


new Vue({
    el: '#app',
    store: store,
    render: createElement => createElement(App),

})