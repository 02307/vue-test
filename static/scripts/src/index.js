const Vue = require( 'vue' );

// 注册指令
let directives = require( './mixins/directives.js' );
Vue.use( directives );

// 注册组件
_createComponent( 'dropdown' );
_createComponent( 'dropdown-menu' );
_createComponent( 'dropdown-item' );
_createComponent( 'button' );
_createComponent( 'button-group' );
_createComponent( 'input-group' );
_createComponent( 'nav' );
_createComponent( 'nav-item' );

function _createComponent( component ){
	let _component = require( './components/' + component + '.vue' );
	return Vue.component( _component.name ? _component.name : component , _component );
}