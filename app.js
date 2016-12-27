const express = require( 'express' );
const app = express();
const path = require( 'path' );

app.use( express.static( path.resolve( './static' ) ) );

app.get( '/*' , ( req , res ) => {
	return res.redirect( '/' );
});

app.listen( 900 );

console.log( 'server started at port 900')