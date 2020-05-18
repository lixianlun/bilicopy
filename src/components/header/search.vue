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
      <!-- {{message}} -->
     <ul id="sear_b" class="sear_b" v-show="s_show">
        <li class="sear_l" v-for="item in dates" ref="searchlist" :key="item.index"
        @click="butt($event,item.value)" ><a href="">{{item.value}}</a></li>
      </ul>
      <ul id="sear_b" class="sear_b" v-show="list_show">
         <li class="sear_l"  v-for="(item,index) in (localstoragelist || '').slice(0,10)" ref="storagechlist"
         :key="item.index" @click="butt($event,item)" >
           <a >{{item}}</a>
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
        list_show:false,
      }
    },
    mounted() {
      document.addEventListener('click',e=>{
        if(!this.$refs.input.contains(e.target)){
          this.none();
        }else{
          this.lindex=-1;
          if(this.localstoragelist.length>0){
            if(!this.s_show){
              this.list_show=true;
            }
          }
        }
      }),
      document.addEventListener('keydown',e=>{
          if(e.keyCode == 13){
            console.log(this.message)

            this.storagepush();
            this.none();
            e.preventDefault();
          }
      })
    },
    watch:{
      localstoragelist:{//缓存监听
        handler(items){
          if(items.length==0){
            this.list_show=false;
          }else{
            this.list_show=true;
          }
          Storage.save(this.reArr(items));
        },
        deep: true
      },
      s_show:{
        handler(items){
          if(items){
            this.list_show=false;
          }else{
            this.list_show=true;
          }
        },
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
        this.message="";
        this.dates=[];
        this.s_show=false;
        this.lindex=-1;
        this.list_show=false;
        for(let i=0;i<this.localstoragelist.length;i++){ //渲染修正
          this.$refs.storagechlist[i].style.background='';
        }
      },
      srclistdowm(arrs,obj){
        // this.lindex==arrs.length-1?this.lindex=arrs.length-1:this.lindex++;//判断渲染位置
        // obj[this.lindex].style.background='rgba(0,0,0,.05)';
        // obj[this.lindex-1].style.background='';//颜色渲染修正
        // this.message=obj[this.lindex].innerText;
        // console.log(obj[this.lindex].innerText);
        this.lindex==arrs.length-1?this.lindex=arrs.length-1:this.lindex++;
        obj[this.lindex].style.background='rgba(0,0,0,.05)';
        obj[this.lindex-1].style.background='';
      },
      srclistup(arrs,obj){
        this.lindex==0?this.lindex=0:this.lindex--;
        obj[this.lindex].style.background='rgba(0,0,0,.05)';
        obj[this.lindex+1].style.background='';
        this.message=obj[this.lindex].innerText;
        // console.log(obj[this.lindex].firstChild.innerText);
      },
      kdown(ev){
        let arr=Object.values(this.dates);
        let seli=this.$refs.searchlist;

        let stoli=this.$refs.storagechlist;
        let sarr=this.localstoragelist;
        if(ev.keyCode==40){
          this.srclistdowm(sarr,stoli);
         
        }else{
          window.open(this.search+this.message);
        }
        console.log(this.message)

        // this.message=stoli[this.lindex].firstChild.innerText;
        // if(ev.keyCode==40){ //dowm
        //   console.log(this.message)
        //   if(this.s_show){
        //     this.srclistdowm(arr,seli);
        //   }else{
        //     this.srclistdowm(sarr,stoli);
        //   }
        //   ev.preventDefault();
        // }
      },
      kup(ev){
        let stoli=this.$refs.storagechlist;
        if(ev.keyCode==40){
          this.message=stoli[this.lindex].innerText;
          console.log(this.message)
        }else{

        }
      },
      getdata(ev){

        if(ev.keyCode==40){ //dowm
          console.log(this.message)
          if(this.s_show){
            this.srclistdowm(arr,seli);
          }else{
            this.srclistdowm(sarr,stoli);
          }
          ev.preventDefault();
        }else if(ev.keyCode==38){   //up
          if(this.s_show){
            this.srclistup(arr,seli);
          }else{
            this.srclistup(sarr,stoli);
          }
          ev.preventDefault();
        }else{ //any
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
