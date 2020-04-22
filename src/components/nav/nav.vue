<template>
  <div class="boxnav b-warp">
    <ul class="icon_nav">
      <li v-for="(clss,index) in active" :key="index">
        <div class="icon_home" :class="clss.col"></div>
        {{clss.goal}}
      </li>
    </ul>
    <span class="nv_line"></span>
    <ul class="nvbox">
      <li class="nv_for" v-for="(item,index) in classify" :key="index" @mouseover="over(item)" @mouseout="leave(item)">
        <span class="nav_abso" :style="{width:item.width+'px'}" :class="{open:item.active}" @mouseover="over(item)" @mouseout="leave(item)">
          <a v-for="(list,index) in item.content" :href="list.url" target="_blank" :key="index" >{{list.list}}</a>
        </span>
        <a class="nav_a" >{{item.title}}<em class="em">{{count(item.count)}}</em></a>
      </li>
    </ul>
    <span class="nv_line"></span>
    <ul class="navright">
        <li v-for="(sta,index) in sta" :key="index"><span></span>{{sta.goal}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        sta:[{goal:'专栏'},{goal:'直播'},{goal:'活动'},{goal:'专题'},{goal:'小黑屋'},{goal:'音乐Plus'}],
        active:[{col:'state',goal:'主页'},{col:'ranking',goal:'动态'},{col:'home',goal:'排行榜'}],
        classify: [{
            title: "动画",count:981,time:null,active:false,width:160,content:[{list:'MAD·AMV',url:'https://www.bilibili.com/v/douga/mad#/'},{list:'MMD·3D',url:'https://www.bilibili.com/v/douga/mmd/#/'},{list:'短片·手书·配音',url:'https://www.bilibili.com/v/douga/voice/#/'},{list:'特摄',url:'https://www.bilibili.com/v/douga/tokusatsu/#/'},{list:'综合',url:'https://www.bilibili.com/v/douga/other/#/'}]
          },{
            title: "番剧",count:1233,count:1233,time:null,active:false,width:172,content:[{list:'连载动画',url:'https://www.bilibili.com/v/anime/serial/#/'},{list:'完结动画',url:'https://www.bilibili.com/v/anime/finish/#/'},{list:'咨询',url:'https://www.bilibili.com/v/anime/information/#/'},{list:'官方延伸',url:'https://www.bilibili.com/v/anime/offical/#/'},{list:'新番时间表',url:'https://www.bilibili.com/anime/timeline/'},{list:'番剧索引',url:'https://www.bilibili.com/anime/index'}]
          },{
            title: "音乐",count:753,time:null,active:false,width:268,content:[{list:'原创音乐',url:'https://www.bilibili.com/v/music/original/#/'},{list:'翻唱',url:'https://www.bilibili.com/v/music/cover/#/'},{list:'VOCALOID·UTAU',url:'https://www.bilibili.com/v/music/vocaloid/#/'},{list:'电音',url:'https://www.bilibili.com/v/music/electronic/#/'},{list:'演奏',url:'https://www.bilibili.com/v/music/perform/#/'},{list:'MV',url:'https://www.bilibili.com/v/music/mv/#/'},{list:'音乐现场',url:'https://www.bilibili.com/v/music/live/#/'},{list:'音乐综合',url:'https://www.bilibili.com/v/music/other/#/'},{list:'音频',url:'https://www.bilibili.com/audio/home?musicType=music'}]
          },{
            title: "国创",count:456,time:null,active:false,width:214,content:[{list:'国产动画'},{list:'国产原创相关'},{list:'布袋戏'},{list:'官方延伸'},{list:'资讯'},{list:'新番时间表'},{list:'国产动画索引'}]
          }, {
            title: "舞蹈",count:105,time:null,active:false,width:172,content:[{list:'宅舞'},{list:'街舞'},{list:'明星舞蹈'},{list:'中国舞'},{list:'舞蹈综合'},{list:'舞蹈教程'}]
          },{
            title: "游戏",count:1233,time:null,active:false,width:240,content:[{list:'单机游戏'},{list:'电子竞技'},{list:'手机游戏'},{list:'网络游戏'},{list:'桌游棋牌'},{list:'GMV'},{list:'音游'},{list:'Mugen'},{list:'游戏赛事'}]
          },{
            title: "科技",count:764,time:null,active:false,width:172,content:[{list:'趣味科普人文'},{list:'野生技术协会'},{list:'演讲·公开课'},{list:'星海'},{list:'机械'},{list:'汽车'}]
          },{
            title: "数码",count:201,time:null,active:false,width:80,content:[{list:'手机平板'},{list:'电脑装机'},{list:'摄影摄像'},{list:'影音智能'}]
          },{
            title: "生活",count:916,time:null,active:false,width:124,content:[{list:'搞笑'},{list:'日常'},{list:'美食圈'},{list:'动物圈'},{list:'手工'},{list:'绘画'},{list:'运动'},{list:'其他'}]
          },{
            title: "鬼畜",count:425,time:null,active:false,width:118,content:[{list:'鬼畜调教'},{list:'音MAD'},{list:'人力VOCALOID'},{list:'教程演示'}]
          },{
            title: "时尚",count:340,time:null,active:false,width:124,content:[{list:'美妆'},{list:'服饰'},{list:'健身'},{list:'T台'},{list:'风尚标'}]
          },{
            title: "广告",count:9,time:null,active:false
          },{
            title: "娱乐",count:1233,time:null,active:false,width:90,content:[{list:'综艺'},{list:'明星'},{list:'Korea相关'}]
          },{
            title: "影视",count:722,time:null,active:false,width:84,content:[{list:'影视杂谈'},{list:'影视剪辑'},{list:'短片'},{list:'预告·资讯'}]
          },{
            title: "放映厅",count:88,time:null,active:false,width:64,content:[{list:'纪录片'},{list:'电影'},{list:'电视剧'}]
          },{
            title: "更多",count:42,time:null,active:false,width:162,content:[{list:'搞笑'},{list:'动物圈'},{list:'美食圈'},{list:'单机游戏'},{list:'VLOG'}]
          }
        ]
      }
    },
    methods:{
      count(a){
        return a>999?"999+":a
      },
      leave(a){
        clearInterval(a.time)
        a.time=setTimeout(()=>{
          return a.active = false
        },200)
      },
      over(a){
        clearInterval(a.time)
        a.time=setTimeout(()=>{
          return a.active = true
        },150)
      },
    },
    mounted(){
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
  .nvbox
    height 5rem
    height 64px
    display flex
    flex-wrap wrap
    flex 1
    flex-direction column
  .nv_for
    line-height 17px
    font-size 14px
    padding 7px 3px
    white-space nowrap
    position relative
    &:hover
      .nav_a
        color #1890FF
    &:nth-last-child(1)
      &:hover
        &:after
          border-bottom 1px solid #1890FF
          border-right 1px solid #1890FF
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
        transition border-bottom .6s,border-right .6s
      em
        display none
    a
      display inline-block
      transition color .3s
    &:nth-of-type(odd)
      .nav_abso.bottom
      .nav_abso.open
        top 40px
        left 25px
      .nav_abso
        box-shadow 0px 2px 7px 0 rgba(0,0,0,.1)
        top 30px
        left 25px
        &:after
          content ''
          width 8px
          height 8px
          background white
          top -3.5px
          left 2px
          transform rotate(-45deg)
          position absolute
          z-index 1001
    &:nth-of-type(even)
      .nav_abso.open
        top 40px
      .nav_abso
        box-shadow 0px -2px 7px 0 rgba(0,0,0,.1)
        top 30px
        &:after
          content ''
          width 8px
          height 8px
          background white
          top -3.5px
          left 1px
          transform rotate(-45deg)
          position absolute
          z-index 1001
    .nav_abso.open
      opacity 1
      z-index 1000
    .nav_abso
      max-height 148px
      position absolute
      opacity 0
      z-index -1000
      background white
      border-radius 5px
      display flex
      flex-wrap wrap
      flex-direction column
      transition top .3s ease,bottom .3s ease,opacity .3s ease,z-index .3s ease
      a
        display block
        font-size 12px
        padding 10px 13px
        transition color .3s
        &:hover
          color #1890FF
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
  .nv_line
    display inline-block
    border-left 1px solid #e7e7e7
    height 46px
    margin 1px 15px 0
  .navright
    width 210px
    height 64px
    display flex
    flex-wrap wrap
    flex-direction column
    li
      line-height 17px
      font-size 14px
      cursor pointer
      padding 7px 0px
      white-space nowrap
      span
        width 18px
        height 18px
        margin-right 3px
        border-radius 5px
        background #1890FF
        float left
        display inline-block
</style>
