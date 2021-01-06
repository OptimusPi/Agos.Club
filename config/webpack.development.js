const webpack = require('webpack')

const commonPaths = require('./paths')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.output,
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  // devtool: 'eval-cheap-module-source-map',
  // devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: [commonPaths.output, commonPaths.public],
    historyApiFallback: true,
    compress: true,
    port: 3000,
    hot: true,
    // hmr: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin(/* {overlay: false} */)],
}
