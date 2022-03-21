<template>
  <div class="filter-bar">
    <div class="name">Name</div>
    <div class="workout-type">Workout Type</div>
    <div class="sport">Sport</div>
    <div class="view">View</div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.filter-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: $text-secondary;
  padding: 5px;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 10px;
}
</style>
