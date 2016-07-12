var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));
// app.use(express.static(__dirname))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sjzz', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html/sjzz'));
});

app.get('/css/css.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'css/css.css'));
});

app.get('/images/max.png', function(req, res) {
  res.sendFile(path.join(__dirname, 'images/max.png'));
});

app.get('/build/index.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('/build/css/css.css', function(req, res) {
  res.sendFile(path.join(__dirname, '/build/css/css.css'));
});

app.get('/build/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/build/bundle.js'));
});
// app.get('/sjzzhang', function(req, res) {
//   res.sendFile(path.join(__dirname, '/sjzzhang'));
// });

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});