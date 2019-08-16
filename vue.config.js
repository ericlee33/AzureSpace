module.exports = {
    devServer: {
      proxy: {
        '/irs': {
          target: 'https://pacaio.match.qq.com',
          changeOrigin: true
          // pathRewrite: {
          //   '^/api': '/api/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0'
          // }
        },
        '/api': {
          target: 'http://127.0.0.1:3000/',
          changeOrigin: true
        }
    }
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/views/index/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html'
    },
    admin: {
      entry: 'src/views/admin/admin.js',
      template: 'public/admin.html',
      filename: 'admin.html'
    }
  }
}