<template>
  <div id="list-container" style="margin:20px auto" class="login-container">
    <div style="width:500px;margin:100px auto 0; overflow:hidden;">
      <div :class="!isRegSuccess ? '' : 'hidden'">
        <h3 class="title">用户注册</h3>
        <el-form ref="form" label-width="80px">
          <div style="overflow:hidden;">
            <div>
              <el-form-item label="用户名" style="display:inline-block;width:300px;">
                <el-input v-model="name"></el-input>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="密码" style="display:inline-block;width:300px;">
                <el-input v-model="password" type="password"></el-input>
              </el-form-item>
              <label style="color:#666;font-size:14px;">密码的长度至少6位</label>
            </div>
            <div>
              <el-form-item label="确认密码" style="display:inline-block;width:300px;">
                <el-input v-model="repeatpassword" type="password"></el-input>
              </el-form-item>
            </div>
            <div style="margin-left:80px;">
              <el-button type="danger" class="is-round" style="width:90px;float:left;" @click="regFunc">注册</el-button>
              <a href="javascript:void(0)" @click="back" style="float:left;font-size:15px;margin-left:16px;margin-top:20px;">返回</a>
            </div>
          </div>
        </el-form>
      </div>
      <div :class="isRegSuccess ? '' : 'hidden'">
        <h3 class="title">恭喜您！注册成功了!!!</h3>
        <div class="title">
          <el-button type="danger" class="is-round" style="width:90px;">
            <router-link :to="{path:'/login'}" style="color:#fff;">
              去登录
            </router-link>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        name: '',
        password: '',
        repeatpassword: '',
        isRegSuccess: false
      }
    },
    methods: {
      messageFunc(status, msg) {
        this.$message({
          type: status,
          message: msg
        });
      },
      back() {
        history.back();
      },
      // 注册按钮
      regFunc() {
        if (!this.name) {
          this.messageFunc('warning', '用户名不能为空');
          return;
        }
        if (!this.password) {
          this.messageFunc('warning', '密码不能为空');
          return;
        }
        if (this.password.length < 6) {
          this.messageFunc('warning', '密码的长度至少6位');
          return;
        }
        if (this.repeatpassword !== this.password) {
          this,messageFunc('warning', '两次输入的密码不同，请重新输入');
          return;
        }
        const obj = {
          username: this.name,
          password: this.password
        };
        this.$axios.post('/api/register', obj).then((res) => {
          // console.log(res.data.err_code===0)
          if (res.data.err_code===0) {
            console.log(res.data.message || '注册成功！！');
          } else {
            console.log('注册失败')
          }
        });
      }
    }
  }
</script>