<template>
  <div class="loginbox">
    <div class="login_register">
      <a class="akari fontwhite" href="">登录</a>
      <a href="" class="register fontwhite ">注册</a>
    </div>
    <!-- <div class="contribute" @mouseover="icon=true" @mouseout="icon=false">
      <a class="fontwhite" href="">投稿</a>
      <div v-show="icon">
        <ul class="box_material">
          <li v-for="listli in loginli" :key="listli.index"><i class="b_icon b_icon_vp"></i>{{listli.list}}</li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default{
    data(){
      return{
        icon:false,
        loginli:[
          {
            list:"视频投稿"
          },{
            list:"投稿管理"
          },{
            list:"创作中心"
          }
        ]
      }
    },
    methods:{
    },
    components:{
    }
  }
</script>

<style lang="stylus">
.login_register
  display flex
.fontwhite
  margin-right 13px
  line-height 32px
  color white
  font-size 14px
  white-space nowrap
  text-shadow 0 1px 1px rgba(0,0,0,.3)
.loginbox
  display flex
.akari:before
  content ""
  width 32px
  height 32px
  margin-right 5px
  vertical-align middle
  background url(../../assets/akari.jpg) no-repeat
  background-size 100% 100%
  border-radius 50px
  display inline-block

.contribute
  padding 0 33px
  display inline-block
  cursor pointer
  border-radius 3px
  background #fb7299
.box_material
  position absolute
  z-index 1
  right 10px
  top 45px
  background white
  border-radius 3px
  li
    float left
    padding 7px 17px
    cursor pointer
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
