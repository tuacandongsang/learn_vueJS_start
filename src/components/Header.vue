<template>
  <header>
    <button v-on:click="handleHeaderTittle">thay doi title tu Header.vue</button>
    <h1 v-for="item in tittle"
    v-bind:key="item.id"
    >{{item.email}}</h1>
    <h2>{{text}}</h2>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  props:{
    tittle: Array
  },
  data() {
    return {
      text: "tuancandongsang",
    };
  },
  methods:{
    handleHeaderTittle(e){
      var data={
        tittle: 'tittle truyen tu header len app'
      }
      this.$emit('changeTittelEvent', data)
      // return console.log(this.tittle);
    },
  }
};
</script>

<style>
</style>



