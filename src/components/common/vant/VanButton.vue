<template>
  <van-button :type="btn_type.type"
              :size="btn_type.size"
              :color="btn_type.color"
              :icon="btn_type.icon"
              :block="btn_type.block"
              :to="btn_type.to"
              :url="btn_type.url">
    <slot></slot>
  </van-button>
</template>

<script>
import { Button } from 'vant';
export default {
  name:'VanButton',
  props: {
    btn_type: {
      type: Object,
      default() {
        return {
          /**(String)，类型，可选值为 primary info warning danger */
          type: 'default',
          /**(String)，尺寸，可选值为 large small mini */
          size: 'normal',
          /**(String)，按钮文字 */
          text: '',
          /**(String)，按钮颜色，支持传入linear-gradient渐变色 */
          color: '',
          /**(String)，左侧图标名称或图片链接，可选值见 Icon 组件(https://youzan.github.io/vant/#/zh-CN/icon) */
          icon: '',
          /**(String)，HTML标签 */
          tag: 'button',
          /**(String)，原生 button 标签 type 属性 */
          native_type: '', 
          /**(Boolean)，是否为块级元素 */
          block: false,
          /**(Boolean)，是否为朴素按钮 */
          plain: false,
          /**(Boolean)，是否为方形按钮 */
          square: false,
          /**(Boolean)，是否为圆形按钮 */
          round: false,
          /**(Boolean)，是否禁用按钮 */
          disabled: false,
          /**(Boolean)，是否使用 0.5px 边框 */
          hairline: false,
          /**(Boolean)，是否显示正在加载状态 */
          loading: false,
          /**(String)，加载提示文字 */
          loading_text: '',
          /**(String)，加载图标类型，可选值为spinner */
          loading_type: 'circular',
          /**(String)，加载图标大小 */
          loading_size: '20px',
          /**(String)，点击后跳转的链接位置 */
          url: '',
          /**(String | Object)，点击后跳转的目标路由对象，同 vue-router 的 to 属性，https://router.vuejs.org/zh/api/#to */
          to: '',
          /**(Boolean)，是否在跳转时替换当前页面历史 */
          replace: false
        }
      }
    }
  },
  components: {
    [Button.name]: Button
  }
}
</script>

<style scoped>

</style>