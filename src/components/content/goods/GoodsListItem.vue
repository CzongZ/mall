<template>
  <div class="goods-item" @click="itemClick">
   <img :src="showImage" alt="" @load="itemImgLoad">
    <div class="goods-info">
      <p>{{goods.title}}</p>
      <span class="price">&yen;{{goods.price}}</span>
      <span class="collect">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goods: {
      type: Object,
      default() {
        return []
      }
    }
  },
  computed: {
    showImage() {
      return this.goods.image || this.goods.show.img
    }
  },
  methods: {
    itemImgLoad() {
      //监听图片加载完成并且向事件总线发送事件
      this.$bus.$emit('itemImgLoad')
    },
    itemClick() {
    this.$router.push('/detail/' + this.goods.iid)
    }
  }
}
</script>
  
<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/home/collect.png') 0 1.5px/14px 12px no-repeat;
  }
</style>