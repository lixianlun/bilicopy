<template>
  <div class="loginbox">
    <div class="login_register">
      <div class="login">
        <span class="akari"></span>
        <a href="">登录</a>
      </div>
      <a href="" class="register">注册</a>
    </div>
    <div class="contribute" @mouseover="icon=true" @mouseout="icon=false">
      投稿
      <div v-show="icon">
        <ul class="box_material">
          <li><i class="b_icon b_icon_vp"></i>视频投稿</li>
          <li><i class="b_icon b_icon_vm"></i>投稿管理</li>
          <li><i class="b_icon b_icon_vc"></i>创作中心</li>
        </ul>
        <i class="triangle"></i>
      </div>
    </div>

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
    },
    methods:{
    }
  }
</script>

<style lang="stylus">
  .loginbox
    height 32px
    float right
    line-height 32px
    margin 0 10px 0 0
    .login_register
      display inline-block
      margin 8px 13px 0 0
      cursor pointer
      .login
        display inline-block
        margin-top 3px
      a
        margin-left 11px
        padding 5px 0
        color white
      .akari
        width 32px
        height 32px
        background url(../../assets/akari.jpg) no-repeat
        background-size 100% 100%
        border-radius 50px
        float left
  .contribute
    float right
    padding 4px 33px
    margin-top 8px
    display inline-block
    color white
    font-size 14px
    cursor pointer
    border-radius 3px
    background #fb7299
  .box_material
    position absolute
    z-index 1
    right 10px
    top 48.5px
    background white
    border-radius 3px
    li
      float left
      padding 7px 17px
      cursor pointer
      border-radius 3px
      background transparent
      font-size 14px
      color black
      &:hover
        border-radius 3px
        background #E7E7E7
      .b_icon
        width 20px
        height 20px
        margin 10px auto 5px
        display block
        background url(../../assets/icons.png) no-repeat
        &.b_icon_vp
          background-position -471px -919px
        &.b_icon_vm
          background-position -471px -982px
        &.b_icon_vc
          background-position -471px -1748px
</style>
