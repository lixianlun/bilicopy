<template>
  <div>
    <ul class="box_material">
      <li><i class="b_icon b_icon_vp"></i>视频投稿</li>
      <li><i class="b_icon b_icon_vm"></i>投稿管理</li>
      <li><i class="b_icon b_icon_vc"></i>创作中心</li>
    </ul>
    <i class="triangle"></i>
  </div>
</template>

<script>
</script>

<style lang="stylus">
  .box_material
    position absolute
    z-index 1
    right 10px
    top 55px
    background white
    border-radius 5px
    li
      float left
      padding 15px 25px
      border-radius 5px
      cursor pointer
      background white
      font-size 14px
      .b_icon
        width 20px
        height 20px
        margin 0 auto 10px
        display block
        background url(../../assets/icons.png) no-repeat
        &.b_icon_vp
          background-position -471px -919px
        &.b_icon_vm
          background-position -471px -982px
        &.b_icon_vc
          background-position -471px -1750px
  .triangle
    position absolute
    right 73px
    top 48px
    border-left: 10px solid transparent
    border-right: 10px solid transparent
    border-bottom 10px solid white
</style>
