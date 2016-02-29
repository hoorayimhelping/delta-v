var webpack = require('webpack');

module.exports = {
  entry: './src/js/views/main.jsx',
  output: { path: './assets/js/', filename: 'app.js'},
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /.js/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.jsx$/, loaders: ["jsx-loader", "babel"], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ["style", "css"] }
    ]
  }
}
