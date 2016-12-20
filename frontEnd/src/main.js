import Vue from 'vue'
import App from './App'

import routes from './routes.js'
import VueRouter from 'vue-router';


Vue.use(VueRouter);

/* 路由功能 */
var router = new VueRouter();
routes(router)

router.start(App, '#app');
