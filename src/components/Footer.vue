<template>
    <div>
        <h1>{{tittleFooter}}</h1>
        <h2>{{text}}</h2>
    </div>
</template>

<script>
export default {
    name: "Footer",
    props:{
        tittleFooter: {
            type: String,
            default: ' gia tri mac dinh'
        }
    },
    data(){
        return{
            text: 'footer tuancan'
        }
    }
}
</script>

<style>

</style>
