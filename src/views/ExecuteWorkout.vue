<template>
  <div class="container">
    <div class="form">
      <div class="top"><h1>Execute Workout</h1></div>
      <div class="general">
        <div>
          <div class="infoLabel">Date</div>
          <div class="info">15/04/2022</div>
        </div>
        <div>
          <div class="infoLabel">Workout Name</div>
          <div class="info">Jalkapäivä</div>
        </div>
        <div>
          <div class="infoLabel">Description</div>
          <div class="info">Tsemmpiä</div>
        </div>
      </div>

      <div class="exercise-buttons">
        <ExerciseCard
          :extra="true"
          :exercises="exercises"
          @delete="deleteExercise"
          caller="ExcuteWorkout"
        />
      </div>
      <div class="bottom">
        <CustomButton>Save</CustomButton>
        <CustomButton>Cancel</CustomButton>
      </div>
    </div>
    <ExerciseListModal
      v-if="showSelectExercise"
      @close="showSelectExercise = false"
      @select="addExercise"
    />
  </div>
</template>

<script setup>
import CustomButton from "@/components/CustomButton.vue";

import ExerciseCard from "@/components/ExerciseCard.vue";
import ExerciseListModal from "@/components/ExerciseListModal.vue";
</script>

<style scoped lang="scss">
.container {
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url("~@/assets/weight.jpg");
  background-size: cover;
}
.form {
  display: grid;
  justify-items: center;
  background-color: $background;
  margin: 0px auto;
  width: 80%;
  border: 3px solid $border2;
  color: $text-secondary;
  gap: 1rem;
  padding: 1rem;
}

.general {
  display: grid;
  justify-items: center;
  margin: 0 2rem;
  gap: 1rem;
}
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.exercise-buttons {
  display: grid;
  justify-items: center;
  width: 100%;
  gap: 1rem;
}
.infoLabel {
  font-size: 1rem;
}
.info {
  font-size: 1.5rem;
}
</style>
