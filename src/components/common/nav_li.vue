<template>
  <li class="nav_li">
    {{item.title}}
    <span>{{item.num}}</span>
  </li>
</template>

<script>
  export default{
    props:{
      item:{
        type:Object
      }
    }
  }
</script>

<style lang="stylus">
  .nav_li
    float:left
    margin 8px 0 8px 25px
    cursor pointer
    span
      font-size 5px
      border-radius 2px
      text-align center
      padding 0 5px
      background #73c9e5
      color white
</style>
