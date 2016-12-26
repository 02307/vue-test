const Vue = require( 'vue' );
const VueRouter = require( 'vue-router' );
const Vuex = require( 'vuex' );
const eleme = require( 'element-ui' );

Vue.use( VueRouter );
Vue.use( Vuex );
Vue.use( eleme );

const router = new VueRouter( require( './router.js' ) );
const store = new Vuex.Store( require( './store' ) );

window.app = new Vue({
	data : {
		// test pagination
		rows : 10,
		current : 5,
		pageRows : [
			10 , 20 , 30 , 40 
		]
	},

	el : '#app',
	router,
	store,
	methods : {
		changeRows( rows ){
			this.rows = rows;
		},
		changePage( page ){
			this.current = page;
		}

	}


});