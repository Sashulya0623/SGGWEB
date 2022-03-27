<template>
  <div class="home">
    <el-container class="container">
      <el-aside width="200px">
         <el-menu
           default-active="2"
           class="el-menu-vertical-demo"
           background-color="#e0ffd1"
           text-color="#000"
           active-text-color="purple"
           :unique-opened="true"
           >
             <!-- el-submenu 中的index属性值必须为字符串 -->
             <el-submenu :index="item.id.toString()" v-for="item in user.rights" :key="item.id">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{item.authName}}</span>
                </template>
                <el-menu-item @click.native="toOne" :index="index2.toString()" v-for="(item2,index2) in item.children" :key="index2">
                  <template slot="title">{{item2.authName}}</template>
                </el-menu-item>
             </el-submenu>

         </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
    
</template>

<script>
import {mapState} from "vuex"
export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    get() {
      console.log(this.user.rights);
    },
    toOne() {
      this.$router.push('/index/home/one')
    }
  },
  computed: {
    ...mapState("userInfo",['user'])
  },
  mounted() {
    this.get()
  }
}
</script>

<style scoped>
.home {
  flex: 1;
  /* background-color: #bfa; */
}

.container {
  height: 100%;
  /* background-color: #e0ffd1; */
}

.el-aside {
  background-color: #e0ffd1;
}
.el-menu {
    border-right: 0;
}

</style>
