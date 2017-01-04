const Vue = require( 'vue' );

// Vue.http由插件vue-resource提供
const http = Vue.http;

module.exports = {

	changeCode( nav ){
		return http.get( '/pages/demos' + nav + '-demo.vue' );
	}

}