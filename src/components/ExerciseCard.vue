<template>
  <div v-if="showInfo">
    description
    <div>{{ exercise.description }}</div>
  </div>

  <table>
    <tr>
      <th>Name</th>
      <th v-if="details">Exercise Type</th>
      <th v-if="details">Sport</th>
      <th v-if="details">Muscle Group</th>
      <th v-if="extra">Result</th>
      <th v-if="extra">Reps</th>
      <th v-if="extra">Sets</th>
      <th></th>
    </tr>
    <tr v-for="(exercise, index) of exercises" :key="exercise.id">
      <td>{{ exercise.name }}</td>
      <td v-if="details">{{ exercise.exerciseType }}</td>
      <td v-if="details">{{ exercise.sport }}</td>
      <td v-if="details">{{ exercise.muscleGroup || "-" }}</td>
      <td v-if="extra">{{ exercise.result || "-" }}</td>
      <td v-if="extra">{{ exercise.reps || "-" }}</td>
      <td v-if="extra">{{ exercise.sets || "-" }}</td>

      <td v-if="selectTemplate">
        <CustomButton fontSize="0.7rem" @click="emit('select', exercise)"
          >SELECT</CustomButton
        >
      </td>
      <td v-else>
        <CustomButton
          v-if="caller !== 'CreateWorkoutTemplate'"
          fontSize="0.7rem"
          >i</CustomButton
        >
        <CustomButton v-if="caller === 'Library'" fontSize="0.7rem"
          >E</CustomButton
        >
        <CustomButton
          v-if="caller !== 'ExecuteWorkout'"
          fontSize="0.7rem"
          @click="emit('delete', index)"
          >X</CustomButton
        >
      </td>
    </tr>
  </table>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
import CustomButton from "@/components/CustomButton.vue";

defineProps(["exercises", "selectTemplate", "extra", "caller"]);
const emit = defineEmits("select", "delete");
const showInfo = ref();
</script>

<style scoped lang="scss">
table {
  text-align: left;
  width: 100%;
  color: $text-secondary;
}
.view {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
}

tr td:last-child {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5em;
}
</style>
