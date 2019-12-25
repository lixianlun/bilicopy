<template>
  <li>
    {{item.title}}
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
  li
    float:left
</style>
