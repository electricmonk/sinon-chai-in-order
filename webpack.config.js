var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname,
	devtool: 'source-map',
	entry: {
		test: ['mocha!' + path.join(__dirname, 'dist', 'test', 'sinon-chai-in-order.spec.js')]
	},
	output: {
		path          : path.join(__dirname, 'dist'),
		filename      : '[name].bundle.js',
		libraryTarget : 'umd',
		pathinfo      : true
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js'],
		alias: {
			sinon: 'sinon/pkg/sinon'
		}
	},
	module: {
		loaders: [
			{
				test    : /\.json$/,
				loader  : 'json-loader'
			},
			{
				test: /sinon\.js$/,
				loader: "imports?define=>false,require=>false"
			}

		],
		preLoaders: [
			{
				test: /\.js$/,
				loader: "source-map-loader",
				exclude: /node_modules/
			}
		],
		noParse: /\.min\.js$/
	},
	node: {
		fs: "empty"
	}
};
