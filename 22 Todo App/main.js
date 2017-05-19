import Vue from 'vue'

// Router
import VueRouter from 'vue-router'

Vue.use( VueRouter );

import Todo from './pages/Todo'
import Item from './pages/Item'

const router = new VueRouter({
	routes: [
		{ path: '/', component: Todo },
		{ path: '/list/:listID/item/:itemID', component: Item, props: true }
	]
});

// VueX
import Vuex from 'Vuex'

Vue.use(Vuex);

import TodoStore from './Store'

const store = new Vuex.Store( TodoStore );

// Root Component
import App from './App'

// Vue
const app = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});