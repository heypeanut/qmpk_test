<template>
  <div class="bottom-bar">
    <router-link tag="div" class="item" to="/list">
      <i class="iconfont">&#xe60a;</i>
      <span>视频</span>
    </router-link>
    <router-link tag="div" class="item" to="/rank">
      <i class="iconfont">&#xe6c5;</i>
      <span>排行</span>
    </router-link>
    <router-link tag="div" class="item" to="/analysis">
      <i class="iconfont">&#xe73c;</i>
      <span>分析</span>
    </router-link >
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>
.bottom-bar {
  width: 100%;
  position:fixed;
  bottom: 0px;
  display: flex; 
  justify-content: space-around;
  padding: 5px 0;
  background: #fff;
  box-shadow:0 -1px -2px #e8e8e8;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    span {
      margin-top: 5px;
    }
    &.router-link-active{
      color:#b02015;
    }
  }
}
</style>
