import 'jquery';
import 'materialize-js';
import Vue from 'vue';
import VueRouter from 'vue-router';
import { signinComponent } from './signin/signin.component';
import { mainComponent } from './main/main.component';

// Indica que se implementara vue router.
Vue.use(VueRouter);

// Define los distintos paths con sus respectivos componentes.
const routes = [
    {
        path: '/', component: signinComponent
    },
    {
        path: '/home', component: mainComponent
    }

]

// Asigna las rutas al router.
const router = new VueRouter({
    routes
})

// Define la app.
let app = new Vue({
    router
}).$mount('#app')