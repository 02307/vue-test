const server = require( '../server' );

module.exports = {

	changeCode( { commit , state } , { next } ){
		let nav = state.nav;
		server.changeCode( nav ).then( res => {
			if( res.ok ){
				res.text().then( text => {
					commit( 'changeCode' , text );
					next && next();
				});
			}
		});	
	}


}