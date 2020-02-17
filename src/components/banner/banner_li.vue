<template>
  <li class="bannerli" v-if="banner">
      <img :src="banner.pic">
  </li>
</template>

<script>
  export default{
    props:{
      banner:Object
    }
  }
</script>

<style lang='stylus'>
  .bannerli
    float left
    width 500px
    height 242px
    img
      width 100%
      height 100%
</style>
