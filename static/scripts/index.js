const Vue = require( 'vue' );
const VueRouter = require( 'vue-router' );
const Vuex = require( 'vuex' );

Vue.use( VueRouter );
Vue.use( Vuex );

const router = new VueRouter( require( './router.js' ) );
const store = new Vuex.Store( require( './store' ) );
const app = require( '../pages/app.vue' );

// 全局跳转时的钩子
router.beforeEach( ( to , from , next ) => {
	store.commit( 'changeNav' , to.path );
	store.dispatch( 'changeCode' , { next });
});

window.app = new Vue({
	template : '<div class="app-container"><app><slot /></app></div>',
	el : '#app',
	router,
	store,
	components : {
		app 
	}
});