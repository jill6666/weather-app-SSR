const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
    mode: 'development',
    target: "node",
    entry: ["./src/index.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.svg/,
                use: ['file-loader']
            },
        ],
    },
    externals: [webpackNodeExternals()]
};