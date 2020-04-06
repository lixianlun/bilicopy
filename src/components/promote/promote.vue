<template>
  <div class="space-between b-warp">
    <div  class="promoteleft">
      <div>
        <div>
          <span class="pro_iconf"></span>
          <a class="promo_name">推广</a>
          <a href="" class="promo_name_side"></a>
        </div>
      </div>
      <ul class="proul extension">
          <li  class="proli video-card-common" v-for="item in promotelist.slice(0,4)" :key="item.index">
            <img class="bnimg" :src="item.pic" alt="">
            <p class="pro_p">{{item.name}}</p>
            <a href="">{{item.archive.owner.name}}</a>
          </li>
      </ul>
    </div>
    <div class="promoteright gg-window">
      <p class="onlinelist gg-window">在线列表</p>
      <a href="">
        <img class="" :src="promoteAd.pic" alt="">
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
    // width 854px
  .promoteright
    .onlinelist
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
    &:hover
      color #1890ff
  .proul
    margin-top 15px
    display flex
    justify-content space-between
    .proli
      cursor pointer
      font-size 12px
      transition color .3s
      &:hover
        color #1890ff
      .pro_p
        height 40px
        margin-top 8px
        line-height 20px
        font-size 14px
        font-weight 500
        overflow hidden
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 2
      a
        display inline-block
        margin-top 7px
        color #999
        font-size 12px
</style>
