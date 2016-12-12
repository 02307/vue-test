const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {

	entry : {
		vendor : './static/scripts/main.js',
		app : './static/scripts/index.js'
	},

	output : {
		filename : '[name].js',
		path : './static/dist'
	},

	module : {
		loaders : [
			{
				test : /\.vue$/,
				loader : 'vue'
			},
			{
				test : /\.css|\.less$/,
				loader : ExtractTextPlugin.extract( 'css-loader?sourceMap' )
			},
			{
				test : /\.js$/,
				loader : 'babel',
				exclude : /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	},

	plugins : [
		new ExtractTextPlugin({
			filename : 'components-[chunkhash].css',
			disable : false,
			allChunks : true
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name : [ 'vendor' ]
		})

	],

	resolve : {
		alias : {
			vue : path.resolve( __dirname , 'node_modules/vue/dist/vue.js' ),
			"vue-router" : path.resolve( __dirname , 'node_modules/vue-router/dist/vue-router.js' )
		}
	},

	// 当前目录为根目录
	context : __dirname,

	// 开启watch
	watch : true

}