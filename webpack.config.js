var path = require('path');
var webpack = require("webpack")
var commonChunk = new webpack.optimize.CommonsChunkPlugin({name:'shared',filename:"shared.js"})
var ExtractPlugin = require("extract-text-webpack-plugin");

var config = {
   context:path.resolve('js'),
  entry: ["./utils", "./app"],
   output: {
        path:path.resolve('build/'),
        publicPath:'/public/assets/',
         filename: "bundle.js"
    },
     devServer:{
        contentBase:'public'
     },
           module: {
            rules: [{
                test: [/\.js$/, /\.jsx$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }, {
                enforce: 'pre',
                test: [/\.js$/],
                exclude: /(node_modules)/,
                loader: 'eslint-loader'
            }, {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use:  ExtractPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader']
        })
            },{
                test: /\.less$/,
                exclude: /(node_modules)/,
                use: ExtractPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'less-loader']
        })
            }
            ]
        },
     resolve: {
        extensions: ['.jsx','.js','.es6']
     },
     plugins:[
     new ExtractPlugin("style.css")
     ],
 }
module.exports = config

/*var config = {
    context:path.resolve('js'),
   entry: {about:"./about_page",
            contact:"./contact_page.js",
            home:"./home_page.js",
        },
    output: {
        path:path.resolve('build/js/'),
        publicPath:'/public/assets/js/',
        filename: "[name].js"
    },
    devServer:{
        contentBase:'public'
    },
    module: {
        rules: [{
                test: [/\.js$/, /\.jsx$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }, {
                enforce: 'pre',
                test: [/\.js$/],
                exclude: /(node_modules)/,
                loader: 'eslint-loader'
            },{
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: ['style-loader', 'css-loader']
            }
            ]
    },
    resolve: {
        extensions: ['.jsx','.js','.es6']
    },
    plugins:[commonChunk],
}*/

 
 