<template>
    <div class="course">
        <navigation></navigation>
        <caidan></caidan>
        <bottom></bottom>
    </div>
</template>

<script>
    import navigation from '../components/nav/nav'
    import bottom from '../components/bottom/bottom'
    import caidan from '../components/menu/menu'
    export default{
        data(){
            return{

            }
        },
        components:{
            navigation,bottom,caidan
        },
        created(){

        },
        methods:{

        }
    }
</script>


<style scoped>

</style>