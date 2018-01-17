<template>
  <div id="app" class="font">
    <div class="banner" ref="banner" :class="{bannerChange:yes}">
      <navigation @bannertop="bannertop" @bannerback="bannerback"></navigation>
      <div class="title">
        <transition name="fade1">
          <h1 v-if="show">让美好触手可及!</h1>
        </transition>
        <transition name="fade2">
          <h2 v-if="show">Closer To Goodliness</h2>
        </transition>
      </div>
    </div>
    <div class="index-intro" v-show="indexIntro">
        <h1>WHAT YOU HAVE</h1>
        <h1>TO KNOW ABOUT ME.</h1>
      <dl>
        <dd>I am an Front-end Engineer focused on digital user experiences. Currently living in Seattle, WA and working at CDK Global, 
          an automotive advertising agency.</dd>
        <dd>My hobbies and passions include User Experience, Web Development, Digital Marketing and Photography. 
          My goal is to solve problems through thoughtful ideas that translate into designs for various mediums.</dd>
        <dd>Connect with me on <a href="">Weibo</a></dd>
      </dl>
    </div>
  </div>
</template>

<script>
  import navigation from '../components/navigation/navigation'
  export default{
    data(){
      return{
         show:false,
         yes:false,
         indexIntro:false
      }
    },
    components:{
      navigation
    },
    created(){
      this.$nextTick(function () {
          this.show=!this.show;
          let bHeight = document.documentElement.clientHeight;
          this.$refs.banner.style.height=bHeight+'px';
      });

    },
    mounted(){

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
  body,html{overflow: hidden;}
  .banner {background:url(../public/images/banner.jpg) no-repeat center 65%;background-size:cover;transition:all ease 0.5s;position: relative;margin-top: 0;}
  .banner h1{padding-top: 320px;text-align: center;color:#fff;font-size: 55px;font-weight:bold;}
  .banner h2{font-size: 40px;text-align: center;color:#fff;font-weight:bold;}
  .bannerChange {margin-top: -550px;}
  .fade1-enter-active, .fade1-leave-active {transition: all ease 1s;opacity: 1;transform:scale(1,1);}
  .fade1-enter {opacity: 0;transform:scale(0.9,0.9);}
  .fade2-enter-active, .fade2-leave-active {transition: all ease 1.2s;opacity: 1;transform:scale(1,1);}
  .fade2-enter {opacity: 0;transform:scale(0.9,0.9);}
  .index-intro {width: 800px;margin:80px auto 0;padding-bottom: 80px;color: #4a4a4a;font-family: "open sans";}
  .index-intro h1 {font-size: 50px;font-weight:bold;line-height: 60px;}
  .index-intro dl{margin-top: 40px;}
  .index-intro dd{font-size: 18px;margin-bottom: 20px;}
</style>
