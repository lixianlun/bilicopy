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
          <li  class="proli" v-for="item in promotelist">
            <img :src="item.pic" alt="">
            <p>{{item.name}}</p>
            <a href="">{{item.archive.owner.name}}</a>
          </li>

      </ul>
    </div>
    <div class="promoteright">
      <p class="onlinelist">在线列表</p>
      <a href="">
        <img :src="promoteAd[0].pic" alt="">
      </a>
    </div>
  </div>
</template>

<script>
 import {mapGetters} from 'vuex'
 export default{
   computed:{
     ...mapGetters([
       'promotelist',
       'promoteAd'
     ])
   },
   mounted(){
     this.$store.dispatch('promote')
   }
 }
</script>

<style lang="stylus">
  .promoteleft
    width 854px
  .promoteright
    width 320px
    .onlinelist
      width 320px
      text-align center
      padding 10px 0
      background #f4f4f4
      border 1px solid #E7E7E7
      cursor pointer
      &:hover
        color #1890FF
    img
      width 100%
      margin-top 10px
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
    .proli:nth-last-child(1)
      display none
    .proli
      width 206px
      float left
      &:hover
        color #1890ff
      p
        margin-top 8px
        line-height 20px
        font-size 14px
      img
        width 206px
        height 116px
      a
        display inline-block
        margin-top 7px
        color #999
        font-size 12px
</style>
