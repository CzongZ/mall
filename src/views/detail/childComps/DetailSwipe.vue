<template>
  <van-swipe :swiper_type="{
    width: 320,
    height: 250,
    images: this.topImages
    }">
  </van-swipe>
</template>

<script>
//组件导入
import VanSwipe from '@/components/common/vant/VantSwipe';
export default {
  name:'DetailSwipe',
  props: {
    images: {
      type: Array,
      default: null
    }
  },
  components: {
    VanSwipe
  }
}
</script>

<style scoped>

</style>