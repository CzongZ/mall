<template>
  <tab-bar>
    <tab-bar-item :path="home">
      <template #item-icon>
        <img src="@/assets/img/tabbar/home.png" title="首页" alt />
      </template>
      <template #item-icon-on>
        <img src="@/assets/img/tabbar/home-on.png" title="首页" alt />
      </template>
      <template #item-text>
        <span slot="item-text">首页</span>
      </template>
    </tab-bar-item>
    <tab-bar-item :path="category">
      <template #item-icon>
        <img src="~assets/img/tabbar/type.png" title="分类" alt />
      </template>
      <template #item-icon-on>
        <img src="~assets/img/tabbar/type-on.png" title="分类" alt />
      </template>
      <template #item-text>
        <span slot="item-text">分类</span>
      </template>
    </tab-bar-item>
    <tab-bar-item :path="cart">
      <template #item-icon>
        <img src="~assets/img/tabbar/cart.png" title="购物车" alt />
      </template>
      <template #item-icon-on>
        <img src="~assets/img/tabbar/cart-on.png" title="购物车" alt />
      </template>
      <template #item-text>
        <span slot="item-text">购物车</span>
      </template>
    </tab-bar-item>
    <tab-bar-item :path="profile">
      <template #item-icon>
        <img src="~assets/img/tabbar/profile.png" title="我的" alt />
      </template>
      <template #item-icon-on>
        <img src="~assets/img/tabbar/profile-on.png" title="我的" alt />
      </template>
      <template #item-text>
        <span slot="item-text">我的</span>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
const Items = [
  "/home",
  "/category",
  "/cart",
  "/profile"
]
const [ home, category, cart, profile ] = Items;
export default {
  name: "MainTabBar",
  data() {
    return {
      home,
      category,
      cart,
      profile
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>