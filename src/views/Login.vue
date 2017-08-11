<template>
  <div class="login-container">
    <el-form autoComplete="on" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="email">
        <el-input name="email" type="text" autoComplete="on" v-model="loginForm.username" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password" type="password" autoComplete="on" v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit()">
          登录
        </el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="第三方验证">
      邮箱登录成功,请选择第三方验证
      <social-sign></social-sign>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('login', this.loginForm).then(() => {
        this.$router.push({ path: '/' });
      }).catch(() => {
      })
    }
  }
}

</script>

<style scoped>
.login-container {
  width: 400px;
  margin: 100px auto;
}
</style>
