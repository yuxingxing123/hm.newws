<template>
  <div class="register">
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
      
    <van-button type="warning">警告按钮</van-button>
    <hm-button @click="register">注册</hm-button>
  </div>
</template>

<script>
export default {
  methods: {
    register() {
      console.log('我要注册了')
    }
  }
}
</script>

<style lang="less" scoped></style>
