const Vue = require( 'vue' );
const VueRouter = require( 'vue-router' );
const Vuex = require( 'vuex' );

// 加载组件
require( './src' );

// 使用vue-router插件
Vue.use( VueRouter );

// 使用vuex插件
Vue.use( Vuex );