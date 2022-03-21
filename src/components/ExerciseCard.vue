<template>
  <div class="exercise-card">
    <div class="name">template.name</div>
    <div class="exercise-type">Gym</div>
    <div class="sport">Gym</div>
    <div class="muscle-group">Quadriceps</div>
    <div class="view">I E X</div>
  </div>
  <div v-if="showInfo">
    description
    <div></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["template"]);
</script>

<style scoped lang="scss">
.exercise-card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
  color: $text-secondary;
  padding: 5px;
}
</style>
