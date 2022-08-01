<template>
  <div id="app">
    <button v-on:click="tittle ='da thay doi title tu APP.vue'">thay doi title</button>
    <Ref />
    <SlotVue />
    <HeaderComp 
    v-on:changeTittelEvent="handleChangTittle"
    v-bind:tittle="listUser" />
    <ListUserVue
    v-on:deleteUserEvent="deleteUserEvent"
    v-bind:listUser="listUser" />
    <router-view/>
    <FooterVue v-bind:tittleFooter="tittle" />
  </div>
</template>

<script>
import HeaderComp from './components/Header.vue'
import FooterVue from './components/Footer.vue'
import ListUserVue from './components/ListUser.vue'
import Ref from './components/Ref.vue'
import SlotVue from './components/slot.vue'

export default {
  name: 'App',
  data(){
    return{
      tittle: "tittle tuancan header",
      listUser:[
        {id: 1 , email: 'user1@gmail', active: true},
        {id: 12 , email: 'user2@gmail', active: true},
        {id: 13 , email: 'user3@gmail', active: false},
        {id: 14 , email: 'user4@gmail', active: true},
      ],
      tittleFooter: 'footer tuan ',
    }
  },
  methods:{
    handleChangTittle(e){
      this.tittle = e.tittle
    },
    deleteUserEvent(idUser, userList){
      const index = this.listUser.findIndex(item => item.id === idUser)
      this.listUser.splice(index, 1)
      // this.tittle = userList
    }

  },
  components:{
    HeaderComp,
    FooterVue,
    ListUserVue,
    Ref, SlotVue
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
