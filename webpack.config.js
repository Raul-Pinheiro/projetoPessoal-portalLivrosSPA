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
        filename:"base.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
    //         // {
    //         //     test: /\.html$/,
    //         //     use:["html-loader"]
    //         // },
    //     //  {
    //     //      test: /\.jpg$/,
    //     //      use: {
    //     //           loader:"file-loader",
    //     //           options: {
    //     //               name: "[name].[ext]" 
    //     //           }
    //     //       }
    //     //   }
        ]
    }
}