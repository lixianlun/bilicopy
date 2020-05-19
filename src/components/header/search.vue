<template>
  <div id="searchbox" class="searchbox">
    <div class="search_size">
      <form action="" class="nav_search">
        <input type="text" placeholder="致敬奋战在肺炎疫情一线的医护人员!" ref="input" autocomplete="off"
          v-model="message" @keydown="kdown($event)" @keyup="kup($event)" id="search" class="In_search nav_search">
        <div class="butback">
          <button type="button" class="search_button" @click="onsearch()"></button>
        </div>
      </form>
     <ul id="sear_b" class="sear_b" v-show="s_show">
        <li class="sear_l slist" v-for="item in dates" :key="item.index"
        @click="butt($event,item.value)" ><a href="">{{item.value}}</a></li>
      </ul>
      <ul id="sear_b" class="sear_b" v-show="list_show">
         <li class="sear_l llist"  v-for="(item,index) in (localstoragelist || '').slice(0,10)"
         :key="item.index" @click="butt($event,item)" >
           <a>{{item}}</a>
           <span class="iconfont icon-ic_close" style="float: right;" @click.stop="del(index)"></span>
         </li>
       </ul>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Storage from '../../store/store.js';
  export default{
    data(){
      return {
        message:'',
        dates:[],
        localstoragelist:Storage.fetch(),
        url:'https://s.search.bilibili.com/main/suggest?term=',
        search:'https://search.bilibili.com/all?keyword=',
        lindex:-1,
        s_show:false,
        list_show:false
      }
    },
    mounted() {
      document.addEventListener('click',e=>{
        if(!this.$refs.input.contains(e.target)){
          this.none();
          for(let i=0;i<this.localstoragelist.length;i++){ //渲染修正
            this.$refs.storagechlist[i].style.background='';
          }
        }else{
          if(this.message.length>0){
            this.axiosget()
          }else{
            if(this.localstoragelist.length>0){
              this.list_show=true;
            }
          }
        }
      })
    },
    watch:{
      localstoragelist:{//缓存监听
        handler(items){
          if(items.length==0){
            this.list_show=false;
          }
          Storage.save(this.reArr(items));
        },
        deep: true
      },
      s_show:{
        handler(items){
          if(items){
            this.list_show=false;
          }
        }
      }
    },
    methods:{
      storagepush(){//记录同时防止渲染重复
        let arr = Storage.fetch();
        if(arr.indexOf(this.message)==-1){
          this.localstoragelist.unshift(this.message);//从前往后插入
        }
      },
      reArr(str){//缓存去重复
        var result=[];
        for(var i=0;i<str.length;i++){
        	if(result.indexOf(str[i])==-1){
        		result.push(str[i]);
        	}
        }
        return result
      },
      del(index){//缓存删除
        this.localstoragelist.splice(index,1);
      },
      butt(ev,v){//打开列表的搜索
        window.open(this.search+v)
        this.storagepush();记录
        this.none()
        ev.preventDefault();
      },
      onsearch(){ //打开框内搜索
        window.open(this.search+this.message);
        this.storagepush();
        this.none();//搜索修正
      },
      none(){
        this.dates=[];
        this.s_show=false;
        this.lindex=-1;
        this.list_show=false;
        for(let i=0;i<this.localstoragelist.length;i++){ //渲染修正
          this.$refs.storagechlist[i].style.background='';
        }
      },
      srclistdowm(arrs,obj){
        this.lindex==arrs.length-1?this.lindex=arrs.length-1:this.lindex++;
        for(let i=0;i<arrs.length;i++){
          obj[i].style.background='';
        }
        obj[this.lindex].style.background='rgba(0,0,0,.05)';
      },
      srclistup(arrs,obj){
        this.lindex==0?this.lindex=0:this.lindex--;
        for(let i=0;i<arrs.length;i++){
          obj[i].style.background='';
        }
        obj[this.lindex].style.background='rgba(0,0,0,.05)';
      },
      kdown(ev){
        let slist=Object.values(this.dates);
        let llist=this.localstoragelist;
        let searchli=document.getElementsByClassName('slist');
        let locallist=document.getElementsByClassName('llist');
        if(ev.keyCode==40){
          if(this.s_show){
              this.srclistdowm(slist,searchli);
            }else{
              this.srclistdowm(llist,locallist);
            }
        }else if(ev.keyCode==38){
            if(this.s_show){
                this.srclistup(slist,searchli);
              }else{
                this.srclistup(llist,locallist);
              }
        }else if(ev.keyCode==13){
          this.storagepush();
          window.open(this.search+this.message);
        }
      },
      kup(ev){
        let slist=Object.values(this.dates);
        let llist=this.localstoragelist;
        if(ev.keyCode==40){
          this.up(slist,llist);
        }else if(ev.keyCode==38){
          this.up(slist,llist);
        }else{
          this.axiosget()
        }
      },
      up(obj,obs){
        if(this.s_show){
          this.message=obj[this.lindex].value;
        }else{
          this.message=obs[this.lindex];
        }
      },
      axiosget(){
        axios.get(this.url+this.message).then(response=>{
          this.dates=response.data;
          if(Object.values(this.dates).length>0){
            this.s_show=true;
          }else{
            this.s_show=false;
          }
        },response=>{
          console.log("error")
        })
      }
    }
  }
</script>

<style lang="stylus">
  .sear_l
    height 32px
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
    position absolute
    background white
  .sear_l
    line-height 32px
    cursor pointer
    color #212121
    padding 0 15px
    font-size 14px
    &:hover
      background rgba(0,0,0,.05)
</style>
