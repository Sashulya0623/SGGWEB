<template>
  <div class="header">
      <div class="left">
        <img class="logo" src="../../assets/img/logo.png" alt="" />
        <div class="name">登录权限</div>
      </div>

      <div class="right">
        <el-dropdown>
          <div class="r-user">
            <div class="username">{{user.username}}</div>
            <div>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  components: {
    
  },
  computed: {
    ...mapState('userInfo',['user'])
  },
  methods: {
      logout() {
          this.$router.push('/login')
      }
  }
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 18px 20px;
    background-color: #fff;
}

.left {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
}

.name {
      width: 244px;
      height: 28px;
      font-size: 20px;
      /* font-family: PingFangSC-Medium, PingFang SC; */
      font-weight: 500;
      line-height: 28px;
      color: purple;
}

.right {
    display: flex;
    cursor: pointer;
    align-items: center;
    /* background-color: #bfa; */
}
.r-user {
  display: flex;
  justify-content: center;
  align-items: center;
}

.username {
    width: 50px;
    height: 28px;
    font-size: 20px;
    text-align: center;
    /* font-family: PingFangSC-Regular, PingFang SC; */
    font-weight:500;
    line-height: 28px;
    color: purple;
    margin-right: 10px;
}


</style>

