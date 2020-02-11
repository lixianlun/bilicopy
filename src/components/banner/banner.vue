<template>
  <div>
    <div>
      <div class="box_overflow">
        <ul class="box_ul" ref="banner">
          <bannerli></bannerli>
        </ul>
      </div>
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
      ...mapGetters({
      })
    },
    mounted() {
      this.moveimg()
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
