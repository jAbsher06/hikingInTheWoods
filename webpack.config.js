var path = require('path');
var DIST_DIR = path.join(__dirname, '/client/dist');
var SRC_DIR = path.join(__dirname, '/client/src');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx)?/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ]
  }
};