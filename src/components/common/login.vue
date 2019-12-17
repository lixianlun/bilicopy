<template>
  <ul class="box">
    <span class="akari"></span>
    <li><a href="">登录</a></li>
    <li><a href="">注册</a></li>
    <div class="contribute">投稿</div>
  </ul>
</template>

<script>
</script>

<style lang="stylus">
  .box
    position relative
    z-index 1
    float right
    li
      float left
      margin-top 18px
      margin-right 14px
      a
        color white
        font-size 14px
  .akari
    width 32px
    height 32px
    background url(../../assets/akari.jpg) no-repeat
    background-size 100% 100%
    border-radius 50px
    float left
    margin-top 9px
    margin-right 5px
    display inline-block
  .contribute
    float right
    padding 12px 35px
    margin-top 8px
    margin-right 17px
    color white
    font-size 14px
    cursor pointer
    border-radius 3px
    background #fb7299
</style>
