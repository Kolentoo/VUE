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
        <recommend :message="msg1"></recommend>
        <recommend :message="msg2"></recommend>
        <div class="like">
            <h2 class="tc">
                <span class="icon">
                    <i class="icon-xihuan2 iconfont"></i>
                </span>
                <span class="guess">猜你喜欢</span>
            </h2>
            <ul class="like-con" ref="likeCon">
                <li class="like-list" v-for="(like,index) in likes">
                    <a href="" class="block clearfix" v-if="seen.includes(index)">
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
        <p class="more" @click="loadmore" v-if="!this.seen.includes(8)">查看更多</p>
        <p class="more no-more" v-else>已无数据</p>
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
                likes:[],
                seen:[],
                seen1:[0,1,2],
                seen2:[3,4,5],
                seen3:[6,7,8],
                msg1:0,
                msg2:1
            }
        },
        components:{
            props:['rdata'],
            navigation,swiper,recommend,bottom
        },
        created(){
            this.$axios.get('/api/home').then((res)=>{
                if(res.data.errno===0){
                    this.menus=res.data.data.menu;
                    this.likes=res.data.data.like;
                }
            });
            this.seen=[...this.seen1]
        },
        methods:{
            loadmore(){
                this.seen.includes(5)?this.seen=[...this.seen1,...this.seen2,...this.seen3]:this.seen=[...this.seen1,...this.seen2]
            }
        }
    }
</script>


<style scoped>
    .index {padding-bottom: 15rem;}
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
    .no-more {border:none;}
    .icon {animation: change linear 0.9s infinite;display: inline-block;}
    .icon-xihuan2 {color:#940f0f;}
    @keyframes change{
        0% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(0.9);
        }
    }
</style>