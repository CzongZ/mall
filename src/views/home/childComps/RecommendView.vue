<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
}
.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: solid 8px #eeeeee;
}
.recommend-item img {
  width: 85%;
  margin: 7px 5px;
}
</style>