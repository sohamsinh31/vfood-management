const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(sass|less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|txt)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
    favicon: './public/favicon.ico'
  })],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
      publicPath: '/'
    },
    hot: true,
  },
};
