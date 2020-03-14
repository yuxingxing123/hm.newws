    <template>
  <div class="hm-button" @click="clickFn">
    <slot></slot>
  </div>
</template>
    
    <script>
export default {
  methods: {
    clickFn() {
      // 只是通知父组件处理，触发组件的click事件
      this.$emit("click");
    }
  }
};
</script>
    <style lang="less" scoped>
.hm-button {
  height: 50px;
  line-height: 50px;
  margin: 0 20px;
  background-color: rgb(204, 51, 0, 1);
  text-align: center;
  border-radius: 25px;
  color: #fff;
  font-size: 15px;
}
</style>