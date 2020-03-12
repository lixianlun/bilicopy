<template>
  <div class="Topcontainer" >
      <ul class="topnav">
        <li class="headli" v-for="head in headli" :key="head.index"><a class="fs" href="">{{head.text}}</a></li>
      </ul>
      <!-- <login></login> -->
      <!-- <search></search> -->
      <div class="backimg" :style="{backgroundImage: 'url('+ headdata.pic +')'}">
        <div class="bg_linear">
        </div>
        
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
  .backimg
    position relative
    z-index -1
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
  height 36px
  display flex
  align-items:center
  position absolute
  z-index 0
  .fs
    color white
    text-shadow 0 1px 1px rgba(0,0,0,.3)
    font-size 14px
    line-height 30px
.headli
  line-height 30px
  margin-right 14px
  box-sizing border-box
.headli:first-child
  a:before
    content ""
    width 18px
    height 18px
    display inline-block
    vertical-align middle
    background url(../../assets/icons.png) no-repeat
    background-position -854px -86px
</style>
