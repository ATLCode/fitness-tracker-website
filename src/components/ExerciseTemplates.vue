<template>
  <div class="econtent">
    <ExerciseCard :exercises="state.templates || []" />
    <CustomButton @click="$emit('show-modal')">NEW EXERCISE +</CustomButton>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import ExerciseCard from "@/components/ExerciseCard.vue";
import CustomButton from "@/components/CustomButton.vue";
import useExerciseState from "@/store/useExerciseState";
const { getTemplates, state } = useExerciseState();
onMounted(async () => {
  await getTemplates();
});
</script>

<style scoped lang="scss">
.econtent {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 3px solid $border;
  background-color: $bg-content;
}
</style>
