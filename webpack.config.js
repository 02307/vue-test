const path = require( 'path' );
const webpack = require( 'webpack' );
const htmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

// 设置node环境变量(development ==> 开发环境 , production ==> 生产环境)
process.env.NODE_ENV = 'development';
let env = process.env.NODE_ENV;

let watch = true;
let plugins = [];

if( env == 'production' ){
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress : {
				warnings : false
			}
		})
	);
	watch = false;
}


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
				exclude : /node_modules/
			},
			{
				test : /\.vue$/,
				loader : 'vue'
			},
			{
				test : /\.css|\.less$/,
				loader : ExtractTextPlugin.extract( 'style!css!less' )
			}	
		]
	},

	plugins : [
		new ExtractTextPlugin({
			filename : 'components.css',
			disable : false,
			allChunks : true
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name : [ 'vendor' ]
		}),

		new htmlWebpackPlugin({
			template : 'static/index.html',
			inject : true
		}),
		
		...plugins
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

	// 是否开启watch
	watch,
	
	// vue 的js部分也由babel来编译
	vue : {
		loaders : {
			js : 'babel'
		}
	},

	babel: {
		presets: ['es2015', "stage-2"],
		plugins: ['transform-runtime']
	}

}