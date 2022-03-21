<template>
  <button :style="`height: ${height}`"><slot /></button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  height: String,
});
</script>

<style scoped lang="scss">
button {
  background-color: $bg-button2;
  color: $text-secondary;
  font-size: 2rem;
  padding: 10px 50px;
  border: none;
}
</style>
