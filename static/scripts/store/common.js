const server = require( '../server' );

module.exports = {

	state : {		
		code : '',
		nav : '/dropdown',
		navs : [
			'dropdown' ,
			'btn' ,
			'btn-group' ,
			'input-group' ,
			'navs' ,
			'pager' ,
			'pagination',
			'alert'
		]
	},

	actions : {
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
	},

	mutations : {
		['common.changeNav']( state , nav ){
			state.nav = nav;
		},

		['common.changeCode']( state , code ){
			state.code = code;
		}
	}


}