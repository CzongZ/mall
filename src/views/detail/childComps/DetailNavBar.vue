<template>
  <div>
    <nav-bar>
      <template #left>
        <div @click="backClick">
          <img src="@/assets/img/common/comeBack.png" alt="" class="come-back">
        </div>
      </template>
      <template #center>
        <div class="title">
          <div v-for="(item, index) in titles" 
          :key="index" 
          class="title-item"
          :class="{active : currentIndex === index}"
          @click="titleClick(index)">
          {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.come-back {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
</style>