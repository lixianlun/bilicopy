<template>
  <div class="search_size">
    <input type="text" placeholder="我们B站就算倒闭也不会收B友一分钱!" class="In_search">
    <button type="button" class="search_button"></button>
  </div>
</template>

<script>
</script>

<style lang="stylus">
  .search_size
    position absolute
    right 25%
  .In_search
    width 330px
    padding 8px 38px 8px 20px
    margin-top 8px
    border 0px solid white
    outline none
    border-radius 3px
    position absolute
  input::-webkit-input-placeholder
    color #B3B3B3
    font-size 13px
  .search_button
    width 38px
    height 39px
    border none
    outline none
    cursor pointer
    position relative
    margin 5px 0 0 349px
    background url(../../assets/icons.png) no-repeat
    background-position -653px -718px
</style>
