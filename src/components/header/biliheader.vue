<template>
  <div class="Topcontainer" >
    <div class="topnav">
      <div class="topre">
        <ul class="headul">
          <li class="headli" v-for="head in headli" :key="head.index"><a class="fs" href="">{{head.text}}</a></li>
        </ul>
        <search></search>
        <div class="loginbox">
          <div class="login_register">
            <a class="akari fontwhite" href="">登录</a>
            <a href="" class="register fontwhite ">注册</a>
          </div>
          <div class="contribute fontwhite" @mouseover="isActive=true" @mouseout="leave()">
            投稿
          </div>
        </div>
      </div>
    </div>
    <ul class="box_material" :class="{open:isActive}" @mouseover="over()" @mouseout="leave()" >
      <li v-for="listli in loginli" :key="listli.index"><i class="b_icon b_icon_vp" ></i>{{listli.list}}</li>
    </ul>
    <div class="backimg" :style="{backgroundImage: 'url('+ headdata.pic +')'}">
      <div class="bg_linear">
      </div>
    </div>
  </div>

</template>

<script>
  import search from "./search.vue"
  import {mapGetters} from "vuex"
  export default{
    data(){
      return {
        isActive:false,
        timer:null,
        loginli:[
          {
            list:"视频投稿"
          },{
            list:"投稿管理"
          },{
            list:"创作中心"
          }
        ],
        headli:[
          {
            text:'主站'
          },{
            text:'番剧'
          },{
            text:'游戏中心'
          },{
            text:'直播'
          },{
            text:'会员购'
          },{
            text:'漫画'
          },{
            text:'赛事'
          },{
            text:'BML'
          }
        ]
      }
    },
    computed:{
      ...mapGetters([
        'headdata'
      ])
    },
    mounted(){
      this.$store.dispatch('headdata')
    },
    components: {
      search
    },
    methods:{
      ffff(){
        this.isActive=false
      },
      leave(){
        clearInterval(this.timer)
        this.timer=setTimeout(()=>{
          this.isActive=false
        },400)
      },
      over(){
        clearInterval(this.timer)
        this.isActive=true
      }
    }
  }
</script>

<style lang="stylus">
.Topcontainer
  position relative
.backimg
  cursor pointer
  position relative
  z-index 0
  height 9.375vw
  min-height 160px
  min-width 999px
  background-repeat no-repeat
  background-size cover
  background-position center 0
.bg_linear
  min-height 160px
  background: linear-gradient(rgba(0,0,0,.3),transparent)
.topnav
  width 100%
  padding 10px 20px
  box-sizing border-box
  position absolute
  z-index 1
.headul
  display flex
  align-items:center
.topre
  position relative
  display flex
  align-items flex-start
  justify-content space-between
.fs
  color white
  text-shadow 0 1px 1px rgba(0,0,0,.3)
  font-size 14px
  line-height 30px
  white-space nowrap
.headli
  line-height 30px
  margin-right 14px
.headli:first-child
  a:before
    content ""
    width 18px
    height 18px
    margin-right 3px
    display inline-block
    vertical-align middle
    background url(../../assets/icons.png) no-repeat
    background-position -854px -86px
.login_register
  display flex
.fontwhite
  margin-left 13px
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
.box_material.open
  top 55px
  opacity 1
  z-index 1
.box_material
  position absolute
  opacity 0
  right 20px
  z-index 0
  top 45px
  background white
  border-radius 3px
  transition: top .5s ease,opacity .5s ease,z-index .5s ease;
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
