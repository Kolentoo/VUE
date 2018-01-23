<template>
    <div class="recommend">
        <div class="title clearfix">
            <div class="title-txt fl">
                <i class="iconfont icon-play"></i>
                <span>实战推荐</span>
            </div>
            <a href="" class="fr more">
                更多实战
                <i class="icon-jiantou iconfont"></i>
            </a>
        </div>
        <div class="content">
            <ul class="main-con clearfix">
                <li class="main-list fl" v-for="main in mains">
                    <a href="" class="block">
                        <h2>{{main.name}}</h2>
                        <p class="desc">{{main.desc}}</p>
                        <p class="price">￥{{main.price}}</p>
                        <img class="pic pic1 vm" src="./recommend1.png" alt="">
                        <img class="pic pic2 vm" src="./recommend2.png" alt="">
                    </a>
                </li>
            </ul>
            <lesson></lesson>
        </div>
    </div>
</template>

<script>
    import lesson from '../lesson/lesson'
    export default{
        data(){
            return{
                mains:[]
            }
        },
        components:{
            lesson
        },
        created(){
            this.$axios.get('/api/home').then((res)=>{
                this.mains=res.data.data.main.recommend;
                console.info(this.mains)
            })
        }
    }
</script>

<style scoped>
    .recommend {padding:3.5rem;background: #f3f5f7;}
    .icon-play {font-size: 3rem;color:#33bdfe;}
    .title-txt span{font-size: 3rem;color:#333;margin-left: 1rem;}
    .more {color:#999;font-size: 2.4rem;padding-top: 0.5rem;}
    .icon-jiantou {font-size: 2.4rem;}
    .main-con {display: flex;justify-content:center;margin-top: 3rem;}
    .main-list {padding:2.5rem;border-radius:1.2rem;width: 48%;position: relative;overflow: hidden;}
    .main-list .pic {width: 15rem;height: 15rem;position: absolute;bottom: -7rem;right: 0.5rem;}
    .main-list:first-child {background: #00c2d1;margin-right: 3rem;}
    .main-list:last-child {background: #0070bb;}
    .main-list:first-child .pic1 {display: block;}
    .main-list:first-child .pic2 {display: none;}
    .main-list:last-child .pic1 {display: none;}
    .main-list:last-child .pic2 {display: block;}
    .main-list h2{color:#fff;font-size: 3.4rem;}
    .desc {font-size: 2.2rem;color:#fff;}
    .price {font-size: 2.2rem;color:#fff;margin-top: 2rem;}
</style>