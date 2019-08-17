<template>
  <div class="login-container">

    <el-button type="primary" @click="dialogFormVisible = true" size="mini" plain>登录</el-button>

    <el-dialog title="登录" :visible.sync="dialogFormVisible" :append-to-body="true" :close-on-click-modal="false" center width="25%">
      
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="40px" class="demo-ruleForm">
        
        <el-form-item label="帐号" prop="account">
          <el-input v-model.number="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitFormLogin">确 定</el-button>
      </div>
      
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('帐号不能为空'));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
        // callback();
      }
    return {
      // 表单
      dialogFormVisible: false,
      formLabelWidth: '120px',


      ruleForm: {
        account: '',
        pass: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        account: [
          { validator: checkAccount, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitFormLogin() {
      const user = {
        account: this.ruleForm.account,
        password: this.ruleForm.pass
      }
      this.$axios.post('/api/login',{
        account: this.ruleForm.account,
        password: this.ruleForm.pass
      })
        .then(res => {
          if(res.data.err_code === 0) {
            this.$message('登录成功!')
            window.localStorage.setItem('user', user)
          }
        })
        .catch(err => {
          console.log(err)
        })


      this.dialogFormVisible = false
    }
  }
}
</script>

<style lang="less" scoped>

</style>

 