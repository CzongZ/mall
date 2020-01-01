<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/'
export default {
  name: 'HomeSwiper',
  props:{
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isImgLoad: true
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      if (this.isImgLoad) {
        this.$emit('swiperImgLoad')
        this.isImgLoad = !this.isImgLoad 
      }
    }
  }
}
</script>

<style scoped>

</style>