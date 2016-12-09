const Vue = require( 'vue' );

new Vue({
	el : '#app',
	methods : {
		hello( event ){
			console.log( 'It\'s ok now' , event )
		}
	}
});


