const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../', 'src'),
  assets: path.resolve(__dirname, '../', 'src', 'assets'),
  svgIcons: path.resolve(__dirname, '../', 'src', 'assets', 'svgIcons'),
  public: path.resolve(__dirname, '../', 'public'),
  output: path.resolve(__dirname, '../', 'build'),
  entry: path.resolve(__dirname, '../', 'src/index.js'),
  indexHtml: path.resolve(__dirname, '../', 'public/index.html'),
  favicon: path.resolve(__dirname, '../', 'public/favicon.ico'),
};
