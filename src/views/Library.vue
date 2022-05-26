<template>
  <div class="library-page">
    <Tabs class="tabs" v-model="selectedTab" :tabs="tabs" />
    <div v-if="selectedTab === 'Workouts'" class="workouts">
      <WorkoutCard :workouts="workoutState.templates || []" caller="Library" />
      <CustomButton>NEW WORKOUT +</CustomButton>
    </div>
    <div v-else class="exercises">
      <ExerciseCard
        :exercises="exerciseState.templates || []"
        caller="Library"
      />
      <CustomButton @click="showCreateExercise = true"
        >NEW EXERCISE +</CustomButton
      >
    </div>
    <transition name="fade">
      <CreateExercise
        v-if="showCreateExercise"
        @close="showCreateExercise = false"
      />
    </transition>
  </div>
</template>

<script setup>
//Tabs (Workouts, Execises)
import Tabs from "@/components/Tabs.vue";
import CreateExercise from "@/components/CreateExercise.vue";
import CustomButton from "@/components/CustomButton.vue";
import WorkoutCard from "@/components/WorkoutCard.vue";
import ExerciseCard from "@/components/ExerciseCard.vue";
import useWorkoutState from "@/store/useWorkoutState";
import useExerciseState from "@/store/useExerciseState";

import { ref, onMounted } from "vue";
const tabs = ref(["Workouts", "Exercises"]);
const selectedTab = ref("Workouts");
const showCreateExercise = ref(false);
// const showCreateWorkout = ref(false);

const { getTemplates: getWorkoutTemplates, state: workoutState } =
  useWorkoutState();
const { getTemplates: getExerciseTemplates, state: exerciseState } =
  useExerciseState();
onMounted(async () => {
  await getWorkoutTemplates();
  await getExerciseTemplates();
});
</script>

<style scoped lang="scss">
.library-page {
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url("~@/assets/diary.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
}
.tabs {
  max-width: 95vw;
  display: flex;
  flex-direction: row;
  margin-bottom: 2vh;
}
.workouts {
  display: flex;
  flex-direction: row;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.workouts,
.exercises {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 3px solid $border;
  background-color: $bg-content;
}
</style>
