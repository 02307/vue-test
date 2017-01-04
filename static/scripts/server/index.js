const Vue = require( 'vue' );
const http = Vue.http;

module.exports = {

	changeCode( nav ){
		return http.get( '/pages/demos' + nav + '-demo.vue' );
	}

}