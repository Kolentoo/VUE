<template>
    <div class="menu">
        <ul class="menu-con">
            <li class="menu-list" v-for="menu in menus">
                {{menu.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                menus:[]
            }
        },
        created(){
            this.$axios({
                method: 'get',
                url: '/api/channel',
                data: {
                    'firstName': 'Fred',
                    'lastName': 'Flintstone'
                }
            }).then((res)=>{
                this.menus=res.data.data.course.menu
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .menu {width: 20%;}
    .menu-list {width: 100%;text-align: center;height: 11rem;line-height: 11rem;font-size: 2.4rem;color:#333;border-bottom: 0.1rem solid #e6e6e6;}
    .menu-list:last-child {border-bottom: none;}
</style>