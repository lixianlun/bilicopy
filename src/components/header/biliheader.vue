<template>
  <div class="Topcontainer" style="background-image:url(//i0.hdslb.com/bfs/archive/7197cae46569a49abd98e0c51348068831be6a85.png);">
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
          <login></login>
          <!-- <search></search> -->
        </ul>
      </div>
  </div>

</template>

<script>
  import search from "./search.vue"
  import login from "./login.vue"

  export default{
    name:'Topcontainer',
    components: {
      search,
      login
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
      width 100%
      height 9.375vw
      min-height 160px
      background-repeat no-repeat
      background-size cover
      background-position center 0
      .bg_linear
        min-height 160px
        background: linear-gradient(rgba(0,0,0,.2.8),transparent)
    .topnav
      width 100%
      .bili_logo
        width 18px
        height 18px
        margin 0 2px 0 35px
        float left
        background url(../../assets/icons.png) no-repeat
        background-position -854px -86px
      li
        float left
        margin-top 16px
        margin-right 14px
      a
        color white
        font-size 14px
</style>
