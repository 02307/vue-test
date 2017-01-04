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

// 使用vuex插件(vuex 2.*版本需要全局的Promise,刚好vueResource里面有Promise/A的全局实现)
Vue.use( Vuex );