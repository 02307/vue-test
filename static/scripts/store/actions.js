const server = require( '../server' );


module.exports = {

	['common.changeCode']( { commit , state } ){
		let nav = state.nav;
		return new Promise( ( resolve , reject ) => {
			server.changeCode( nav ).then( res => {
				if( res.ok ){
					res.text().then( text => {
						commit( 'common.changeCode' , text );
						resolve();
					});
				}else{
					reject();
				}
			});
		});
	}


}
