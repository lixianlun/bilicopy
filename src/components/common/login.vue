<template>
  <div class="right">
    <ul class="box">
      <span class="akari"></span>
      <li><a href="">登录</a></li>
      <li><a href="">注册</a></li>
    </ul>
    <div class="contribute" @mouseover="icon=!icon" @mouseout="icon=!icon">
      投稿
      <material v-show="icon"></material>
    </div>

  </div>
</template>

<script>
  import material from "./material.vue"
  export default{
    components:{
      material
    },
    data(){
      return{
        icon:false
      }
    }
  }
</script>

<style lang="stylus">
  .right
    float right
  .box
    float left
    li
      float left
      margin-top 18px
      margin-right 18px
      a
        color white
        font-size 14px
  .akari
    width 32px
    height 32px
    background url(../../assets/akari.jpg) no-repeat
    background-size 100% 100%
    border-radius 50px
    float left
    margin-top 9px
    margin-right 8px
    display inline-block
  .contribute
    float left
    padding 12px 35px
    margin-top 8px
    margin-right 21px
    color white
    font-size 14px
    cursor pointer
    border-radius 3px
    background #fb7299
</style>
