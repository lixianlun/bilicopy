<template>
  <div id="app">
    <biliheader></biliheader>
    <!-- <navul></navul> -->
    <banner></banner>
    <promote></promote>
  </div>
</template>

<script>
  import biliheader from './components/header/biliheader.vue'
  import navul from "./components/nav/nav.vue"
  import banner from "./components/banner/banner.vue"
  import promote from "./components/promote/promote.vue"
  export default {
    name: 'App',
    components: {
      biliheader,
      navul,
      banner,
      promote
    },
    methods:{
    }
  }
</script>

<style lang="stylus">
  *
    margin 0
    padding 0
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
      margin 0 auto
    .video-card-common
      width 170px
      height 96px
    .extension
      width 710px
    .gg-window
      width 265px
  @media screen and (min-width 1438px)
    .bannerwh
      width 550px
      height 242px
    .banrwh
      width 638px
    .b-warp
      width 1198px
      margin 0 auto
    .video-card-common
      width 206px
      height 116px
    .extension
      width 854px
    .gg-window
      width 320px
</style>
