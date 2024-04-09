<script setup lang="ts">
import NavigateButton from './NavigateButton.vue';
</script>

<template>
  <header class="header flex items-end lg:items-center justify-center">
    <div class="flex flex-col gap-8 text-white m-8 lg:mx-auto max-w-screen-lg w-full">
      <h1 class="text-xl lg:text-4xl font-bold">Alcance o seu potencial <br> máximo de saúde e bem-estar.</h1>
      <p class="mb-20 w-full lg:w-1/2">A Max Health é o centro de atividades físicas mais completo e qualificado para você.</p>
      <NavigateButton class="w-full lg:w-max" text="Entre em contato" route="/contato"/>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-image: url(../assets/max-health.png);
  background-size: cover;
  background-position: 70%;
  height: 92vh;
}
</style>