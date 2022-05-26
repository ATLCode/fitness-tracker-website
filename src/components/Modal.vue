<template>
  <div class="modal">
    <div class="content" :style="`width: ${width}`">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, onBeforeUnmount } from "vue";

defineProps(["width"]);
const emit = defineEmits(["close"]);
window.addEventListener("keydown", handleKeyEvent);

function handleKeyEvent(e) {
  switch (e.keyCode) {
    case 27:
      emit("close");
      break;

    default:
      break;
  }
}
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyEvent);
});
</script>

<style scoped lang="scss">
.modal {
  display: grid;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  place-items: center;
}

.content {
  display: grid;
  background-color: $background;
  padding: 20px;
  border: 3px solid $border2;
  width: 80%;
  color: $text-secondary;
}
</style>
