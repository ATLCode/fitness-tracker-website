<template>
  <div class="wcontent">
    <WorkoutCard :workouts="state.templates || []" />
    <CustomButton>NEW WORKOUT +</CustomButton>
  </div>
</template>

<script setup>
//Tabs (Workouts, Execises)
import { onMounted } from "vue";
import CustomButton from "@/components/CustomButton.vue";
import WorkoutCard from "@/components/WorkoutCard.vue";
import useWorkoutState from "@/store/useWorkoutState";

const { getTemplates, state } = useWorkoutState();
onMounted(async () => {
  await getTemplates();
  console.log(state);
});
</script>

<style scoped lang="scss">
.wcontent {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 3px solid $border;
  background-color: $bg-content;
}
</style>
