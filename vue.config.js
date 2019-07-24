const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  // 输出目录
  outputDir: 'dist',
  lintOnSave: true,
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // 配置代理
  devServer: {
    proxy: {
      '/api': { //  ${base}
        target: 'http://localhost:8083',
        ws: true, // 是否代理websockets
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/' // 这种接口配置出来     http://XX.XX.XX.XX:8083/api/login =>  http://XX.XX.XX.XX:8083/login
        }
      }
    }
  },
  // alias 配置
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
    config.module.rules.delete('svg')
    config.module
      .rule('svg-smart')
      .test(/\.svg$/)
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
