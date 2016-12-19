function createPromise( obj , method = "on" ){
	return ( ...args ) => {
		return new Promise( ( resolve , reject ) => {
			obj[method]( ...args , function( ...args ){
				resolve( ...args );
			});
		});
	}
}

module.exports = createPromise;