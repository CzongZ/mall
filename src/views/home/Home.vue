<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <!-- tabcontrol的复件用于吸顶 -->
    <tab-control
        class="tab-con-show"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        v-show="isTabShow"
      />

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
      :pullDownRefresh="true"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop()" v-show="isShowBackTop" />
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
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";
//方法导入
import { getHomeMultidata, getHomeGoods } from "@/network/home";
//工具方法导入
import { debounce } from "@/common/utils.js"; //防抖节流
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
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
      currentType: "pop", //默认请求的类型
      isShowBackTop: false,
      controlTop: 0,
      isTabShow: false,
      saveY: null
    };
  },
  computed: {
    showGoods() {
      //计算属性
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    //进入时
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //离开时
    this.saveY = this.$refs.scroll.getScrollY()
    console.log(this.saveY);
    
  },
  created() {
    //当组件被创建时调用，调用methods里的方法
    //请求首页数据
    this.getHomeMultidata();
    //请求商品列表数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    //设置一下初始化路径，不知道有没有更好的办法，想到了再改
    if (this.$route.path != "/home") {
      this.$router.push("/home");
    }
    // 向事件总线中接收图片加载完成的事件, 并调用scroll中refresh方法，刷新网页
    // 错误：不能在created中使用$refs，会找不到对象，例如在
    // created中使用document.getSelection()去获取类名 是获取不到的，所以会显示找不到的错误
    // this.$bus.$on('itemImgLoad', () => {
    //   this.$refs.scroll.refresh()
    //   console.log("___");
    // })
  },
  mounted() {
    //向事件总线中接收图片加载完成的事件, 并调用scroll中refresh方法，刷新网页
    const refresh = this.debounce(this.$refs.scroll.refresh, 120);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
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
      });
    },
    //封装请求方法（获取商品列表数据）
    getHomeGoods(type) {
      const page = this.goods[type].page;
      getHomeGoods(type, page + 1).then(res => {
        this.goods[type].list.push(...res.data.list); //数组赋值...
        this.goods[type].page += 1;
      });
    },
    /**
     * 事件监听相关的方法
     */
    //子组件（tabControl)传入的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControl1.currentIndex = index
    },
    //回到顶部  ref是获取子组件本身对象
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 777);
    },
    //监听滚动位置（子组件的事件）
    contentScroll(position) {
      //判断backtop是否显示
      this.isShowBackTop = -position.y > 750;
      //判断是否显示tabcontrol
      this.isTabShow = -position.y > this.controlTop;
    },
    //上拉加载更多（子组件的事件）
    loadMore() {
      this.getHomeGoods(this.currentType);
      console.log("加载了" + this.currentType + "类目的数据");
      this.$refs.scroll.finishPullUp();
    },
    //防抖节流方法  也可以在这里不写 上面调用的时候不加this
    debounce,
    //轮播图的加载成功
    swiperImgLoad() {
      //获取组件tabControl组件的对顶的高度
      //每个组件都有一个属性叫$el，它对应了组件里的元素
      this.controlTop = this.$refs.tabControl.$el.offsetTop;
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
.content {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  height: calc(100% - 93px);
  overflow: hidden;
}
.tab-con-show {
  position: relative;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>