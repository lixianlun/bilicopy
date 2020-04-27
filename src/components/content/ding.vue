<template>
  <div class="dint-content b-warp">
    <div>
      <header class="dint-title" style="font-size: 12px;">
        <div style="display: flex;align-items: center;">
          <span class="title_icon"></span>
          <a class="title" style="margin-left:10px;">动画</a>
        </div>
        <div style="display: flex;">
          <div class="reload" @click="reload()">
            <a class="reloadac">换一换</a>
          </div>
          <a class="live_more">更多 ></a>
        </div>
      </header>
      <ul class="ding proul extension">
          <li class="proli video-card-common"  v-for="(list,index) in item" :key="index">
            <a @click="openvideo(list.aid)" class="pro_a" target='_blank'>
              <img class="bnimg" :src="list.pic" alt="">
              <p class="pro_p">{{list.title}}</p>
            </a>
            <p class="p_a" @click="openup(list.owner.mid)">{{list.owner.name}}</p>
          </li>
      </ul>
    </div>
    <ul class="gg-window">
      <header class="dint-title" >
        <div style="display: flex;align-items: center;">
          <a class="title">排行榜</a>
        </div>
        <div style="display: flex;">
          <a class="live_more">更多 ></a>
        </div>
      </header>
     <li class="rank-content">
        <a class="sc-item">
          <span class="ls-number">1</span>
          <div class="preview">
            <div style="display: inline-block;">
              <img src="../../assets/d469fc8e9915b15f854cc0904a84ccbc1b6abd2a.jpg" alt="">
            </div>
            <div style="margin-left: 12px;">
              <a style="display: inline-block;">
                <p class="two-hide">这动画太好看了！2020年4月新番吐槽大盘点！（第一弹）</p>
              </a>
              <span style="font-size: 12px;color: #999;">综合得分：242.1万</span>
            </div>
          </div>
        </a>
      </li>
      <li class="rank-content">
        <a class="sc-item">
          <span class="ls-number">2</span>
          <a>
            <p class="oneline">这TM叫熊孩子？</p>
          </a>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
      }
    },
    props:{
      item:{
        type:Array
      },
      dings:{
        type:String
      }
    },
    methods:{
      reload(){
        this.$store.dispatch(this.dings)
      },
      openvideo(url){
        window.open('https://www.bilibili.com/video/av'+url)
      },
      openup(url){
        window.open('https://space.bilibili.com/'+url)
      }
    },
    mounted(){
      console.log(typeof(this.dings))
    }
  }
</script>

<style lang="stylus">
  .oneline
    font-size 14px
    transition color .3s ease
  .two-hide
    height 40px
    line-height 20px
    font-size 14px
    overflow hidden
    display -webkit-box
    -webkit-box-orient vertical
    -webkit-line-clamp 2
  .rank-content:nth-child(-n+4)
      .ls-number
        color white
        background #00A1D6
  .rank-content
    display flex
    align-items center
    justify-content space-between
    margin-bottom 16px
    .two-hide
      transition color .3s ease
    &:hover
      .two-hide
        color #00A1D6
      .oneline
        color #00A1D6
  .preview
    display flex
    img
      width 112px
      height 63px
      border-radius 2px
  .dint-content
    display flex
    justify-content space-between
    margin 30px auto 0
  .title
    font-size 20px
    cursor default
  .dint-title
    height 38px
    font-size 12px
    margin-bottom 16px
    display flex
    align-items center
    justify-content space-between
    .title_icon
      width 40px
      height 38px
      display inline-block
      background url(../../assets/icons.png) no-repeat
      background-position -141px -652px
  .contentlist
    height 360px
  .ding
    height 360px
    flex-wrap wrap
</style>
