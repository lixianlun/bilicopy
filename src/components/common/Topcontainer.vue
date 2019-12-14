<template>
  <div class="Topcontainer">
    <div class="Header_content">
      <div class="Header_content_bg">
        <div class="bg_color"></div>
      </div>
      <div class="Header_content_nav">
        <ul>
          <li><a href="">主站</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'',
    data(){
      return {
      }
    }
  }
</script>

<style lang="stylus">
  *
    list-style none
  a
    color #222
    text-decoration none
  .Topcontainer
    .Header_content_bg
      width 100vw
      min-width 1033px
      position absolute
      background-position center 0!important
      background-image url(../../assets/7197cae46569a49abd98e0c51348068831be6a85.png)
      .bg_color
        width 100vw
        height 160px
        opacity 0.3
        background: linear-gradient(to bottom, #000000 0%,#ffffff 70%)
    .Header_content_nav
      width 100%
      position relative
      float left
      ul
        margin 0 0 0 10px
        background black
        li
          float left
          padding 15px 0
          margin 0 0 0 20px
          a
            color white
            font-size 14px
</style>
