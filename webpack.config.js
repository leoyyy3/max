var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
console.log('开始执行');

module.exports = {
  // devtool: 'eval-source-map',
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index',
    'webpack-hot-middleware/client',
    'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
  ],
  output: {
    path:path.resolve(__dirname,'./build'),
    filename: 'index.js',
    publicPath: '/build/'
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  resolve: {
        extensions: ['', '.js', '.jsx','css'],
        // alias: {
          // 'react-router': path.join(__dirname, '..', 'modules'),
          // 'react': path.join(nodeModulesPath, 'react/react.js')
        // }
        // alias: {
        //     echarts$: "echarts/src/echarts.js",
        //     echarts: "echarts/src",
        //     // zrender$: "zrender/src/zrender.js",
        //     // zrender: "zrender/src"
        // }
        // modulesDirectories: ["./src", "node_modules", "bower_components"]
    }
};
