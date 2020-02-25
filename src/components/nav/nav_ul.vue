<template>
  <div class="boxnav">
    <ul class="icon_nav">
      <li>
        <div class="icon_home state"></div>
        主页
      </li>
      <li>
        <div class="icon_home ranking"></div>
        动态
      </li>
      <li>
        <div class="icon_home home"></div>
        排行榜
      </li>
    </ul>
    <navli v-for="(i,index) in classify" :item="i" :key="i.index" ></navli>
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
            title1:"动画",
            title2:"番剧"
          },
          {
            title1:"音乐",
            title2:"国创"
          },{
            title1:"舞蹈",
            title2:"游戏"
          },{
            title1:"科技",
            title2:"数码"
          },{
            title1:"生活",
            title2:"鬼畜"
          },{
            title1:"时尚",
            title2:"广告"
          },{
            title1:"娱乐",
            title2:"影视"
          },{
            title1:"放映厅",
            title2:"更多>"
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
    display flex
    .icon_nav
      border-right 1px solid #e7e7e7
      margin-right 5px
      padding-right 10px
      li
        width 50px
        float left
        text-align center
        margin-right 5px
      .icon_home
        width 36px
        height 36px
        margin 0 auto 5px
        border-radius 36px
        &.home
          background #1890FF
        &.state
          background #FB7299
        &.ranking
          background goldenrod
</style>
