<template>
  <div class="bannerlist b-warp">
    <div class="box_overflow bannerwh" @mouseover="stopbanner()" @mouseout="moveimg()">
      <ul class="box_ul" ref="banner">
        <li v-for="(item,index) in bannerdata.slice(0,bannerdata.length)" class="bannerli bannerwh" :key='index' >
            <img class="banimg" :src="item.pic">
            <p>
              <a :href="item.url">&nbsp;&nbsp;&nbsp;&nbsp;{{item.name}}</a>
            </p>
        </li>
      </ul>
      <ul class="banner_icon">
        <li :class="{on:count==index}"  v-for="(item,index) in bannerdata.slice(0,bannerdata.length==1?0:bannerdata.length)" @click="iconclick(index)" :key="item.index"></li>
      </ul>
    </div>
    <bannerrightpart></bannerrightpart>
  </div>
</template>

<script>
  // import bannerli from "./banner_li"
  import bannerrightpart from "./banner_rightpart.vue"
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
          if(this.count==this.bannerdata.length){
            this.count=0
          }
          let left=-100*this.count+'%'
          this.$refs.banner.style.marginLeft=left;
        },4500)
      }
    },
    components:{
      bannerrightpart
    }
  }
</script>

<style lang="stylus">
  .bannerlist
    display flex
    margin-top 20px
    justify-content space-between
    margin-bottom 40px
  .box_overflow
    overflow hidden
    position relative
    border-radius 3px
    .box_ul
      width 500%
      position absolute
      transition .6s ease
.bannerli
  float left
  position relative
  cursor pointer
  // box-sizing border-box
  p
    line-height 40px
    background linear-gradient(to top,rgba(0,0,0,.6),transparent)
    position absolute
    bottom 0
    a
      font-size 14px
      color #fff
  .banimg
    width 100%
    height 100%
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
