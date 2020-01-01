<template>
  <div id="app">
    <keep-alive>
    <router-view/>>
    </keep-alive>
    
    <main-tab-bar/>
  </div>
</template>
<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
import '@/assets/css/base.css'
import '@/assets/css/normalize.css'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>
<style scoped>

</style>

