<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content" ref="scroll1">
      <van-swipe :swipe_type="{
        images: this.topImages,
        autoplay: 3500,
        height: 300
        }"></van-swipe>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detailInfo="detailInfo" />
      <detail-param-info :paramInfo="itemParams" />

      </scroll>
      <goods-action />
  </div>
</template>

<script>
import vanSwipe from '@/components/common/vant/VantSwipe';
import GoodsAction from '@/components/common/vant/GoodsAction';
import DetailSwipe from '@/views/detail/childComps/DetailSwipe';
import DetailNavBar from './childComps/DetailNavBar';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailParamInfo from './childComps/DetailParamInfo';


import Scroll from '@/components/common/scroll/Scroll';
import { getDetail, Goods, Shop } from '@/network/detail.js';
export default {
  name:'Detail',
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {}
    }
  },
  activated() {
    //每次打开返回顶部
    this.$refs.scroll1.scrollTo(0, 0, 0)
    //取出商品iid
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      const data = res.result
      //1.请求商品轮播图片
      this.topImages = data.itemInfo.topImages
      //2.请求商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //3.请求店铺参数
      this.shop = new Shop(data.shopInfo)
      //4.请求详情信息
      this.detailInfo = data.detailInfo
      //5.请求参数信息
      this.itemParams = data.itemParams
    })
  },
  components: {
    vanSwipe,
    GoodsAction,
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
  }
}
</script>

<style scoped>
#detail {
 position: relative;
 z-index: 9;
 background-color: #ffffff;
 height: 100vh;
 overflow: hidden;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
}
.content {
  height: calc(100% - 44px);
}
</style>