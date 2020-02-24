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
    width 330px
    float right
    margin 8px 0 0 0
    border-radius 3px
    background white
    position relative
    right 15%
  .In_search
    width 230px
    padding 8px 40px 8px 20px
    outline none
    border-radius 3px
  input::-webkit-input-placeholder
    color #B3B3B3
    font-size 13px
  .search_button
    width 34px
    height 38px
    position absolute
    outline none
    border none
    cursor pointer
    background url(../../assets/icons.png) no-repeat
    background-position -655px -720px
</style>
