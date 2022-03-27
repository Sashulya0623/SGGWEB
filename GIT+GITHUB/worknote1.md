portal组件：任意位置添加
 
 先拉主分支新代码
 先切换到要推送的分支----git commit----push
 
 打包流程：
 打包地址
 1. 先把env.production的地址换成打包地址(不要提交)
 2. 然后运行npm run build 
 3. 启动页面，看请求地址与打包地址是否一样
 4. 如果一样，把生成的dist文件夹压缩zip发送
 
 * 表单项必须有prop才能自定义规则
 * 提交必须预验证
 * el-form label-width规定每个表单名称的长度
 正则表达：只能正整数数字和小数
 { pattern: /^[\d]+[\d|.]+$/, message: '只能输入数字和小数', trigger: 'change' }
 限制长度：
 { pattern: /^[\d]+[\d|.]+$/, message: '只能输入数字和小数', trigger: 'change' },
 { min: 2, max: 10, message: '长度2-10个字符', trigger: 'change' }
 
 v-if="userInfoObj.user.sysRoles[0].code === 'VISIT_ADMIN'"
 
 
 分页器高亮
 if (page === 1) this.page = 1
 
 
 
 vue-router中使用go(-1)后退偶发性无效
 @click="$router.go(-1)"
 后临时改为
 @click="$router.push({ path: '上一路径'})"
 待寻它法
 
 
 
紧急：
echarts实际用法
模糊搜索
小程序