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
        <div>
          <input type="text" placeholder="我们B站就算倒闭也不会收B友一分钱!" class="In_search">
          <span></span>
        </div>
      </div>
  </div>
</template>

<script>
  export default{
    name:'Topcontainer',
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
    .In_search
      width 22vw
      padding 10px 0 10px 20px
      margin-top 5px
      border 0px solid white
      outline none
      border-radius 3px 0 0 3px
    input::-webkit-input-placeholder
      color #BBBBBB
      font-size 13px
</style>
