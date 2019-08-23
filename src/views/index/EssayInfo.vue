<template>
  <div class="bloginfo-container">
    <!-- 返回 -->
    <div class="back">
      <el-button type="primary" icon="el-icon-back" @click="backToBlogList">返回</el-button>
    </div>
      
    <div class="articles" v-for="item in article" :key="item.id">
      <div class="header">
        <h3 class="title">{{ item.title }}</h3>
        <p class="time">发表时间:{{ item.created_time | dateFormat }}</p>
        <p class="catagory">文章类型: {{ item.category }}</p>
      </div>
      <p class="content" v-html="item.content"></p>
    </div>

    <blog-info-ct :id="this.id"></blog-info-ct>
  </div>
</template>

<script>
import comment from '../../components/subcomponents/comment.vue'

export default {
  data(){
    return{
      article: [],
      // 获取params的id
      id: this.$route.params.id
    }
  },
  methods: {
    addArticle() {
      this.$axios.get('/api/getblog/' + this.id)
        .then(res => {
          this.article = res.data.bloginfo
        })
    },
    // 返回按钮
    backToBlogList() {
      this.$router.go(-1)
    }
  },
  created(){
    this.addArticle()
  },
  components: {
    'blog-info-ct':comment
  }
}
</script>

<style lang="less" scoped>
.bloginfo-container {
  position: relative;
  background-color: rgba(255,255,255,.6);
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,.3);
  padding: 3%;
  .back {
    position: absolute;
  }

  .header {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .content {
    line-height: 50px;
  }
}
</style>