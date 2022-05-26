<template>
  <Modal width="60%">
    <div class="content">
      <ExerciseCard
        :selectTemplate="true"
        :exercises="state.templates"
        @close="emit('close')"
        @select="selectTemplate"
      />
      <div class="footer">
        <CustomButton fontSize="1.25rem" @click="createExercise"
          >Add New Template</CustomButton
        >
        <CustomButton fontSize="1.25rem" @click="emit('close')"
          >Cancel</CustomButton
        >
      </div>
    </div>

    <CreateExercise v-if="showCreateExercise" @close="close" />
  </Modal>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import ExerciseCard from "@/components/ExerciseCard.vue";
import CustomButton from "@/components/CustomButton.vue";
import useExerciseState from "@/store/useExerciseState";
import CreateExercise from "@/components/CreateExercise.vue";
import { defineEmits, ref } from "vue";
const { getTemplates, state } = useExerciseState();
const showCreateExercise = ref(false);
const emit = defineEmits("close", "select");

function createExercise() {
  showCreateExercise.value = true;
}

function close() {
  showCreateExercise.value = false;
}

function selectTemplate(exercise) {
  emit("select", exercise);
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
