const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
		devServer: {
				contentBase: './public',
		},
		entry: './example/web/index.ts',
		plugins: [
				new CleanWebpackPlugin({
						cleanAfterEveryBuildPatterns: ['public']
				}),
				new HtmlWebpackPlugin({
						template: 'example/web/index.html'
				}),
		],
		output: {
				path: __dirname + '/public',
				filename: 'build/[name].[contenthash].js'
		},
		resolve: {
				extensions: ['.ts', '.tsx', '.js'],
		},
		module: {
				rules: [
						{
								test: /\.tsx?$/,
								exclude: [/node_modules/],
								loader: "ts-loader",
								options: {
										configFile: "tsconfig.example.web.json"
								}
						}
				]
		}
}
