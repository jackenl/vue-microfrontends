const { name } = require('./package');

module.exports = {
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    overlay: {
      warnings: false, //不显示警告
      errors: false, //不显示错误
    },
  },
  lintOnSave:false,
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  chainWebpack: (config) => {
    config.devServer.set('inline', false);
    config.devServer.set('hot', true);
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`js/[name].js`);
    }
  },
  filenameHashing: false,
  css: {
    extract: false,
  },
};
