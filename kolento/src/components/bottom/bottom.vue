<template>
    <div class="bottom" :class="{top:ok}">
        <ul class="bottom-con clearfix">
            <li class="bottom-list fl" v-for="bottom in bottoms">
                <i :class="bottom.icon" class="iconfont"></i>
                <p class="txt">{{bottom.txt}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                bottoms:[],
                ok:false
            }
        },
        created(){
            this.$axios.get('/api/home').then((res)=>{
                this.bottoms=res.data.data.us;
            });
            this.ok=true
        }
    }
</script>

<style scoped>
    .bottom {position: fixed;bottom:-10rem;left: 0;width: 100%;background: #fff;height: 10rem;border-top: 0.1rem solid #ccc;;
    z-index:100;box-shadow:0 0 0.1rem rgba(0,0,0,0.1);transition:all ease 0.5s;opacity: 0;}
    .bottom-con {margin-top: 1rem;}
    .bottom-list {width: 25%;text-align: center;}
    .iconfont {font-size: 3.8rem;line-height: 5.2rem;}
    .txt {font-size: 2rem;color:#333;line-height: 2.2rem;color:#555;}
    .top {bottom: 0rem;opacity: 1;}
</style>