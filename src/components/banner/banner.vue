<template>
  <div class="box_overflow" @mouseover="stopbanner()" @mouseout="moveimg()">
    <ul class="box_ul" ref="banner">
      <bannerli v-for="(item,index) in bannerdata" :banner='item' :key='index'></bannerli>
    </ul>
    <ul class="banner_icon">
      <li :class="{on:count==index}"  v-for="(item,index) in bannerdata" @click="iconclick(index)"></li>
    </ul>
  </div>
</template>

<script>
  import bannerli from"./banner_li"
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return{
        count:0,
        stop:false
      }
    },
    computed: {
      ...mapGetters([
        'bannerdata'
      ])
    },
    mounted() {
      this.moveimg()
      this.$store.dispatch('bannerdata')
    },
    methods:{
      stopbanner(){
        clearInterval(this.outtime)
      },
      iconclick(index){
        this.count=index;
        let left = -100*this.count +"%"
        this.$refs.banner.style.marginLeft=left;

        // clearInterval(this.outtime)
        // this.moveimg()
      },
      moveimg(){
        this.outtime=setInterval(()=>{
          this.count++
          if(this.count===5){
            this.count=0
          }
          let left=-100*this.count+'%'
          this.$refs.banner.style.marginLeft=left;
        },4500)
      }
    },
    components:{
      bannerli
    }
  }
</script>

<style lang="stylus">
  .box_overflow
    width 500px
    height 242px
    overflow hidden
    position relative
    border-radius 3px
    .box_ul
      width 500%
      position absolute
      transition .8s
    .banner_icon
      position absolute
      bottom 9px
      right 15px
      li
        width 18px
        height 18px
        float left
        cursor pointer
        margin-left 5px
        background url(../../assets/icons.png) -855px -790px no-repeat
        &:hover
          background-position -919px -790px
        &.on
          background-position -855px -727px
</style>
