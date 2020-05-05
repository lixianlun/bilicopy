<template>
  <div class="space-between b-warp promt">
    <div class="promoteleft">
      <span class="pro_iconf"></span>
      <a class="promo_name">推广</a>
      <a href="" class="promo_name_side"></a>
      <ul class="proul extension">
          <li class="proli video-card-common" v-for="item in promotelist.slice(0,4)" :key="item.index">
            <a class="pro_a" :href="item.url" target='_blank'>
              <img class="bnimg" :src="item.pic" alt="">
              <p class="pro_p">{{item.name}}</p>
            </a>
            <p class="p_a" @click="open(item.archive.owner.mid)"><span class="icon-up">up</span>{{item.archive.owner.name}}</p>
          </li>
      </ul>
    </div>
    <div class="promoteright gg-window">
      <a class="onlinelist gg-window" href="https://www.bilibili.com/video/online.html?spm_id_from=333.851.b_7265706f7274466972737432.16" target="_black">在线列表</a>
      <a :href="promoteAd.url" target="_blank">
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
   methods:{
     open(url){
       window.open('https://space.bilibili.com/'+url)
     }
   },
   mounted(){
     this.$store.dispatch('promote')
   }
 }
</script>

<style lang="stylus">
  .promt
    margin 0 auto
    margin-bottom 50px
  .promoteright
    .onlinelist
      display inline-block
      text-align center
      padding 8px 0
      background #f4f4f4
      border 1px solid #E7E7E7
      cursor pointer
      font-size 14px
      &:hover
        color #1890FF
    img
      width 100%
      margin-top 17px
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
    color #7E8C8D
    &:hover
      color #1890ff
  .proul
    margin-top 15px
    display flex
    justify-content space-between
    .proli
      font-size 12px
      .pro_a
        cursor pointer
        &:hover
          .pro_p
            color #1890ff
      .pro_p
        height 40px
        margin 10px 0 8px
        line-height 20px
        font-size 14px
        font-weight 500
        overflow hidden
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 2
        transition color .3s ease
      .p_a
        display flex
        align-items center
        line-height 16px
        color #999
        font-size 12px
        cursor pointer
        transition color .3s ease
        &:hover
          color #00A1D6
          .icon-up
            border 1px solid #00A1D6
</style>
