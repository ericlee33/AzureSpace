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
        <p class="content" v-html="$options.filters.ellipsis(item.content)"></p>
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
    getArticle() {
      this.$axios.post('/api/getblog',{category: '前端技术'})
        .then(res => {
          if(res.data.err_code === 0){
            this.article = res.data.blogs
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 点击文章查看详细内容
    goBlogInfo(id) {
      this.$router.push({ name: "bloginfo", params: { id } }); 
    }
  },
  created(){
    this.getArticle()
  }
}
</script>

<style lang="less" scoped>
@titlecolor:#00A67C;

.home-container {
  .blog-container{

    .articles {
      position: relative;
      padding: 2%;
      min-height: 200px;
      margin-top: 4%;
      background-color: rgba(255,255,255,.6);
      border-radius: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,.3);
      
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
          font-size: 20px;
          color: @titlecolor;
          text-shadow: 2px 2px 15px white;
        }
        
        .readinfo {
          font-size: 14px;
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