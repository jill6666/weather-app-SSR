const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
    mode: 'development',
    target: "node",
    entry: ["./src/index.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: 'http://localhost:3000'
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
                use: [
                    {
                        loader: 'svg-url-loader?limit=1000000&mimetype=image/svg+xml',
                    },
                    {
                        loader: './src/client/images',
                    }
                ],
                options: {
                    publicPath: 'build'
                }
            },
        ],
    },
    externals: [webpackNodeExternals()]
};