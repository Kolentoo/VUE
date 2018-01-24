<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="swiper-lesson">
    <!-- slides -->
    <swiper-slide v-for="(slide,index) in slides" :key="index">
        <ul class="sec-con">
            <li class="sec-list clearfix" v-for="sec in secs">
                <a href="" class="block clearfix">
                    <img class="pro-pic vm fl" :src="sec.pic" alt="">
                    <div class="detail fl">
                      <p class="name">{{sec.name}}</p>
                      <p class="num">{{sec.num}}</p>
                      <p class="price">{{sec.price}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        slides: [
          1,2
        ],
        secs:[],
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          // autoplay: {
          //   delay: 3000,//5秒切换一次
          // },
          // direction : 'vertical',
          // effect: 'coverflow',
          grabCursor: true,
          // setWrapperSize: true,
          // autoHeight: true,
          pagination: {
              el: '.swiper-pagination',
          },
          // paginationClickable: true,
          // prevButton: '.swiper-button-prev',
          // nextButton: '.swiper-button-next',
          // scrollbar:'.swiper-scrollbar',
          // mousewheelControl: true,
          // observeParents: true,
          parallax:true,
          loop:false
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          // debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          // onTransitionStart(swiper){
          //   console.log(swiper)
          // },
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1500, false)
    },
    methods: {
      callback() {
      }
    },
    created(){
      this.$axios.get('/api/home').then((res)=>{
        this.secs=res.data.data.sec.recommend;
        console.log(this.secs);
      });
    }
  }
</script>

<style>
  .swiper-lesson .sec-list {margin:3rem 0;}
  .swiper-lesson .pro-pic {width: 40%;border-radius:1.2rem;}
  .swiper-lesson .detail {margin-left: 5%;width: 55%;}
  .swiper-lesson .name {font-size: 3rem;color:#333;overflow:hidden;text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;
  -webkit-line-clamp:2; }
  .swiper-lesson .num {font-size: 2.4rem;color:#333;}
  .swiper-lesson .price {font-size: 2.4rem;color:#333;}
  .swiper-lesson .swiper-pagination-bullet {width: 1.3rem;height: 1.3rem;margin:0 0.8rem;transition:all ease 0.5s;}
  .swiper-lesson .swiper-pagination-bullet-active {background: #D9DDE1;width: 6rem;border-radius:1rem;}
  .swiper-lesson .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0;}
</style>  