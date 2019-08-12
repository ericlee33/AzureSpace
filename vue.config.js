module.exports = {
    devServer: {
      proxy: {
        '/irs': {
          target: 'https://pacaio.match.qq.com',
          changeOrigin: true
          // pathRewrite: {
          //   '^/api': '/api/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0'
          // }
      }
    }
  }
}