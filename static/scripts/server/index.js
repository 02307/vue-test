module.exports = {

	changeCode( nav ){
		return fetch( '/pages/demos/' + nav + '-demo.vue' );
	}


}