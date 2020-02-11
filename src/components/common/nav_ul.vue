<template>
  <div class="boxnav">
    <ul class="hi_ul">
      <navli v-for="(i,index) in classify" :item="i" :key="index" ></navli>
      <navli v-for="(i,index) in classifd" :item="i" :key="index" ></navli>
    </ul>
    <div class="movie">
    </div>
  </div>
</template>

<script>
  import navli from "./nav_li.vue"
  export default {
    components: {
      navli
    },
    data() {
      return {
        classify: [
          {
            title: "动画",
            num: 456
          },{
            title:"音乐",
            num:793
          },{
            title:"舞蹈",
            num:793
          },{
            title:"科技",
            num:793
          },{
            title:"生活",
            num:793
          },{
            title:"时尚",
            num:793
          },{
            title:"娱乐",
            num:793
          },{
            title:"放映厅",
            num:793
          }
        ],
        classifd:[
          {
            title:"番剧",
            num:793
          },{
            title:"国创",
            num:793
          },{
            title:"游戏",
            num:793
          },{
            title:"游戏",
            num:793
          },{
            title:"游戏",
            num:793
          },{
            title:"游戏",
            num:793
          },{
            title:"游戏",
            num:793
          },{
            title:"更多",
            num:793
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .boxnav
    height 64px
    margin-top 20px
    text-align center
  .hi_ul
    width 805px
    overflow hidden
    display inline-block
    margin-right 40px
    border-right 1px solid #e7e7e7
  .movie
    height 64px
    display inline-block
    margin 15px 0
    vertical-align middle
</style>
