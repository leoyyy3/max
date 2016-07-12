var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
console.log('开始执行');

module.exports = {
  devtool:false,
  entry: [
    './src/index',
    // 'webpack-hot-middleware/client',
    // 'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
  ],
  output: {
    path:path.resolve(__dirname,'./build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings:false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
      // { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  resolve: {
        extensions: ['', '.js', '.jsx','css'],
        // alias: {
        //   'react-router': path.join(__dirname, '..', 'modules')
        // }
        // alias: {
        //     echarts$: "echarts/src/echarts.js",
        //     echarts: "echarts/src",
        // }
    }
};
