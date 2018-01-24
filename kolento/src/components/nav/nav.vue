<template>
    <div class="nav clearfix">
        <a class="logo block fl" href="/index"><img class="logo-pic vm" src="./immoic.png" alt=""></a>
        <div class="label fl">
            <input class="search" type="text" placeholder="请输入关键字" @keyup.enter="search">
            <img class="search-icon" src="./search-icon.jpg" alt="" @click="search">
        </div>
        <p class="download fr" @click="download">下载客户端</p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        },
        created(){

        },
        methods:{
            download(){
                alert('没客户端')
            },
            search(){
                alert('你想搜啥')
            }
        }
    }
</script>

<style>
    .nav {background: #fff;padding:3rem;}
    .logo {width: 16.4rem;}
    .logo-pic {width: 100%;}
    .label {width: 27rem;position: relative;margin-left: 6rem;}
    .search {width: 25rem;border-radius:0.8rem;background: #F3F5F7;color:#B7BBBF;font-size: 2.8rem;padding-left: 3rem;
    height: 5rem;line-height: 5rem;color:#333;}
    .search-icon {width: 3.4rem;position: absolute;top: 1rem;right: 2rem;}
    .download {width: 15rem;border: 1px solid #71777D;color:#71777D;font-size: 2.4rem;text-align: center;border-radius:0.8rem;
    height: 5rem;line-height: 5rem;transition:all ease 0.5s;}
    /*.download:hover {background: #71777D;color:#fff;}*/
</style>