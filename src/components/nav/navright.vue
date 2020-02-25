<template>
  <div class="navright">
    <ul class="nav_right">
      <li><span></span>专栏</li>
      <li><span class="red"></span>直播</li>
    </ul>
    <ul class="nav_right">
      <li><span class="ikj"></span>活动</li>
      <li><span></span>专题</li>
    </ul>
    <ul class="nav_right">
      <li><span></span>小黑屋</li>
      <li><span class="sse"></span>音乐plus</li>
    </ul>
  </div>
</template>

<script>
</script>

<style lang="stylus">
  .navright
    border-left 1px solid #e7e7e7
    margin auto 10px
    padding-left 10px
  .nav_right
    margin-left 5px
    float left
    li
      cursor pointer
      margin 6px 0 3px 0
      padding 4px 5px
      span
        width 18px
        height 18px
        border-radius 5px
        background #1890FF
        float left
        display inline-block
        &.red
          background #FB7299
        &.sse
          background #42B983
        &.ikj
          background yellowgreen
</style>
