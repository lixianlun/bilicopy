<template>
    <ul class="navul">
      <li>{{item.title1}}<em>{{num}}</em></li>
      <li>{{item.title2}}<em>{{num}}</em></li>
    </ul>
</template>

<script>
  export default{
    data(){
      return{
        num:"999+",
      }
    },
    props:{
      item:{
        type:Object
      }
    }
  }
</script>

<style lang="stylus">
  .navul
    margin auto 0
    li
      cursor pointer
      margin 5px 0 5px 8px
      padding  5px 8px
      em
        font-style normal
        margin-left 5px
        font-size 5px
        border-radius 2px
        text-align center
        padding 0 5px
        background #73c9e5
        color white
</style>
