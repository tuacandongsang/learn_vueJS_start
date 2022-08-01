<template>
  <div>
    <span>{{ text }}</span>
    <span>{{ user.email }}</span> 
    <span>{{user.id}}</span>
    <button
    v-on:click="handleDelete"
    class="delete"
    > delete {{user.id}}</button>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      text: "user",
    };
  },
  methods:{
    handleDelete(){
        const id = this.user.id
        const userList = this.user
        this.$emit('deleteUser', id , userList)
    }
  }
};
</script>

<style>
h1 {
  color: red;
}
.delete{
    background-color: red;
}
</style>