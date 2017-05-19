// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vuex from 'vuex'
Vue.use( Vuex );

const store = new Vuex.Store({

	state:
	{
		firstName: 'Lawrence',
		lastName: 'Turton'
	},

	mutations:
	{
		firstName( state, name )
		{
			state.firstName = name;
		},
		lastName( state, name )
		{
			state.lastName = name;
		}
	},

	actions:
	{
		changeName( context, name )
		{
			name = name.split(' ');

			context.commit( 'firstName' , name[0] );
			context.commit( 'lastName' , name[1] );
		}
	}

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
