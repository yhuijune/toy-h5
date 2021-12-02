module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title =
        '诺心蛋糕官网-生日蛋糕_水果蛋糕_慕斯_芝士蛋糕-LE CAKE蛋糕店诺心蛋糕网上订购'
      return args
    })
  }
}
