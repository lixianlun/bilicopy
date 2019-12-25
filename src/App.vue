<template>
  <div id="app">
    <Topcontainer></Topcontainer>
    <navul></navul>
  </div>
</template>

<script>
  import Topcontainer from './components/common/Topcontainer.vue'
  import navul from "./components/common/nav_ul.vue"
  export default {
    name: 'App',
    components: {
      Topcontainer,
      navul
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
