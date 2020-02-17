<template>
  <li class="bannerli" v-if="banner" >
      <img :src="banner.pic">
      <p>
        <a :href="banner.url">&nbsp;&nbsp;&nbsp;&nbsp;{{banner.name}}</a>
      </p>
  </li>
</template>

<script>
  export default{
    props:{
      banner:Object
    }
  }
</script>

<style lang="stylus">
  .bannerli
    float left
    position relative
    p
      width 500px
      line-height 40px
      background linear-gradient(to top,rgba(0,0,0,.6),transparent)
      position absolute
      bottom 0
      a
        color #fff
    img
      width 500px
      height 242px
</style>
