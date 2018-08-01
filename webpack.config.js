const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

module.exports = {
  //"__dirname"是node.js中的一个全局变量，它指向当前执行脚本所在的目录
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    inline: true,//实时刷新
    port: 8090,
    // 代理服务器 解决跨域问题
    proxy: {
      '/artical_list': {
        target: 'http://47.93.11.92/artical_list',
        pathRewrite: {'^/artical_list' : ''},
        changeOrigin: true
      }
    }
    // 举个例子
    // proxy: {
    //   '/api': {
    //     target: 'http://user.reekly.com/',
    //     pathRewrite: {'^/api' : '/campaign_huggies/t3store_freeuse/admin'},
    //     changeOrigin: true
    //   }
    // }
    // 这样http://localhos:8080/api/getUser.php的请求就是http://user.reekly.com/campaign_huggies/t3store_freeuse/admin/getUser.php
  },
  module: {
    rules: [
      {
        //允许使用ES6以及JSX语法
        // babel-preset-es2015用于解析es6，babel-preset-react用于解析jsx
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",

          query: {
            presets: ["react", "es2015", "stage-0"]
          }
        },
        // exclude: /node_modules/ 去掉这句突然就能使用UglifyJsPlugin压缩js了【毛病
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            options: {
              // modules: true
            }
          }, {
            //加浏览器适配前缀
            loader: "postcss-loader"
          },{
            loader: "sass-loader",
            // 使得js中可以对象的形式使用样式 css模块化 可直接把css的类名传递到组件的代码中，只对当前组件有效，不会造成冲突
            // options: {
            //   modules: true
            // }
          }
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    new webpack.optimize.UglifyJsPlugin({    //压缩js
      compress: {
        warnings: false,
        drop_console: true
      }
    }), //压缩js代码 webpack内置插件
    new ExtractTextPlugin("style.css"), //分离js及css 非内置插件，需要npm install --save-dev extract-text-webpack-plugin
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html" //new 一个插件的实例，并传入相关的参数
    })
  ]
}
