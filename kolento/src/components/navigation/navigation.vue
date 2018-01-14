<template>
    <div class="navigation clearfix">
        <ul class="nav-con clearfix fl">
            <li class="nav-list fl" v-for="(item,index) in menus">
                <a class="list1" href="">{{item}}</a>
                <a class="list2" href="">{{item}}</a>
            </li>
        </ul>
        <div class="menu fr">
            <img @click="intro()" class="menu-icon block" v-show="show1" src="./menu.png" alt="">
            <img @click="close()" class="close block" v-show="show2" src="./close.png" alt="">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                items:[],
                menus:{},
                show1:true,
                show2:false
            }
        },
        props:{
            // home:{
            //     type:Object
            // }
        },
        created(){
            let self = this;
            axios.get('/api/home').then(function(response){
                if(response.data.errno===0){
                    self.items = response.data;
                    self.menus = self.items.data.navigation;
                }
            });
            // console.log(this.home)
            //以上请求也可以通过这种方式来发送
            // axios.get('/user',{
            //     params:{
            //         ID:12345
            //     }
            // }).then(function(response){
            // console.log(response);
            // }).catch(function(err){
            // console.log(err);
            // });
            // axios.post('/user',{
            // firstName:'Fred',
            // lastName:'Flintstone'
            // }).then(function(res){
            // console.log(res);
            // }).catch(function(err){
            // console.log(err);
            // });
        },
        methods:{
            intro(){
                this.$emit('bannertop');
                this.show1=false;
                this.show2=true;
            },
            close(){
                this.$emit('bannerback');
                this.show1=true;
                this.show2=false;
            }
        }
    }
</script>

<style>
    .navigation {font-size: 22px;padding-top: 25px;}
    .nav-con {margin-left: 40px;}
    .login {margin-right: 40px;}
    .navigation li {width: 100px;text-align: center;cursor:pointer;}
    .navigation li a{color:#fff;transition:all ease 0.5s;display: block;}
    .navigation li .list1 {margin-top: 0;opacity: 1;}
    .navigation li .list2 {opacity: 0;}
    .navigation li:hover .list1 {margin-top: -33px;opacity: 0;}
    .navigation li:hover .list2 {opacity: 1;}
    .menu {position: fixed;top: 25px;right: 40px;}
    .menu img{transition:all ease 0.5s;}
    .menu img{width: 29px;height: 29px;cursor:pointer;transform:rotate(0deg);}
    .menu img:hover {transform:rotate(90deg);}
</style>