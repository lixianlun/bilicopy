<template>
  <div class="dint-content b-warp">
    <div>
      <header class="dint-title" style="font-size: 12px;">
        <div style="display: flex;align-items: center;">
          <span class="title_icon"></span>
          <a class="title" style="margin-left:10px;">{{this.dings.name}}</a>
        </div>
        <div style="display: flex;">
          <div class="reload" @click="reload()">
            <a class="reloadac">换一换</a>
          </div>
          <a class="live_more" :href="this.dings.url" target='_blank'>更多 ></a>
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
          <a class="live_more" :href="this.dings.rankurl" target="_blank">更多 ></a>
        </div>
      </header>
     <li class="rank-content" v-for="(rank,index) in (rank||'').slice(0,8)" :key='index'>
        <a class="sc-item" v-if="index==0" :href="'https://www.bilibili.com/video/av'+rank.aid"  target="_blank">
          <span class="ls-number">{{index+1}}</span>
          <div class="preview">
            <div style="display: inline-block;">
              <img :src="rank.pic" alt="">
            </div>
            <div>
              <a style="display: inline-block;">
                <p class="two-hide">{{rank.title}}</p>
              </a>
              <span style="font-size: 12px;color: #999;">综合得分：{{trannum(rank.pts)}}</span>
            </div>
          </div>
        </a>
        <a class="sc-item" v-else :href="'https://www.bilibili.com/video/av'+rank.aid" target="_blank">
          <span class="ls-number">{{index+1}}</span>
          <a>
            <p class="oneline onelinetitle">{{rank.title}}</p>
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
      },
      rank:{
        type:undefined
      }
    },
    methods:{
      reload(){
        this.$store.dispatch(this.dings.title)
      },
      openvideo(url){
        window.open('https://www.bilibili.com/video/av'+url)
      },
      openup(url){
        window.open('https://space.bilibili.com/'+url)
      },
      trannum(nu){
        return nu>9999?(nu/10000).toFixed(1)+'万':nu
      },
    },
    mounted(){
    }
  }
</script>

<style lang="stylus">
  .oneline
    line-height 20px
    overflow hidden
    white-space nowrap
    font-size 14px
    transition color .3s ease
    text-overflow ellipsis
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
