<template>
  <div class="login">
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <hm-input
      type="text"
      placeholder="用户名/手机号码"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式不对"
      ref="password"
    ></hm-input>

    <hm-button @click="login">登录</hm-button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      // 做一个表单的校验
      // this.$refs.username.validate(this.username)
      // this.$refs.password.validate(this.password)
      if (!this.$refs.username.validate(this.username)) {
        return
      }
      if (!this.$refs.password.validate(this.password)) {
        return
      }
      this.$axios({
        method: 'post',
        url: '/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.statusCode === 200) {
          // alert('登录成功')
          this.$toast.success('登录成功了')
          this.$router.push('/user')
        } else {
          // alert('用户名或者密码错误')
          this.$toast.fail('用户名或密码错误')
        }
      })
    }
  },

  data() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style></style>
