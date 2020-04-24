<template>
  <div>
    <div class="douga">
      <ding :item='douga' :dings="'douga'"></ding>
    </div>
    <div class="guochuang">
      <ding :item='guochuang' :dings="'guochuang'"></ding>
    </div>
  </div>
</template>

<script>
  import ding from './ding.vue'
  import {mapGetters} from 'vuex'
  export default{
    data(){
      return{
      }
    },
    components:{
      ding
    },
    computed:{
      ...mapGetters([
        'douga',
        'guochuang'
      ])
    },
    mounted(){
      this.$store.dispatch('dingdata')
    }
  }
</script>

<style lang="stylus">
</style>
