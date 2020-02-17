<template>
  <div>
    <div>
      <div class="box_overflow">
        <ul class="box_ul" ref="banner">
          <bannerli v-for="(item,index) in bannerdata" :banner='item' :key='index'></bannerli>
        </ul>
      </div>
      <!-- {{bannerdata[0].pic}} -->
    </div>
  </div>
</template>

<script>
  import bannerli from"./banner_li"
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return{
        count:0
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
      moveimg(){
        setInterval(()=>{
          this.count++
          if(this.count===5){
            this.count=0
          }
          let left=-100*this.count+'%'
          this.$refs.banner.style.marginLeft=left;
        },3000)
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
    position absolute
    .box_ul
      width 500%
      position relative
      transition .8s
</style>
