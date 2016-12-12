const Vue = require( 'vue' );

// 注册组件
_createComponent( 'demo' );
_createComponent( 'button' );

function _createComponent( component ){
	component = require( './' + component + '.vue' );
	return Vue.component( component.name , component );
}