const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
    mode: 'development',
    target: "node",
    entry: ['@babel/polyfill', "./src/index.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
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
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        contentBase: './dist'
    },
    externals: [webpackNodeExternals()]
};