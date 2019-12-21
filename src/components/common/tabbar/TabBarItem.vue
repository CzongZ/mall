<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-on"></slot></div>
    <div :style="activeColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      // isActive: false
    }
  },
  props: {
    path: String,
    activecolor: {
      type: String,
      default: '#d81e06'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeColor() {
      return this.isActive? {color: this.activecolor} : {}
    }
  },
  methods: {
    itemClick(){
      if(this.$route.path != this.path){
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style>
.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar-item img{
  height: 45%;
  width: 25%;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
.tabbar-item span{
  font-size: 12px;
  display: block;
  font-family: '微软雅黑';
}
</style>