<template>
  <div class="video">
    <div class="video-top" :class="{bannerChange:yes}" ref="video">
      <video src="http://static.paixin.com/nossr/static/media/a3bce81e7ed152b290a46a505a9bfd8f.17682ef.mp4" autoplay="autoplay" loop="loop">
      </video>
      <navigation @bannertop="bannertop" @bannerback="bannerback"></navigation>
      <div class="video-title">
        <h1>FOR CREATIVES</h1>
        <h2>Discover The World's Best Video</h2>
        <div class="search-box">
          <input type="text" class="search" placeholder="Search For Free Videos">
          <img class="sbtn block" src="../public/images/search.png" alt="">
        </div>
      </div>
    </div>
    <div class="video-content">
      <div class="content-title tc">
        <h3>The top videos, chosen by you</h3>
        <h4>Discover what’s trending according to photographers around the world.</h4>
      </div>
      <div class="video-group">
        <ul class="video-con clearfix">
          <li class="video-list fl" v-for="(video,index) in videos">
            <img class="vm block" :src="video.vimg" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import navigation from '../components/navigation/navigation'
  export default{
    data(){
      return{
        yes:false,
        videos:[]
      }
    },
    components:{
      navigation
    },
    created(){
      this.$nextTick(function () {
        let vHeight = document.documentElement.clientHeight;
        this.$refs.video.style.height=vHeight+'px';
      });
      this.$axios.get('/api/channel').then((response)=>{
        this.videos=response.data.data.video;
        console.log(this.videos)
      });
    },
    methods:{
      bannertop(){
        this.yes=true;
        this.indexIntro=true;
      },
      bannerback(){
        this.yes=false;
        this.indexIntro=false;
      }
    }
  }
</script>

<style>
  ::-webkit-scrollbar{width:0px}
  .navigation {position: absolute;top: 0;left: 0;width: 100%;z-index:100;}
  .video-top {width: 100%;background-size: cover;overflow: hidden;margin-top: 0;transition:all ease 0.5s;}
  .bannerChange {margin-top: -450px;}
  .video video{width: 100%;height:100%;cursor: inherit;object-fit: cover;}
  .video-title {position: absolute;width: 100%;height: 100%;top: 0;left: 0;}
  .video h1{text-align: center;color:#fff;font-size: 65px;font-weight:bold;padding-top: 300px;transition:all ease 0.5s;}
  .bannerChange h1{padding-top: 100px;transition:all ease 0.5s;}
  .video h2{text-align: center;font-size: 38px;color:#fff;}
  .search-box {width: 850px;margin:50px auto 0;position: relative;}
  .search-box input{background: rgba(255,255,255,0.7);border-radius:10px;width: 100%;height: 75px;line-height: 75px;
  color:#333;font-size:24px;padding-left: 30px;outline:none;text-align: center;}
  .search-box .sbtn {position: absolute;width:34px;cursor: pointer;top: 3px;right: -20px;padding:20px;}
  .content-title {margin-top: 65px;}
  .content-title h3{color:#333;font-size: 36px;}
  .content-title h4{font-size: 18px;margin-top: 5px;}
  .video-list {width: 400px;height: 300px;}
  .video-list embed{width: 100%;height: 100%;}

</style>
