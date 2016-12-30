module.exports = {

	changeCode( nav ){
		return window.fetch
				? fetch( '/pages/demos/' + nav + '-demo.vue' )
				: Promise.resolve( 'no code' );
	}


}