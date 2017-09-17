import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import City from './component/city.vue'
Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
    {path:'/', component: City}
]

const router = new VueRouter({
    routes 
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
