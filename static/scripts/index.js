const Vue = require( 'vue' );
const VueRouter = require( 'vue-router' );
const Vuex = require( 'vuex' );

Vue.use( VueRouter );
Vue.use( Vuex );

const router = new VueRouter( require( './router.js' ) );
const store = new Vuex.Store( require( './store' ) );

window.app = new Vue({
	el : '#app',
	router,
	store,
	created(){
		router.push( '/user/33' );
	}
});
