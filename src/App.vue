<template>
  <div id="app">
    <biliheader></biliheader>
    <navul></navul>
    <banner></banner>
    <promote></promote>
    <live></live>
    <bilicontent></bilicontent>
  </div>
</template>

<script>
  import biliheader from './components/header/biliheader.vue'
  import navul from "./components/nav/nav.vue"
  import banner from "./components/banner/banner.vue"
  import promote from "./components/promote/promote.vue"
  import live from "./components/live/livaad.vue"
  import bilicontent from "./components/content/bilicontent.vue"
  export default {
    name: 'App',
    components: {
      biliheader,
      navul,
      banner,
      promote,
      live,
      bilicontent
    },
    methods:{
      wimh(){
        setInterval(function(){
          console.log(document.documentElement.scrollTop)
          console.log()
        },1500)
      }
    },
    mounted(){
      // this.wimh()
    }
  }
</script>

<style lang="stylus">
  *
    margin 0
    padding 0
  body
    position relative
    background white
    z-index 0
  li
    list-style none
  a
    color #222
    text-decoration none
  .space-between
    display flex
    justify-content space-between
    margin-bottom 40px
  .color
    color #1890FF
  .bnimg
    width 100%
    height 100%
    border-radius 3px
  @media screen and (max-width 1438px)
    .banrwh
      width 530px
      height 202px
    .bannerwh
      width 459px
      height 202px
    .b-warp
      width 999px
    .video-card-common
      width 170px
      height 96px
    .extension
      width 710px
    .up_w
      width 128px
    .gg-window
      width 265px
    .l-txt
      width 102px
  @media screen and (min-width 1438px)
    .bannerwh
      width 550px
      height 242px
    .banrwh
      width 638px
    .b-warp
      width 1198px
    .video-card-common
      width 206px
      height 116px
    .extension
      width 854px
    .up_w
      width 158px
    .gg-window
      width 320px
    .l-txt
      width 158px
</style>
