<template>
    <div class="index">
        <navigation></navigation>
        <swiper></swiper>
        <div class="menu">
            <ul class="menu-con clearfix">
                <li class="menu-list fl" v-for="menu in menus">
                    <a href="" class="block">
                        <i class="iconfont" :class="menu.icon"></i>
                        <p class="p1">{{menu.label}}</p>
                    </a>
                </li>
            </ul>
        </div>
        <recommend></recommend>
        <div class="like">
            <h2 class="tc">
                <i class="icon-xihuan2 iconfont"></i>
                <span class="guess">猜你喜欢</span>
            </h2>
            <ul class="like-con">
                <li class="like-list" v-for="like in likes">
                    <a href="" class="block clearfix">
                        <img class="pro-pic vm fl" :src="like.pic" alt="">
                        <div class="detail fl">
                        <p class="name">{{like.name}}</p>
                        <p class="num">{{like.num}}</p>
                        <p class="price">{{like.price}}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <p class="more">查看更多</p>
        <bottom></bottom>
    </div>
</template>

<script>
    import navigation from '../components/nav/nav'
    import swiper from '../components/swiper/swiper'
    import recommend from '../components/recommend/recommend'
    import bottom from '../components/bottom/bottom'
    export default{
        data(){
            return{
                menus:[],
                likes:[]
            }
        },
        components:{
            navigation,swiper,recommend,bottom
        },
        created(){
            this.$axios.get('/api/home').then((res)=>{
                if(res.data.errno===0){
                    this.menus=res.data.data.menu;
                    this.likes=res.data.data.like;
                }
            });
        }
    }
</script>


<style scoped>
    .index {padding-bottom: 12rem;}
    .menu {padding:3.5rem 0;}
    .menu-list {width: 25%;text-align: center;}
    .menu-list .p1 {font-size: 2.8rem;line-height: 2.8rem;}
    .menu-list:first-child .iconfont,.menu-list:nth-child(2) .iconfont {color:#F90;font-size: 4.6rem;}
    .menu-list:last-child .iconfont,.menu-list:nth-child(3) .iconfont {color:#738BE5;font-size: 4.9rem;}
    .lesson-swiper .swiper-pagination-bullet {margin:0 0.6rem;width: 1.3rem;height: 1.3rem;bottom: 1rem;
    transition:all ease 0.5s;}
    .lesson-swiper .swiper-pagination-bullet-active {background: #B7BBBF;width: 30rem;border-radius:1rem;}
    .like {padding: 3.5rem;}
    .like h2{padding-bottom: 1rem;}
    .like .iconfont {font-size: 3rem;font-weight:bold;}
    .like .guess {font-size: 3rem;margin-left: 2rem;color:#333;}
    .like .like-list {margin:3rem 0;}
    .like .pro-pic {width: 40%;border-radius:1.2rem;}
    .like .detail {margin-left: 5%;width: 55%;}
    .like .name {font-size: 3rem;color:#333;overflow:hidden;text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;
    -webkit-line-clamp:2; }
    .like .num {font-size: 2.4rem;color:#333;}
    .like .price {font-size: 2.4rem;color:#333;}
    .more {border-radius:3.5rem;border:0.1rem solid #e6e6e6;text-align: center;height: 6.5rem;line-height: 6.5rem;font-size: 2.4rem;
    width: 35rem;margin:0 auto;color:#888;}
</style>