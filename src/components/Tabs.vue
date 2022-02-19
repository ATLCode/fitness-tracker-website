<template>
  <div class="tabs">
    <div
      v-for="tab in tabs"
      :key="tab"
      class="tab"
      :class="{ active: modelValue === tab }"
      @click="selectTab(tab)"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
  tabs: {
    type: Array,
    requrired: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
function selectTab(tab) {
  emit("update:modelValue", tab);
}
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  width: 100%;
  .tab {
    flex: 1;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
  }
  .active {
    background: rgba(5, 5, 15, 0.5);
    color: white;
  }
}
</style>
