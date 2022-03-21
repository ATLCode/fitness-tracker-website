<template>
  <div class="workout-card">
    <div class="name">Workout Name</div>
    <div class="workout-type">General</div>
    <div class="sport">Disc Golf</div>
    <div class="view">V</div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.workout-card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: $text-secondary;
  padding: 5px;
}
</style>
