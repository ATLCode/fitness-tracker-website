<template>
  <div class="library-page">
    <Tabs class="tabs" v-model="selectedTab" :tabs="tabs" />
    <div v-if="selectedTab === 'Workouts'" class="workouts">
      <WorkoutTemplates @show-modal="showCreateWorkout = true" />
    </div>
    <div v-else class="exercises">
      <ExerciseTemplates @show-modal="showCreateExercise = true" />
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
import ExerciseTemplates from "@/components/ExerciseTemplates.vue";
import WorkoutTemplates from "@/components/WorkoutTemplates.vue";
import CreateExercise from "@/components/CreateExercise.vue";
import { ref } from "vue";
const tabs = ref(["Workouts", "Exercises"]);
const selectedTab = ref("Workouts");
const showCreateExercise = ref(false);
const showCreateWorkout = ref(false);
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
</style>
