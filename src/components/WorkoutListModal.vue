<template>
  <Modal width="60%">
    <div class="content">
      <WorkoutCard
        :workouts="state.templates"
        :selectTemplate="true"
        @select-workout="addWorkout"
      />
      <div class="footer">
        <CustomButton
          fontSize="1.25rem"
          @click="emit('create-workout-template')"
          >Create New Workout Template</CustomButton
        >
        <CustomButton fontSize="1.25rem" @click="emit('close')"
          >Cancel</CustomButton
        >
      </div>
    </div>
  </Modal>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import CustomButton from "@/components/CustomButton.vue";
import WorkoutCard from "@/components/WorkoutCard.vue";
import useWorkoutState from "@/store/useWorkoutState";
import { defineEmits } from "vue";
const { getTemplates, state, selectWorkout } = useWorkoutState();

const emit = defineEmits("close", "select", "create-workout-template");

function addWorkout(workout) {
  selectWorkout(workout);
  // Add to database
  console.log(workout);
  emit("close");
}

getTemplates();
</script>

<style scoped lang="scss">
.content {
  display: grid;
  gap: 5em;
}

.footer {
  display: grid;
  justify-items: center;
  grid-template-columns: auto auto;
  gap: 2em;
}
</style>
