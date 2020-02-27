<template>
  <div class="promote">
    <div  class="promoteleft">
      <div>
        <div>
          <span class="pro_iconf"></span>
          <a class="promo_name">推广</a>
          <a href="" class="promo_name_side">花式吃播·100种养膘指南</a>
        </div>
      </div>
      <ul class="proul">
        <li class="proli">
          <img src="../../assets/d469fc8e9915b15f854cc0904a84ccbc1b6abd2a.jpg" alt="">
          <p>【下一站是幸福】宋茜同款黑色小短裙制作教程</p>
          <a href="">韩小四April</a>
        </li>
        <li class="proli">
          <img src="../../assets/d469fc8e9915b15f854cc0904a84ccbc1b6abd2a.jpg" alt="">
          <p>【下一站是幸福】宋茜同款黑色小短裙制作教程</p>
          <a href="">韩小四April</a>
        </li>
        <li class="proli">
          <img src="../../assets/d469fc8e9915b15f854cc0904a84ccbc1b6abd2a.jpg" alt="">
          <p>【下一站是幸福】宋茜同款黑色小短裙制作教程</p>
          <a href="">韩小四April</a>
        </li>
        <li class="proli">
          <img src="../../assets/d469fc8e9915b15f854cc0904a84ccbc1b6abd2a.jpg" alt="">
          <p>【下一站是幸福】宋茜同款黑色小短裙制作教程</p>
          <a href="">韩小四April</a>
        </li>
      </ul>
    </div>
    <div class="promoteright">
      <a href="">
        <img src="../../assets/5d60b7bc74d21fc6b840f5cdbed15d0f25604352.jpg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus">
  .promoteleft
    width 854px
    // background #7E8C8D
  .promoteright
    width 320px
    img
      width 100%
      border-radius 3px
  .promote
    width 1198px
    display flex
    margin 30px auto 0
    justify-content space-between
  .pro_iconf
    width 40px
    height 34px
    display inline-block
    vertical-align middle
    background url(../../assets/icons.png) no-repeat
    background-position -141px -78px
  .promo_name
    font-size 20px
    margin-left 5px
    cursor default
    vertical-align middle
  .promo_name_side
    margin-left 25px
    font-size 12px
    color #505050
    &:hover
      color #1890ff
  .proul
    margin-top 15px
    display flex
    justify-content space-between
    .proli
      width 206px
      float left
      &:hover
        color #1890ff
      p
        margin-top 10px
        line-height 20px
        font-size 14px
      img
        width 206px
        height 116px
      a
        display inline-block
        margin-top 10px
        color #999
        font-size 12px
</style>
