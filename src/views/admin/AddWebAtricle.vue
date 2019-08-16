<template>
  <div class="add-web-article-container">
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
  data(){
    return{
      formLabelAlign: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    // 发表web文章
    sendWebArticle(){
      // console.log(this.formLabelAlign)
      this.$axios.post('/api/addblog',{
          title: this.formLabelAlign.title,
          content: this.formLabelAlign.content
        })
        .then(res => {
          if(res.data.err_code === 0){
            this.$message('发表成功!')
            this.formLabelAlign.title = ''
            this.formLabelAlign.content = ''
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
  }
}

</script>
<style lang="less" scoped>
.add-web-article-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    width: 90%;
  }
}
</style>