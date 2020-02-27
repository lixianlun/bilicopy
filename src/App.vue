<template>
  <div id="app">
    <biliheader></biliheader>
    <navul></navul>
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
</style>
