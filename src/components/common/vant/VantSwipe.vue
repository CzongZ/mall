<template>
  <van-swipe :autoplay="swipe_type.autoplay"
             :height="swipe_type.height"
             :indicator-color="swipe_type.indicator_color"
             >
    <van-swipe-item v-for="(item, index) in this.swipe_type.images" 
                    :key="index">
      <img class="top-images" :src="item" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  name: 'VantSwipe',
  props: {
    swipe_type: {
      type: Object,
      default() {
        return {
          /**(Array)，需要轮播的图片个数 */
          images: null,
          /**(number)，自动轮播间隔，单位ms */
          autoplay: 3000,
          /**(number)，动画时长，单位ms */
          duration: 500,
          /**(number)，初始位置索引 */
          initial_swipe: 0,
          /**(number)，滑板宽度 */
          width,
          /**(number)，滑板高度 */
          height,
          /**(boolean)，是否开启循环播放 */
          loop: true,
          /**(boolean)，是否显示指示器 */
          show_indicators: true,
          /**(string)，指示器颜色 */
          indicator_color: "#1989fa",
          /**(boolean)，是否为纵向滚动 */
          vertical: false,
          /**(boolean)，是否可以通过手势滑动 */
          touchable: true,
          /**(boolean)，是否阻止滑动事件冒泡 */
          stop_propagation: true
        }
      }
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
}
</script>

<style scoped>
.top-images {
  width: 100%;
}
</style>