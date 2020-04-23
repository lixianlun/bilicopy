<template>
  <ul class="banr banrwh">
    <li class="prodli video-card-common" v-for="(item,index) in onedata.slice(0,6)" :key="index">
       <a :href="'https://www.bilibili.com/video/av'+item.aid" target="_blank">
         <img class="bnimg" :src="item.pic" alt="">
         <div class="backbetween video-card-common">
           <p class="br_cover">{{item.title}}</p>
           <p class="br_p br_m" href="">{{item.owner.name}}</p>
           <p class="br_p br_b">{{trannum(item.stat.view)}} 播放量</p>
         </div>
         <p class="bew_corver"></p>
       </a>
    </li>
  </ul>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return{
        count:0,
        stop:false
      }
    },
    computed: {
      ...mapGetters([
        'onedata'
      ])
    },
    mounted() {
      this.$store.dispatch('onedata')
    },
    methods:{
      trannum(nu){
        return nu>9999?(nu/10000).toFixed(1)+'万':nu
      },
    }
  }
</script>

<style lang="stylus">
  .banr
    display flex
    flex-wrap wrap
    justify-content space-between
    align-content space-between
  .prodli
    position relative
    z-index 0
    cursor pointer
    overflow hidden
    &:hover
      .backbetween
        background rgba(0,0,0,.6)
        top 0
        .br_cover
          background transparent
          -webkit-line-clamp 2
          line-height 13pt
    .bew_corver
      width 100%
      height 35px
      position absolute
      bottom 0
      background linear-gradient(transparent,rgba(0,0,0,.6))
      border-radius 0 0 3px 3px
    .backbetween
      background rgba(0,0,0,0)
      position absolute
      top 61px
      z-index 1
      color azure
      transition top .2s,background .3s
      border-radius 3px
      .br_cover
        line-height 16pt
        font-size 14px
        padding 3px 12px 3px 8px
        margin-top 8px
        overflow hidden
        -webkit-box-orient vertical
        display -webkit-box
        -webkit-line-clamp 1
      .br_p
        position absolute
        font-size 9px
        padding 3px 12px 4px 8px
      .br_b
        bottom 8px
      .br_m
        bottom 25px
</style>
