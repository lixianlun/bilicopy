<template>
  <div class="Topcontainer">
      <div class="bg_linear">
        <ul class="topnav">
          <li><a href=""><span class="bili_logo"></span>主站</a></li>
          <li><a href="">番剧</a></li>
          <li><a href="">游戏中心</a></li>
          <li><a href="">直播</a></li>
          <li><a href="">会员购</a></li>
          <li><a href="">漫画</a></li>
          <li><a href="">赛事</a></li>
          <li><a href="">BML</a></li>
        </ul>
        <search></search>
      </div>
  </div>
</template>

<script>
  import search from "./search.vue"
  export default{
    name:'Topcontainer',
    components: {
      search
    },
    data(){
      return {
      }
    }
  }
</script>

<style lang="stylus">
    .Topcontainer
      position relative
      z-index 0
      width 100%
      min-height 160px
      background url(../../assets/7197cae46569a49abd98e0c51348068831be6a85.png) no-repeat
      background-position center
      .bg_linear
        min-height 160px
        background: linear-gradient(rgba(0,0,0,.21),transparent)
    .topnav
      position relative
      z-index 1
      margin-left 35px
      .bili_logo
        width 18px
        height 18px
        float left
        margin-top 2px 5px 0 0
        background url(../../assets/icons.png) no-repeat
        background-position -855px -85px
      li
        float left
        margin-top 15px
        margin-right 14px
      a
        color white
        font-size 14px
</style>
