<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
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

