<template>
  <div class="wcontent">
    <WorkoutFilter />
    <WorkoutCard />
    <CustomButton>NEW WORKOUT +</CustomButton>
  </div>
</template>

<script setup>
//Tabs (Workouts, Execises)
import CustomButton from "@/components/CustomButton.vue";
import WorkoutFilter from "@/components/WorkoutFilter.vue";
import WorkoutCard from "@/components/WorkoutCard.vue";
</script>

<style scoped lang="scss">
.wcontent {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 5px solid $border;
  background-color: $bg-content;
}
</style>
