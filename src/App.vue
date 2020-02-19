<template>
  <div id="app">
    <Topcontainer></Topcontainer>
    <navul></navul>
    <banner></banner>
    <promote></promote>
  </div>
</template>

<script>
  import Topcontainer from './components/common/Topcontainer.vue'
  import navul from "./components/common/nav_ul.vue"
  import banner from "./components/banner/banner.vue"
  import promote from "./components/promote/promote.vue"
  export default {
    name: 'App',
    components: {
      Topcontainer,
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
