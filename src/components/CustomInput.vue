<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
  type: String,
  placeholder: String,
});
</script>

<style scoped>
input {
  background-color: rgba(10, 10, 30, 0.8);
  color: rgb(233, 233, 233);
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding: 5px 10px;
  display: block;
  margin: 3px;
}
</style>
