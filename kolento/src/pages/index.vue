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
    </div>
</template>

<script>
    import navigation from '../components/nav/nav'
    import swiper from '../components/swiper/swiper'
    import recommend from '../components/recommend/recommend'
    export default{
        data(){
            return{
                menus:[
                    
                ]
            }
        },
        components:{
            navigation,swiper,recommend
        },
        created(){
            let self = this;
            this.$axios.get('/api/home').then((res)=>{
                if(res.data.errno===0){
                    self.menus=res.data.data.menu;
                }
            });
        }
    }
</script>


<style scoped>
    .menu {padding:3.5rem 0;}
    .menu-list {width: 25%;text-align: center;}
    .menu-list .p1 {font-size: 2.8rem;line-height: 2.8rem;}
    .menu-list:first-child .iconfont,.menu-list:nth-child(2) .iconfont {color:#F90;font-size: 4.6rem;}
    .menu-list:last-child .iconfont,.menu-list:nth-child(3) .iconfont {color:#738BE5;font-size: 4.9rem;}
</style>