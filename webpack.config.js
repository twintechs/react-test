const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = './dist/';

module.exports = {
	entry: './lib/index.jsx',
	devServer: {
		hot: true,
		inline: true,
		port: 3000,
		historyApiFallback: true
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: path.resolve(buildDirectory),
		filename: 'app.js',
		publicPath: 'http://localhost:7700/dist'
	},
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules)/,
			loader: 'babel'
		}]
	},
	plugins: []
};
