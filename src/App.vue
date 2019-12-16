<template>
  <div id="app">
    <Topcontainer></Topcontainer>
  </div>
</template>

<script>
  import Topcontainer from './components/common/Topcontainer.vue'
  export default {
    name: 'App',
    components: {
      Topcontainer
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
