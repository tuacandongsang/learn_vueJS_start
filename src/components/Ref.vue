<template>
  <div>
    <h1>Ref</h1>
    <button v-on:click="avartaClick" class="avarta">click me</button>
    <input ref="inputFile" class="avartaInput" type="file" />
  </div>
</template>

<script>
export default {
  name: "Ref",
  methods: {
    avartaClick() {
      this.$refs.inputFile.click();
    },
  },
};
</script>
<style>
.avarta {
  padding: 4px 8px;
  color: aliceblue;
  background: #555;
  border-radius: 8px;
  font-weight: 700;
}
.avarta:hover {
  color: #555;
  background: aliceblue;
}
.avartaInput {
  display: none;
}
</style>
