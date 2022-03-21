<template>
  <textarea v-if="type === 'textarea'" rows="3" />
  <input
    v-else
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  modelValue: String,
  type: String,
  placeholder: String,
});

const emit = defineEmits(["update:modelValue"]);

function updateValue(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<style scoped lang="scss">
input,
textarea {
  background-color: $bg-input;
  color: $text-secondary;
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding: 5px 10px;
  display: block;
  margin: 3px;

  &::placeholder {
    color: hsla(0, 0%, 70%, 0.9);
  }
}

textarea {
  width: 100%;
}
</style>
