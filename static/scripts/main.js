const Vue = require( 'vue' );
const vueResource = require( 'vue-resource' );
const components = require( './src' );
const VueRouter = require( 'vue-router' );
const Vuex = require( 'vuex' );

// 使用vue-resource插件
Vue.use( vueResource );

// 使用租我家组件库插件
Vue.use( components );

// 使用vue-router插件
Vue.use( VueRouter );

// 使用vuex插件
Vue.use( Vuex );