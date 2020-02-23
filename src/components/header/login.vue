<template>
  <div class="loginbox">
    <ul>

      <li><a href=""><span class="akari"></span>登录</a></li>
      <li><a href="">注册</a></li>
    </ul>
   <!-- <div class="contribute" @mouseover="icon=!icon" @mouseout="icon=!icon">
      投稿
      <div v-if="icon">
        <ul class="box_material">
          <li><i class="b_icon b_icon_vp"></i>视频投稿</li>
          <li><i class="b_icon b_icon_vm"></i>投稿管理</li>
          <li><i class="b_icon b_icon_vc"></i>创作中心</li>
        </ul>
        <i class="triangle"></i>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default{
    components:{
    },
    data(){
      return{
        icon:false
      }
    }
  }
</script>

<style lang="stylus">
  .loginbox
    float right
    ul
      // height 32px
      // float left
      // vertical-align middle
      li
        // margin 8px 5px 14px 10px
        height 32px
        vertical-align middle
        a
          // padding-top 10px
          vertical-align middle
      .akari
        width 32px
        height 32px
        background url(../../assets/akari.jpg) no-repeat
        background-size 100% 100%
        border-radius 50px
        float left
  .contribute
    float left
    padding 12px 35px
    margin-top 8px
    margin-right 21px
    color white
    font-size 14px
    cursor pointer
    border-radius 3px
    background #fb7299
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
      color black
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
