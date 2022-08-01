<template>
  <div class="list-user">
    <p>list user data</p>
    <div>
      <UserVue 
      v-for="item in listUser" 
      v-bind:key="item.id" 
      v-bind:user="item"
      v-on:deleteUser="deleteUserList"
      />
    </div>
  </div>
</template>

<script>
import UserVue from "./User.vue";
export default {
  name: "list-user",
  props: {
    listUser: {
      type: Array,
      default: [{ email: "macdinh@gmail.com", active: true }],
    },
  },
  data() {
    return {};
  },
  methods:{
    deleteUserList(idUser, userList){
        this.$emit('deleteUserEvent', idUser, userList)
    }
  },
  components: {
    UserVue,
  },
};
</script>
<style>
</style>




