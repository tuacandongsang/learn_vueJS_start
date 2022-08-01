<template>
  <div>
    <div class="slot_tittle">
      {{ tittle }}
      <i class="bi bi-search-heart"></i>
    </div>
    <div>
        <slot></slot>
    </div>
  </div>
</template>
<script>
import slot from './slot.vue';
export default {
  components: { slot },
  name: "SlotItem",
  props: {
    tittle: String,
  },
};
</script>
<style>
.slot_tittle {
  color: black;
}
</style>