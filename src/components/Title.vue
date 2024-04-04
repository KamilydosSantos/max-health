<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h2 class="title text-2xl lg:text-3xl text-custom-black font-bold relative">{{ text }}</h2>
</template>

<style lang="scss">
.title::before {
  content: "";
  display: block;
  position: absolute;
  top: 15px;
  left: -25px;
  height: 45.4px;
  width: 50px;
  background-image: url(../assets/title-detail.svg);
  z-index: -1;
}
</style>