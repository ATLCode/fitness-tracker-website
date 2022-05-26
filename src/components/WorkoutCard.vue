<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Exercise Types</th>
      <th>Sports</th>
      <th></th>
    </tr>
    <tr v-for="workout of workouts" :key="workout.id">
      <td>{{ workout.name }}</td>
      <td>{{ exerciseTypes(workout) }}</td>
      <td>{{ sports(workout) }}</td>

      <td v-if="selectTemplate">
        <CustomButton fontSize="0.7rem" @click="emit('select-workout', workout)"
          >SELECT</CustomButton
        >
      </td>
      <td v-else>
        <CustomButton fontSize="0.7rem">i</CustomButton>
        <CustomButton fontSize="0.7rem" v-if="caller === 'Library'"
          >E</CustomButton
        >
        <CustomButton fontSize="0.7rem" v-if="caller === 'Library'"
          >X</CustomButton
        >
      </td>
    </tr>
  </table>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import CustomButton from "@/components/CustomButton.vue";

defineProps(["workouts", "caller", "selectTemplate"]);
const emit = defineEmits("select-workout");

function exerciseTypes(workout) {
  const exerciseTypes = new Set([
    ...workout.exercises.map((exercise) => exercise.exerciseType),
  ]);
  return Array.from(exerciseTypes).join(" / ");
}

function sports(workout) {
  const sports = new Set([
    ...workout.exercises.map((exercise) => exercise.sport),
  ]);
  return Array.from(sports).join(" / ");
}
</script>

<style scoped lang="scss">
table {
  color: $text-secondary;
}
tr td:last-child {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5em;
}
</style>
