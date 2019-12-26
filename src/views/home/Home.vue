<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick" />
    <goods-list :goods="showGoods" />
    <ul>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
      <li>ces</li>
    </ul>
  </div>
</template>

<script>
//Home子组件导入
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

//公共组件导入
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from '@/components/content/goods/GoodsList';

//方法导入
import { getHomeMultidata, getHomeGoods } from "@/network/home";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop' //默认请求的类型
    };
  },
  computed: {
    showGoods() {
      //计算属性
      return this.goods[this.currentType].list
    }
  },
  created() {
    //当组件被创建时调用，调用methods里的方法
    //请求首页数据
    this.getHomeMultidata()
    //请求商品列表数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    //设置一下初始化路径，不知道有没有更好的办法，想到了再改
    if(this.$route.path != '/home'){
      this.$router.push("/home");
    }
   
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    //封装请求方法（获取首页数据）
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(res);
      });
    },
    //封装请求方法（获取商品列表数据）
    getHomeGoods(type) {
      const page = this.goods[type].page;
      getHomeGoods(type, page + 1).then(res => {
        this.goods[type].list.push(...res.data.list);  //数组赋值...
        this.goods[type].page += 1;
      })
    },
    /**
     * 事件监听相关的方法
     */
    //子组件（tabControl)传入的方法
    tabClick(index) {
      switch(index) {
        case 0: 
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    }
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>