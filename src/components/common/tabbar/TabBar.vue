<template>
 <div id="tabbar">
   <slot></slot>
 </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
#tabbar{
  display: flex;
  height: auto;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #f6f6f6;
  box-shadow: 1px -1px 1px rgba(100, 100, 100, .1);
}
</style>
