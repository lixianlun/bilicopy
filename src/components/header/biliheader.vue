<template>
  <div class="Topcontainer" >
      <div class="bg_linear">
        <!-- <ul class="topnav">
          <li><a href=""><span class="bili_logo"></span>主站</a></li>
          <li><a href="">番剧</a></li>
          <li><a href="">游戏中心</a></li>
          <li><a href="">直播</a></li>
          <li><a href="">会员购</a></li>
          <li><a href="">漫画</a></li>
          <li><a href="">赛事</a></li>
          <li><a href="">BML</a></li>
        </ul> -->
        <!-- <login></login> -->
        <!-- <search></search> -->
      </div>
      <div class="backimg" :style="{backgroundImage: 'url('+ headdata.pic +')'}">
      </div>
  </div>

</template>

<script>
  import search from "./search.vue"
  import login from "./login.vue"
  import {mapGetters} from "vuex"
  export default{
    data(){
      return {
      }
    },
    computed:{
      ...mapGetters([
        'headdata'
      ])
    },
    mounted(){
      this.$store.dispatch('headdata')
      this.winwidth()
    },
    components: {
      search,
      login
    },
    methods:{
      winwidth(){
        console.log(window.screen.width)
      }
    }
  }
</script>

<style lang="stylus">
    .Topcontainer
      position relative
      z-index 2
      .backimg
        position relative
        height 9.375vw
        min-height 160px
        min-width 999px
        background-repeat no-repeat
        background-size cover
        background-position center 0
      .bg_linear
        // min-height 160px
        // background: linear-gradient(rgba(0,0,0,.2.8),transparent)
    .topnav
      width 100%
      .bili_logo
        width 18px
        height 18px
        margin 0 2px 0 35px
        float left
        background url(../../assets/icons.png) no-repeat
        background-position -854px -86px
      li
        float left
        margin-top 16px
        margin-right 14px
      a
        color white
        font-size 14px
</style>
