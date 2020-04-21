<template>
  <div id="searchbox" class="searchbox">
    <div class="search_size">
      <form action="" class="nav_search">
        <input type="text" placeholder="致敬奋战在肺炎疫情一线的医护人员!" ref="input" autocomplete="off"  v-model="message" @keydown="getdata($event)" id="search" class="In_search nav_search">
        <div class="butback">
          <button type="button" class="search_button" @click="onsearch()"></button>
        </div>
      </form>
     <ul id="sear_b" class="sear_b" v-show="s_show">
        <li class="sear_l" v-for="item in dates" ref="searchlist" :key="item.index" @click="butt(item.value)" ><a href="">{{item.value}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default{
    data(){
      return {
        message:'',
        dates:[],
        url:'https://s.search.bilibili.com/main/suggest?term=',
        search:'https://search.bilibili.com/all?keyword=',
        lindex:-1,
        s_show:false
      }
    },
    mounted() {
      document.addEventListener('click',e=>{
        if(!this.$refs.input.contains(e.target)){
          this.none();
        }
      })
    },
    methods:{
      butt(v){
        window.open(this.search+v)
        this.none()
      },
      onsearch(){
        window.open(this.search+this.message);
        this.none()
      },
      none(){
        this.message=="";
        this.dates=[];
        this.s_show=false;
        this.lindex=-1;
      },
      getdata(ev){
        let arr=Object.values(this.dates);
        if(ev.keyCode==40){
          for(let i=0;i<arr.length;i++){
            this.$refs.searchlist[i].style.background='white';
          }
          this.lindex===arr.length-1?this.lindex=arr.length-1:this.lindex++;
          this.$refs.searchlist[this.lindex].style.background='rgba(0,0,0,.05)';
          this.message=this.$refs.searchlist[this.lindex].firstChild.innerText;
        }else if(ev.keyCode==38){
          for(let i=0;i<arr.length;i++){
            this.$refs.searchlist[i].style.background='white';
          }
          this.lindex==0?this.lindex=0:this.lindex--;
          this.$refs.searchlist[this.lindex].style.background='rgba(0,0,0,.05)';
          this.message=this.$refs.searchlist[this.lindex].firstChild.innerText;
          ev.preventDefault();
        }else if(ev.keyCode==13){
          window.open(this.search+this.message);
          this.none()
        }else{
          if(this.message==""){
            this.none()
          }else{
            axios.get(this.url+this.message).then(response=>{
              this.s_show=true
              this.dates=response.data;
            },response=>{
              console.log("error")
            })
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
  .searchbox
    width 480px
    margin 0 10px
  .search_size
    position relative
    z-index 20
  .nav_search
    height 34px
    display block
    box-sizing border-box
  .In_search
    width 100%
    font-size 14px
    outline none
    border-radius 3px
    padding 0 42px 0 16px
  input::-webkit-input-placeholder
    color #B3B3B3
    font-size 13px
  .butback
    width 42px
    height 34px
    background-color #e7e7e7
    position absolute
    top 0
    right 0
    border-radius 3px
  .search_button
    width 42px
    height 34px
    position absolute
    outline none
    border none
    cursor pointer
    background url(../../assets/icons.png) no-repeat
    background-position -779px -720px
    &:hover
      background-position -651px -720px
  .sear_b
    margin 1px 0 0 0
    border-radius 3px
    background white
    padding 10px 0
    width 100%
    // display none
    position absolute
    li
      line-height 32px
      cursor pointer
      color #212121
      padding 0 15px
      font-size 14px
      &:hover
        background rgba(0,0,0,.05)
</style>
