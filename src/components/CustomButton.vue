<template>
  <button :style="`font-size: ${fontSize}`"><slot /></button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["fontSize"]);
</script>

<style scoped lang="scss">
button {
  display: block;
  background-color: $bg-button2;
  color: $text-secondary;
  font-size: 1.5rem;
  padding: 0.5rem 1.5rem;
  border: none;
  transition: 100ms;

  &:hover {
    background-color: lighten($bg-button2, 10%);
    cursor: pointer;
  }
}
</style>
