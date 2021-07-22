const path = require("path");

module.exports = {
    mode: 'development',
    target: "node",
    entry: "./src/client/client.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag', // 多個 CSS 合併為單一個 style 標籤
                            attributes: {
                                id: 'allCSS', // 附加 id 屬性並定義其值為 "allCSS"
                            },
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: ['svg-inline-loader']
            },
        ],
    },
};