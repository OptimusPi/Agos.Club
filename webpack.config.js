const { merge } = require('webpack-merge');
const base = require('./config/webpack.base');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const envConfig = require(`./config/webpack.${env}.js`);
module.exports = merge(base, envConfig);
