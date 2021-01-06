const eslint = require('eslint')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonPaths = require('./paths')

module.exports = {
  // this fixes : https://github.com/webpack/webpack-dev-server/issues/2758
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  entry: commonPaths.entry,
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|jsx)$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/,
      //   options: {
      //     formatter: eslint.CLIEngine.getFormatter('stylish'),
      //     emitWarning: process.env.NODE_ENV !== 'production',
      //   },
      // },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        include: commonPaths.svgIcons,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        include: commonPaths.assets,
        exclude: commonPaths.svgIcons,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  // serve: {
  //   content: commonPaths.entry,
  //   dev: {
  //     publicPath: commonPaths.output,
  //   },
  //   open: true,
  // },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    // alias: {
    //   'chart.js': commonPaths.chartJs,
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: commonPaths.indexHtml,
      favicon: commonPaths.favicon,
    }),
  ],
  performance: { hints: false },
}
