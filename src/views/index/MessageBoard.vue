<template>
  <div class="comment-container">

    <h3>客官,想说些什么~尽管写下吧!</h3>
    <hr>

    <!-- 写评论 -->
    <div class="add-comment">

      <el-form label-width="120px" :model="formLabelAlign">
        <el-form-item label="昵称" required>
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="想说些什么~" required>
          <el-input type="textarea" v-model="formLabelAlign.content" placeholder="来都来了,何不留个足迹呢~"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sendMessageBoard">发表</el-button>
        </el-form-item>
      </el-form>

    </div>

    <!-- 评论区 -->
    <div class="get-comment-container">

      <h3>评论~</h3>
      <hr>
      <!-- 评论内容 -->
      <div class="getcomment" v-for="(item,i) in comments" :key="i">
        <div class="header">
          <span class="floor">第{{ i+1 }}楼</span>
          <span class="nickname">{{ item.nickname }}</span>
          <span class="time">{{ item.created_time | dateFormat }}</span>
        </div>
        <p class="content">
          {{ item.content }}
          <span class="delete" @click="deleteMessage(item._id)">删除</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      comments: [],
      formLabelAlign: {
        nickname: '',
        content: ''
      }
    }
  },
  methods: {
    // 发送柳岩数据
    sendMessageBoard(){
      // console.log(this.formLabelAlign)
      // console.log(this.id)
      this.$axios.post('/api/addmessageboard',{
          nickname: this.formLabelAlign.name,
          content: this.formLabelAlign.content
        })
        .then(res => {
          if(res.data.err_code === 0){
            this.formLabelAlign.name = ''
            this.formLabelAlign.content = ''
            this.$message('留言成功!')
            // 发送成功后,刷新评论区内容
            this.getMessageBoard()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 请求评论区数据
    getMessageBoard(){
      this.$axios.get('/api/getmessageboard')
        .then(res => {
          this.comments = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 删除消息
    deleteMessage(id) {
      this.$axios.post('/api/deletemessageboard/' + id)
        .then(res => {
          if(res.data.err_code === 0) {
            this.$message('删除成功')
            this.getMessageBoard()
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created() {
    this.getMessageBoard()
  }
}
</script>

<style lang="less" scoped>

.comment-container {
  h3 {
    height: 50px;
    line-height: 50px;
  }
  .add-comment {
    margin-top: 20px;
  }
  .get-comment-container{
    h3 {
      height: 50px;
      line-height: 50px;
    }
    .getcomment {
      height: 90px;
      margin-top: 2%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-color: rgba(0,0,0,.0.7);
      border: 1px solid #333;
      box-shadow: 0 0 5px #333;
      padding: 1%;

      .header {
        overflow: hidden;
        font-weight: bold;

        .floor {
          float: left;
          margin-right: 1%;
          color: rgba(0, 62, 233, 0.972);
        }
        .nickname {
          float: left;
          color: rgba(0, 62, 233, 0.972);
        }
        .time {
          float: right;
        }
      }
      .content{
        font-weight: bold;
        font-size: 20px;
        color: #777;

        .delete {
          float: right;
          cursor: pointer;
        }
      }
    }
  }
}
</style>