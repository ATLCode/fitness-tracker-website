<template>
  <div class="frontpage">
    <div class="content">
      <h1>TRACK YOUR IMPROVEMENT</h1>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.frontpage {
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url("~@/assets/landscape.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
}

h1 {
  color: white;
  line-height: 3rem;
}

.content {
  margin: 1rem;
  margin-top: 25vh;
}
</style>
