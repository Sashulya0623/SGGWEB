<template>
  <div class="login">
    <div class="login_box">
        <div class="login_title">欢迎登录</div>
        <div class="login_form">
            <el-form  ref="LoginForm" :model="loginForm" label-width="50px">
                <el-form-item label="用户">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button class="login_btn" type="primary" @click="login">登录</el-button>
                  <el-button class="login_btn" type="info">忘记密码</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
    
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import {login} from '../api/index'
export default {
  name: 'Login',
  data() {
      return {
          loginForm: {
              username: '',
              password: ''
          }
              
          
      }
  },
  components: {
    
  },
  methods: {
      ...mapMutations('userInfo',['setUser']),
      login() {
          this.$refs.LoginForm.validate(valid=> {
              if(valid) {
                  login({
                      username: this.loginForm.username,
                      password: this.loginForm.password
                  }).then(res => {
                      if (!res.data) {
                        this.$message({
                          message: '用户名或密码错误！',
                          type: 'error'
                        })
                        return false
                      }
                      this.setUser(res.data)
                      this.$router.push('/index')
                    })
                    }
                })
        
          console.log(this.loginForm);
      }
  }
}
</script>

<style>
.login_box {
    width: 500px;
    height: 400px;
    background: rgb(191, 245, 255);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -200px;
    padding: 10px;
}
.login_title {
    width: 78px;
    height: 18px;
    margin: 10px auto 44px;
    font-size: 18px;
    line-height: 18px;
    color: purple;
}
.login_form {
    /* background-color: #bfa; */
    width: 400px;
    height: 250px;
    font-size: 18px;
    margin: 0 auto;
    padding: 20px;

}

.login_btn {
    width: 100px;
    margin: 20px 10px;
}
</style>
