<template>
  <div class="video-top" ref="video">
    <video src="http://static.paixin.com/nossr/static/media/a3bce81e7ed152b290a46a505a9bfd8f.17682ef.mp4" autoplay="autoplay" loop="loop">
    </video>
    <navigation></navigation>
    <div class="video-title">
      <h1>FOR CREATIVES</h1>
      <h2>Discover The World's Best Video</h2>
      <div class="search-box">
        <input type="text" class="search" placeholder="Search For Free Videos">
        <img class="sbtn block" src="../public/images/search.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import navigation from '../components/navigation/navigation'
  export default{
    data(){
      return{

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
    }
  }
</script>

<style>
  .navigation {position: absolute;top: 0;left: 0;width: 100%;z-index:100;}
  .video-top {width: 100%;background-size: cover;overflow: hidden;}
  .video-top video{width: 100%;height:100%;cursor: inherit;object-fit: cover;}
  .video-title {position: absolute;width: 100%;height: 100%;top: 0;left: 0;}
  .video-top h1{text-align: center;color:#fff;font-size: 65px;font-weight:bold;padding-top: 16%;}
  .video-top h2{text-align: center;font-size: 38px;color:#fff;}
  .search-box {width: 850px;margin:50px auto 0;position: relative;}
  .search-box input{background: rgba(255,255,255,0.7);border-radius:10px;width: 100%;height: 75px;line-height: 75px;
  color:#333;font-size:24px;padding-left: 30px;outline:none;text-align: center;}
  .search-box .sbtn {position: absolute;width:34px;cursor: pointer;top: 3px;right: -20px;padding:20px;}


</style>
