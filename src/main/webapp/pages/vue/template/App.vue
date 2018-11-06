<template>
    <!--定义的是html模板-->
    <p>{{greeting}},World!!!</p>
</template>

<script>
    import 'jquery';
    /*相当于new Vue*/
    export default {
        name: "App",
        data () {
            return {
                greeting:"Hello"
            }
        },
        beforeCreate(){
            this.before_create();
        },
        create(){
            this.v_create();
        },
        beforeMount(){
            this.before_mount();
        },
        mounted(){
            this.v_mounted();
        },
        beforeUpdate(){
            this.beforeUpdate();
        },
        /*方法定义区域*/
        methods:{
            /**/
            before_create(){
                console.log(document);
            },
            v_create(){
                console.log(document);
            },
            before_mount(){
                console.log(document);
            },
            v_mounted(){
                console.log(document);
            },
            before_update(){
                console.log(document);
            }
        }
    }
</script>

<style scoped>
    @import "../../../style/vue/main.css";
</style>