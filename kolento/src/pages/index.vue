<template>
    <div class="index">
        <navigation></navigation>
        <swiper></swiper>
        <div class="menu">
            <ul class="menu-con clearfix">
                <li class="menu-list fl" v-for="menu in menus">
                    <a href="" class="block">
                        <i class="menu-icon"></i>
                        <p class="p1">{{menu.label}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import navigation from '../components/nav/nav'
    import swiper from '../components/swiper/swiper'
    export default{
        data(){
            return{
                menus:[

                ]
            }
        },
        components:{
            navigation,swiper
        },
        created(){
            let self = this;
            this.$axios.get('/api/home').then((res)=>{
                console.log(res.data);
                if(res.data.errno===0){
                    console.log(res.data.data.menu)
                    self.menus=res.data.data.menu;
                }
            });
        }
    }
</script>


<style>
    .menu-list {width: 25%;text-align: center;}
    .menu-list .p1 {font-size: 2.8rem;}
</style>