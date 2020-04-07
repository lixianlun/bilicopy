<template>
  <div class="boxnav b-warp">
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
    <span class="nv_line"></span>
    <ul class="nvbox">
      <li class="nv_for" v-for="(item,index) in classify" :key='index'>
        <a href="">{{item.title}}<em class="em">{{num}}+</em></a>
      </li>
    </ul>
    <span class="nv_line"></span>
    <navright></navright>
  </div>
</template>

<script>
  import navright from "./navright.vue"
  export default {
    components: {
      navright
    },
    data() {
      return {
        num:"999+",
        classify: [{
            title: "动画",
          },{
            title: "番剧"
          },{
            title: "音乐",
          },{
            title: "国创"
          }, {
            title: "舞蹈",
          },{
            title: "游戏"
          },{
            title: "科技",
          },{
            title: "娱乐",
          },{
            title: "生活",
          },{
            title: "鬼畜"
          },{
            title: "时尚",
          },{
            title: "广告",
          },{
            title: "数码",
          },{
            title: "影视"
          },{
            title: "放映厅",
          },{
            title: "更多"
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .boxnav
    margin 20px auto
    display flex
    justify-content center
    align-items center
    .icon_nav
      font-size 14px
      display flex
      height 64px
      li
        width 45px
        float left
        text-align center
        cursor pointer
        white-space nowrap
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
  .nv_for
    line-height 17px
    font-size 14px
    color #212121
    cursor pointer
    padding 7px 3px
    white-space nowrap
    .em
      width 32px
      font-style normal
      white-space nowrap
      display inline-block
      border-radius 2px
      text-align center
      font-size 12px
      transform scale(.85)
      background #73c9e5
      color white
    &:nth-last-child(1)
      &:after
        content ""
        width 7px
        height 7px
        border-bottom 1px solid #222
        border-right 1px solid #222
        display inline-block
        margin-bottom 3px
        margin-left 4px
        transform rotate(45deg)
      em
        display none
  .nvbox
    height 5rem
    height 64px
    display flex
    flex-wrap wrap
    flex 1
    flex-direction column
  .nv_line
    display inline-block
    border-left 1px solid #e7e7e7
    height 46px
    margin 1px 15px 0
</style>
