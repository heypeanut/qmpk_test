<template>
  <div id="app">
    <router-view></router-view>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>

import BottomBar from '@/components/BottomBar'
export default {
  name: 'app',
  components: {
    BottomBar
  }
}
</script>

<style lang="scss" scoped>

#app {
 
}

</style>

