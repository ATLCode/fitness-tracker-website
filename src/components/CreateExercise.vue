<template>
  <div class="modal">
    <div class="content">
      <div class="name">
        <label for="ename">Exercise Name</label>
        <CustomInput id="ename" type="text" />
      </div>
      <div class="type">
        <label for="etype">Exercise Type</label>
        <CustomInput type="text" id="etype" />
      </div>
      <div class="sport">
        <label for="esport">Exercise Sport</label>
        <CustomInput type="text" id="esport" />
      </div>
      <div class="mg">
        <label for="emg">Muscle Group</label>
        <CustomInput type="text" id="emg" />
      </div>
      <div class="desc">
        <label for="desc">Description</label>
        <CustomInput type="textarea" id="desc" />
      </div>
      <div class="save">
        <CustomButton>Save</CustomButton>
      </div>
      <div class="cancel">
        <CustomButton @click="$emit('close')">Cancel</CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
</script>

<style scoped lang="scss">
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
}

.content {
  display: grid;
  grid-template-areas:
    "name type sport mg"
    "desc desc desc desc"
    "save save cancel cancel";
  row-gap: 15px;
  background-color: $background;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 3px solid $border2;
  width: 80%; /* Could be more or less, depending on screen size */
}

.desc {
  grid-area: desc;
}

.save {
  grid-area: save;
}
.cancel {
  grid-area: cancel;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}
</style>
