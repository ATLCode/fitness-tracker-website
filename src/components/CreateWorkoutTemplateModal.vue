<template>
  <Modal>
    <div class="top"><h1>Create Workout Template</h1></div>
    <div class="general">
      <label for="wname">Name</label>
      <CustomInput id="wname" type="text" v-model="name" />
    </div>

    <div class="exercise-buttons">
      <ExerciseCard
        :extra="true"
        :exercises="exercises"
        @delete="deleteExercise"
        caller="CreateWorkoutTemplate"
      />
      <CustomButton fontSize="1rem" @click="showSelectExercise = true"
        >Add Exericse</CustomButton
      >
    </div>
    <div class="bottom">
      <CustomButton @click="saveWorkoutTemplate">Save</CustomButton>
      <CustomButton @click="emit('close')">Cancel</CustomButton>
    </div>
    <ExerciseListModal
      v-if="showSelectExercise"
      @close="showSelectExercise = false"
      @select="addExercise"
    />
  </Modal>
</template>

<script setup>
import CustomButton from "@/components/CustomButton.vue";
import CustomInput from "@/components/CustomInput.vue";
import ExerciseCard from "@/components/ExerciseCard.vue";
import ExerciseListModal from "@/components/ExerciseListModal.vue";
import useWorkoutState from "@/store/useWorkoutState";
import Modal from "@/components/Modal.vue";
import { ref, defineEmits } from "vue";

const { createTemplate, getTemplates } = useWorkoutState();

const emit = defineEmits(["close"]);

const name = ref("");
const exercises = ref([]);

const showSelectExercise = ref(false);

function addExercise(exercise) {
  exercises.value.push(exercise);
}
function deleteExercise(index) {
  exercises.value.splice(index, 1);
}
function saveWorkoutTemplate() {
  const body = {
    name: name.value,
    exercises: exercises.value,
  };

  createTemplate(body);
  getTemplates();
  emit("close");
}
</script>

<style scoped lang="scss">
.general {
  display: grid;
  justify-items: center;
  margin: 0em 2em;
  gap: 0.5em;
}
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 3em;
}

.exercise-buttons {
  display: grid;
  justify-items: center;
  width: 100%;
  gap: 1em;
}
</style>
