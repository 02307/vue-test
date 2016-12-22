const Vue = require( 'vue' );

// 使用插件
let directives = require( './plugins/directives.js' );
Vue.use( directives );

// 注册组件
[
	'dropdown',
	'dropdown-menu',
	'dropdown-item',
	'button',
	'button-group',
	'input-group',
	'input-addon',
	'nav',
	'nav-item',
	'pager'
]
.forEach( component => {
	let _component = require( `./components/${component}.vue` );
	return Vue.component( _component.name ? _component.name : component , _component );
});