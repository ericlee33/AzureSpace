<template>
  <div class="home-container">
    <!-- 发表文章 -->


    <!-- 文章渲染 -->
    <div class="blog-container">
      <div class="articles" v-for="item in article" :key="item._id">
        <div class="header" @click="goBlogInfo(item._id)">
          <h3 class="title">{{ item.title }}</h3>
          <p class="readinfo"> > 点击阅读全文 </p>
        </div>
        <p class="content">{{ item.content | ellipsis }}</p>
        <p class="time"><i class="el-icon-time"></i> {{ item.created_time | dateFormat }}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data(){
    return{
      article:[
      ]
    }
  },
  methods: {
    addArticle() {
      this.$axios.get('/api/getblog')
        .then(res => {
          // console.log(res)
          // console.log(res.data.blogs)
          this.article = res.data.blogs
        })
    },
    // 点击文章查看详细内容
    goBlogInfo(id) {
      this.$router.push({ name: "bloginfo", params: { id } }); 
    }
  },
  created(){
    this.addArticle()
  }
}
</script>

<style lang="less" scoped>
.home-container {
  .blog-container{

    .articles {
      position: relative;
      padding: 2%;
      min-height: 200px;
      margin-top: 50px;
      background-color: rgba(0,0,0,0.05);
      box-shadow: 2px 2px 15px #333;
      
      &:first-child{
        margin-top: 0;
      }
      .header{
        display: flex;
        justify-content: space-between;
        text-align: center;
        cursor: pointer;
        
        &:hover {
          color:#333;
          text-decoration: underline;
          text-shadow:0;
        }

        .title{
          font-size: 22px;
          color:skyblue;
          text-shadow: 2px 2px 15px white;
          // transform: rotateX(360deg);
          // transition: all 1s ease 1s;
          // &:hover {
          //   transform: rotateX(360deg);
          //   transition: all 1s linear;
          // }
        }
        .readinfo {
          font-size: 16px;
          margin-top: 10px;
        }
      }
      .content {
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 40px;
      }
      .time {
        position: absolute;
        bottom: 5px;
        right: 10px;
      }
    }
  }
}
</style>