const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];

module.exports = {
  productionSourceMap: false,
  baseUrl: './',
  outputDir: process.env.VUE_APP_OUTPUTDIR,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // red: '#03a9f4',
          // blue: '#3eaf7c',
          // orange: '#f08d49',
          // 'text-color': '#111'
        }
      }
    }
  },
  devServer: {
    open: true,
    port: 8082,
    proxy: {
      '/staging': {
        target: 'http://192.168.11.82:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/staging': ''
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      // 配置gzip
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
  chainWebpack: config => {
    // 这里可以修改webpack配置
    // 移除预加载
    // Object.keys(pages).forEach(entryName => {
    //   config.plugins.delete(`prefetch-${entryName}`);
    // });
  }
};
