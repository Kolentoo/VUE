<template>
    <div class="pics font">
        <navigation></navigation>
        <div class="banner">
            <h1>See The Top Trending Photos</h1>
            <h2>get inspired by our professionally curated galleries.</h2>
        </div>
    </div>
</template>

<script>
    import navigation from '../components/navigation/navigation'
    export default{
        components:{
            navigation
        }
    }

</script>

<style>
    .banner {background: url(../public/images/pics.jpg) no-repeat center center;background-size:cover;transition:all ease 0.5s;
    height: 714px;}
    .banner h1{font-size: 60px;text-align: center;color:#fff;padding-top: 320px;font-weight:bold;line-height: 60px;}
    .banner h2{text-align: center;color:#fff;font-size: 40px;font-weight:bold;}
</style>
