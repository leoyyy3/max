var webpack = require('webpack');
var path = require('path');
console.log('开始执行');

module.exports = {
  // devtool: 'eval-source-map',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // './modules/main.js',
    './src/index',
    'webpack-hot-middleware/client',
    // 'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server',
  ],
  output: {
    path:path.resolve(__dirname,'./build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // {
      //   test: /\.js?$/,
      //   loaders: ['react-hot', 'babel'],
      //   include: [path.join(__dirname, 'src')],
      //   exclude: /node_modules/
      // },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
      // {
      //   test: /\.js$/,
      //   loaders: ['babel'],
      //   include: path.join(__dirname, 'src')
      // },
      // { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  resolve: {
        extensions: ['', '.js', '.jsx'],
        // alias: {
        //     echarts$: "echarts/src/echarts.js",
        //     echarts: "echarts/src",
        //     // zrender$: "zrender/src/zrender.js",
        //     // zrender: "zrender/src"
        // }
        // modulesDirectories: ["./src", "node_modules", "bower_components"]
    }
};
