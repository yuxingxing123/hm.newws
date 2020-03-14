<template>
  <div class="register">
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
    <hm-input></hm-input>
    <hm-input></hm-input>
    <hm-input></hm-input>

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
