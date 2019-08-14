<template>
  <div class="news-container">
    <!-- <div class="news-container banner">
      <ul>
        <li v-for="item in newsinfo" :key="item.app_id">
          <img :src="item.bimg" alt="">
          <span class="title">{{item.title}}</span>
          <span class="info">{{item.intro}}</span>
        </li>
      </ul>
    </div> -->
    <!-- 使用懒加载新闻图片 -->
    <h2>下面是新闻快播~</h2>
    <el-divider></el-divider>
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

export default {
  data() {
    return {
      newsinfo: [] //得到新闻清单
    }
  },
  created() {
    this.getNewsList()
  },
  methods:{
    getNewsList() {
        this.$axios.get('/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0')
          .then(response => {
            // console.log(response.data.data)
            this.newsinfo = response.data.data
          })
          .catch(error => {
            console.log(err)
          })
        }
  },
  computed: {
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
// 渲染出的全部新闻box
.news-container {
  width: 100%;
  padding: 20px;
  background-color: rgba(0,0,0,0.05);
  box-shadow: 2px 2px 15px #555;

  h2 {
    font-size:30px;
    height: 30px;
    line-height: 30px;
    color:azure;
    text-shadow: 2px 2px 2px skyblue;
  }
  // 渲染出的每个新闻
  a {
    background-color: rgba(0,0,0,0.15);
    box-shadow: 0 0 10px skyblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    margin-top: 50px;
    padding: 20px;

    &:first-child {
      margin: 0;
    }
    // 新闻图片
    .img {
      border-radius: 20%;
      width: 30%;
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
        font-size: 22px;
      }
      .info {
        margin-top: 5%;
        font-size: 16px;
      }
    }
  }
}

</style>