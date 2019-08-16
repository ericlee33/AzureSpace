<template>
  <div class="edit-web-article-container">
    <div class="form-container">
      <el-form label-width="120px" :model="formLabelAlign">
        <el-form-item label="文章标题" required>
          <el-input v-model="formLabelAlign.title"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" required>
          <el-input type="textarea" v-model="formLabelAlign.content" placeholder="来都来了,何不留个足迹呢~" :rows="24"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sendWebArticle">发表</el-button>
          <el-button type="primary" @click="backToWebAdmin">返回管理界面</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  // props: []
  data(){
    return{
      formLabelAlign: {
        title: '',
        content: ''
      },
      id: this.$route.params.id
    }
  },
  methods: {
    getArticle() {
      console.log(this.id)
      this.$axios.get('/api/getblog/' + this.id)
        .then(res => {
          // 传递数据给我们的表单
          this.formLabelAlign = res.data.bloginfo[0]
      })
      .catch(err => {
        console.log(err)
      })
    },
    // 发表web文章
    sendWebArticle(){
      // console.log(this.formLabelAlign)
      this.$axios.post('/api/updateblog/' + this.id,{
          title: this.formLabelAlign.title,
          content: this.formLabelAlign.content
        })
        .then(res => {
          if(res.data.err_code === 0){
            this.$message('发表成功!')
            this.$router.go(-1)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    backToWebAdmin() {
      this.$router.go(-1)
    }
  },
  created() {
    this.getArticle()
  }
}

</script>
<style lang="less" scoped>
.edit-web-article-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    width: 90%;
  }
}
</style>