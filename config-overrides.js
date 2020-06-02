const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const { getThemeVariables } = require('antd/dist/theme');
const path = require('path');

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
      javascriptEnabled: true,
      // modifyVars: { '@primary-color': '#111d2c' },
      modifyVars: getThemeVariables({
        dark: true, // 开启暗黑模式
        compact: true, // 开启紧凑模式
      }),
    },
  }),
  addWebpackAlias({
    '@': path.join(__dirname, './src'),
    'public': path.join(__dirname, './public'),
    'api': path.join(__dirname, './src/api'),
    'components': path.join(__dirname, './src/components'),
    'pages': path.join(__dirname, './src/pages'),
    'utils': path.join(__dirname, './src/utils'),
    'config': path.join(__dirname, './src/config'),
  })
);