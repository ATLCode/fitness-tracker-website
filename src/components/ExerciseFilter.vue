<template>
  <div class="filter-bar">
    <div class="name">Name</div>
    <div class="workout-type">Exercise Type</div>
    <div class="sport">Sport</div>
    <div class="muscle-group">Muscle Group</div>
    <div class="change">Icons</div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.filter-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
  color: $text-secondary;
  padding: 5px;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 10px;
}
</style>
