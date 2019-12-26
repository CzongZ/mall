<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item.index" class="tab-control-item"
      :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return ["分类1", "分类2", "分类3"];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  }
};
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    background-color: #ffffff;
  }
  .tab-control-item {
    flex: 1;
  }
  .active span{
    color: var(--color-high-text);
    padding: 5px;
    border-bottom: solid 2px var(--color-tint);
  }
</style>