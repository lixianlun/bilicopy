<template>
  <div class="searchbox">
    <div class="search_size">
      <form action="" class="nav_search">
        <input type="text" placeholder="真当自己是大小姐!" class="In_search nav_search">
        <div class="butback">
          <button type="button" class="search_button"></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus">
  .searchbox
    width 480px
    margin 0 10px
  .search_size
    position relative
  .nav_search
    height 34px
    display block
    box-sizing border-box
  .In_search
    width 100%
    outline none
    border-radius 3px
    padding 0 42px 0 16px
  input::-webkit-input-placeholder
    color #B3B3B3
    font-size 13px
  .butback
    width 42px
    height 34px
    background-color #e7e7e7
    position absolute
    top 0
    right 0
    border-radius 3px
  .search_button
    width 42px
    height 34px
    position absolute
    outline none
    border none
    cursor pointer
    background url(../../assets/icons.png) no-repeat
    background-position -779px -720px
    &:hover
      background-position -651px -720px
</style>
