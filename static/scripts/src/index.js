const Vue = require( 'vue' );

// 使用插件
let directives = require( './plugins/directives.js' );
Vue.use( directives );

// 使用组件
const components = require( './components' );
Vue.use( components );