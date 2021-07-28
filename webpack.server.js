const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
    target: "node",
    entry: ['@babel/polyfill', "./src/index.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: 'http://localhost:3000'
    },
    module: {
        rules: [
            //第一個loader編譯JSX
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
                }
            },
            //第二個loader編譯ES6
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] }
                }
            },
            //第三個loader編譯.svg
            {
                test: /\.svg$/,
                use: {
                    loader: '@svgr/webpack'
                },
            },
        ],
    },
    devServer: {
        contentBase: './dist'
    },
    externals: [webpackNodeExternals()]
};