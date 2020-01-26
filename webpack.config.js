const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		})
	]
};
