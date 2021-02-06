const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    devServer: {
    contentBase: path.join(__dirname, 'dist'),    
    open:true,
    port: 9000
    },
    entry:"./router.js",
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,"dist"),
        publicPath:'/'
    },
    plugins:[ new HTMLWebPackPlugin({
        template:"./index.html",
        filename:"index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    }
}