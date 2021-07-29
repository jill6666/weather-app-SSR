const path = require("path");

module.exports = {
    mode: "development",
    target: "node",
    entry: ['@babel/polyfill', "./src/client/client.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
        publicPath: './src/client/client.js'
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
    },
    devServer: {
        contentBase: './dist'
    }
};