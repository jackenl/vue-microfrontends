module.exports = {
  plugins: {
    // 给所有css添加统一前缀
    'postcss-selector-namespace': {
      namespace(css) {
        return '#micro-app1';
      },
    },
  },
};
