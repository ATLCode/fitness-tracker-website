<template>
  <Modal>
    <div class="content">
      <div class="name">
        <label for="ename">Exercise Name</label>
        <CustomInput id="ename" type="text" v-model="body.name" />
      </div>
      <div class="type">
        <label for="etype">Exercise Type</label>
        <CustomInput
          id="wtype"
          type="select"
          :options="['Gym', 'Cardio', 'Accuracy', 'Distance']"
          v-model="body.exerciseType"
        />
      </div>
      <div class="sport">
        <label for="esport">Exercise Sport</label>
        <CustomInput type="text" id="esport" v-model="body.muscleGroup" />
      </div>
      <div class="mg">
        <label for="emg">Muscle Group</label>
        <CustomInput type="text" id="emg" v-model="body.sport" />
      </div>
      <div class="desc">
        <label for="desc">Description</label>
        <CustomInput type="textarea" id="desc" v-model="body.description" />
      </div>
      <div class="save">
        <CustomButton @click="createExercise">Save</CustomButton>
        <CustomButton @click="emit('close')">Cancel</CustomButton>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
import Modal from "@/components/Modal.vue";
import { reactive, defineEmits } from "vue";
import useExerciseState from "@/store/useExerciseState";
const { createTemplate } = useExerciseState();

const emit = defineEmits(["close"]);

const body = reactive({
  name: null,
  exerciseType: null,
  muscleGroup: null,
  description: null,
});

function createExercise() {
  createTemplate(body);
  emit("close");
}
</script>

<style scoped lang="scss">
.content {
  display: grid;
  grid-template-areas:
    "name type "
    "sport desc "
    "mg  desc"
    "save save";
  gap: 15px;
}

.name {
  grid-area: name;
}

.type {
  grid-area: type;
}

.sport {
  grid-area: sport;
}

.mg {
  grid-area: mg;
}

.desc {
  grid-area: desc;
  textarea {
    height: 100%;
  }
}

.save {
  grid-area: save;
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto;
  gap: 10em;
}

label {
  color: $text-secondary;
  font-size: 2rem;
  align-self: flex-start;
}

.name,
.type,
.sport,
.mg,
.desc {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 15px;
}
</style>
