<template>
  <div>
    <a class="ad b-warp" v-if="livetopad" :href="livetopad.url" target="_blank">
      <img class="bnimg" :src="livetopad.pic" alt="">
    </a>
    <div class="live b-warp">
      <div class="liveleft">
        <header style="display: flex;justify-content: space-between;align-items: center;font-size: 12px;">
          <div style="display: flex;align-items: center;">
            <span class="live_iconf"></span>
            <a style="font-size: 20px;margin-left: 10px;" class="live_open live_name" href="https://live.bilibili.com/" target="_blank">正在直播</a>
            <a class="live_name_side">当前共有 {{live.online_total}} 个在线直播</a>
          </div>
          <div style="display: flex;">
            <div class="reload" style="border: 1px solid silver;padding: 3px 5px;border-radius: 2px;" @click="reload()">
              <a class="reloadac" style="white-space: nowrap;" >换一换</a>
            </div>
            <a class="live_more" style="line-height: 15px;inline-block;margin-left: 15px;white-space: nowrap;border: 1px solid silver;padding: 2px 8px;border-radius: 2px;" href="https://live.bilibili.com/" target="_blank" >更多 ></a>
          </div>
        </header>
        <ul class="liveul extension">
            <li class="liveli video-card-common" v-for="(item,index) in livedata.slice(0,8)" @click="enter($event,item.link)" :key='index'>
                <div class="live_pic">
                  <img class="bnimg" :src="item.pic" alt="">
                </div>
                <div class="live_up">
                  <img class="up_icon" :src="item.face" alt="">
                  <div class="live_content up_w">
                    <p class="live_name">{{item.uname}}</p>
                    <p class="live_title">{{item.title}}</p>
                    <p class="live_type">{{item.area_v2_name}}</p>
                  </div>
                </div>
            </li>
        </ul>
      </div>
      <div class="gg-window">
        <ul class="live_side_ac">
          <li class="side-list" :class="{active:num==index}" @click="change(index)" v-for="(item,index) in sidelist" :key='index'>{{item.title}}</li>
        </ul>
        <ul class="indeclass ">
          <li class="side-content" v-for="(item,index) in ranking" :key="index" @click="enter($event,item.link)" >
            <a class="sc-item" href="">
              <span class="ls-number">{{index+1}}</span>
              <img :src="item.face" alt="">
              <div class="sc-txt l-txt">
                <p class="ls-uname">{{item.uname}}</p>
                <p class="txt-p">{{item.title}}</p>
              </div>
            </a>
            <div>
              <p class="txt-p txt-c">{{trannum(item.online)}}</p>
            </div>
          </li>
        </ul>
        <div class="indeclass">
          <p class="ls-uname">没有数据(-_-#)</p>
        </div>
        <div class="indeclass gg-window active" @click="enter($event,live.url)">
          <img style="width: 100%;cursor: pointer;" :src="preview.pic" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    data(){
      return{
        num:2,
        sidelist:[
          {title:'直播排行'},{title:'关注的直播'},{title:'为你推荐'}
        ]
      }
    },
    methods:{
      reload(){
        this.$store.dispatch('livedata')
      },
      trannum(nu){
        return nu>9999?(nu/10000).toFixed(1)+'万':nu
      },
      enter(ev,url){
        ev.preventDefault();
        window.open(url)
      },
      change(index){
        this.num=index;
        let car = document.getElementsByClassName('indeclass');
        for(let i=0;i<car.length;i++){
          car[i].style.display='none';
        }
        car[this.num].style.display='block';
      }
    },
    computed: {
      ...mapGetters([
        'livedata',
        'livetopad',
        'live',
        'ranking',
        'preview'
      ])
    },
    mounted() {
      this.$store.dispatch('livedata')
    },
  }
</script>

<style lang="stylus">
  .live_more
    transition background.3s ease
    &:hover
      background #f4f4f4
  .live_open
    transition color .3s ease
    &:hover
      color #1890FF
  .reload
    cursor pointer
    transition background .3s ease
    &:hover
      background #f4f4f4
      .reloadac
        &:before
          transform rotate(-280deg)
  .reloadac
    &:before
      content ''
      width 14px
      height 14px
      vertical-align middle
      display inline-block
      margin-right 4px
      background url(../../assets/icons.png) -474px -88px no-repeat
      transition transform .4s ease
  .indeclass
    display none
    .side-content:nth-child(-n+3)
      .ls-number
        color white
        background #00A1D6
  .indeclass.active
    display block
  .ls-uname
    margin-bottom 3px
    font-size 14px
    transition color .3s ease
  .txt-p
    font-size 12px
  .txt-c
    color #6D757A
    display inline-block
    display flex
    align-items center
    &:before
      content ''
      width 16px
      height 16px
      margin-right 3px
      background  url(../../assets/icons.png) -473px -407px no-repeat
      display inline-block
  .side-content
    display flex
    align-items center
    justify-content space-between
    margin-bottom 16px
    transition color .3s ease
    &:hover
      .ls-uname
        color #00A1D6
    .sc-item
      display flex
      align-items center
      .sc-txt
        p
          width 100%
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
      .ls-number
        width 18px
        height 18px
        line-height 18px
        border-radius 3px
        text-align center
        font-size 14px
        margin-right 12px
        color #999
      img
        width 44px
        height 44px
        border-radius 50%
        margin-right 12px
  .live_side_ac
    display flex
    height 36px
    align-items center
    margin-bottom 13px
    .side-list
      height 22px
      line-height 18px
      float left
      margin-right 12px
      font-size 12px
      cursor pointer
      white-space nowrap
      border-bottom 1px solid transparent
    .side-list.active
      color #00a1d6
      border-bottom 1px solid #00a1d6
  .live_pic
    width 100%
    height 96px
    display block
    margin-bottom 10px
  .live_up
    display flex
    line-height 16px
    justify-content space-between
    .live_content
      font-size 12px
      .live_name
        font-size 14px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      .live_title
        width 100%
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        color #050505
      .live_type
        margin-top 8px
        color #999
    .up_icon
      width 36px
      height 36px
      border-radius 50%
      display inline-block
  .ad
    display block
    margin 0 auto
    margin-bottom 30px
  .live
    margin 0 auto
    display flex
    justify-content space-between
  .liveleft
    .liveul
      height 360px
      margin-top 15px
      display flex
      flex-wrap wrap
      justify-content space-between
      .liveli
        cursor pointer
        transition color .3s ease
        &:hover
          color #00A1D6
    .live_name_side
      margin-left 25px
      font-size 12px
      color #7E8C8D
      cursor default
    .live_iconf
      width 40px
      height 34px
      display inline-block
      vertical-align middle
      background url(../../assets/icons.png) no-repeat
      background-position -141px -655px
</style>
