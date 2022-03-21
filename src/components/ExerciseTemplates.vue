<template>
  <div class="econtent">
    <ExerciseFilter />
    <ExerciseCard
      v-for="template of templates"
      :template="template"
      :key="template.id"
    />
    <CustomButton @click="$emit('show-modal')">NEW EXERCISE +</CustomButton>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import ExerciseCard from "@/components/ExerciseCard.vue";
import ExerciseFilter from "@/components/ExerciseFilter.vue";
import CustomButton from "@/components/CustomButton.vue";

const res = await fetch("http://localhost:8000/exercises/templates", {
  headers: {
    Authorize: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});
console.log(res);
const templates = reactive(await res.json());
</script>

<style scoped lang="scss">
.econtent {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 5px solid $border;
  background-color: $bg-content;
}
</style>
