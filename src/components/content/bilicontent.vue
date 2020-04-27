<template>
  <div>
    <div class="douga">
      <ding :item='douga' :dings="dings.douga" :rank='rank.douga'></ding>
    </div>
    <div class="guochuang">
      <ding :item='guochuang' :dings="dings.guochuang" :rank='rank.guochuang'></ding>
    </div>
  </div>
</template>

<script>
  import ding from './ding.vue'
  import {mapGetters} from 'vuex'
  export default{
    data(){
      return{
        dings:{
          douga:{name:'动画',url:'https://www.bilibili.com/v/douga',title:'douga',rankurl:'https://www.bilibili.com/ranking/all/1/0/3'},
          guochuang:{name:'国产原创相关',url:'https://www.bilibili.com/guochuang/',title:'guochuang',rankurl:'https://www.bilibili.com/ranking/all/168/0/3'}
        }
      }
    },
    components:{
      ding
    },
    computed:{
      ...mapGetters([
        'douga',
        'guochuang',
        'rank'
      ])
    },
    mounted(){
      this.$store.dispatch('dingdata')
      this.$store.dispatch('rankdata')
    }
  }
</script>

<style lang="stylus">
</style>
