<template>
  <div class="news-container">
    <!-- 使用懒加载新闻图片 -->
    <h2>下面是新闻快播~</h2>
    <!-- 上线后有bug未实现，不在云服务器用时可以 -->
    <div class="demo-image__lazy news-container">
        <a :href="item.vurl" target="_blank" v-for="item in newsinfo" :key="item.app_id">
          <el-image :src="item.bimg" lazy class="img"></el-image>

          <div class="content">
            <h3 class="title">{{ item.title }}</h3>
            <p class="info">{{ item.intro }}</p>
          </div>
        </a>
    </div>

  </div>
</template>

 <script>
// export default {
//   data() {
//     return {
//       newsinfo: [] //得到新闻清单
//     }
//   },
//   created() {
//     this.getNewsList()
//   },
//   methods:{
//     getNewsList() {
//       // 获取新闻接口
//       this.$axios.get('/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0')
//         .then(response => {
//           // console.log(response.data.data)
//           this.newsinfo = response.data.data
//         })
//         .catch(error => {
//           console.log(err)
//         })
//       }
//   },
//   computed: {
//   },
//   components: {
//   }
// }
// </script>
<style lang="less" scoped>
// 渲染出的全部新闻box
.news-container {
  width: 100%;
  padding: 20px;

  h2 {
    font-size:25px;
    height: 30px;
    line-height: 30px;
    color: #00aa35;
    text-shadow: 2px 2px 2px skyblue;
  }
  // 渲染出的每个新闻
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    margin-top: 2%;
    padding: 20px;

    &:first-child {
      margin: 0;
    }
    &:hover {
      background-color:rgba(0,0,0,0.05);
    }
    // 新闻图片
    .img {
      border-radius: 20%;
      width: 300px;
      height: 150px;
      margin-right: 5%;
    }

    // 内容
    .content {
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;

      .title {
        font-size: 20px;
      }
      .info {
        margin-top: 5%;
        font-size: 14px;
      }
    }
  }
}

</style>