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
				test : /\.js$/,
				loader : 'babel',
				exclude : /node_modules/,
				query: {
					presets: ['es2015', "stage-2"],
      				plugins: ['transform-runtime']
				}
			},
			{
				test : /\.vue$/,
				loader : 'vue'
			},
			{
				test : /\.css|\.less$/,
				loader : ExtractTextPlugin.extract( 'css-loader?sourceMap' )
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
			"vue" : path.resolve( __dirname , 'node_modules/vue/dist/vue.js' ),
			"vue-router" : path.resolve( __dirname , 'node_modules/vue-router/dist/vue-router.js' ),
			"vuex" : path.resolve( __dirname , 'node_modules/vuex/dist/vuex.js' )
		}
	},

	// 当前目录为根目录
	context : __dirname,

	// 开启watch
	watch : true,
	
	// vue 的js部分也由babel来编译
	vue : {
		loaders : {
			js : 'babel'
		}
	}

}