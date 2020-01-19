<template>
  <div>
    <h2>分类页面</h2>
    <van-button :btn_type="{
      type: 'info',
      size: 'small', 
      icon: 'star-o'
      }">
      测试
      </van-button>
      <van-button :btn_type="{
      type: 'default',
      size: 'small', 
      icon: 'star-o'
      }">
      测试
      </van-button>
  </div>
</template>

<script>
import VanButton from "@/components/common/vant/VanButton";
export default {
  name: "Category",
  components: {
    VanButton
  }
};
</script>

<style scoped>
</style>