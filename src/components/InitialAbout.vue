<script setup lang="ts">
import Title from './Title.vue';
import NavigateButton from './NavigateButton.vue';

</script>

<template>
  <div class="grid grid-rows-[auto,1fr] lg:grid-cols-2 gap-8 items-center m-8 lg:mx-auto max-w-screen-lg">
    <div class="flex flex-col gap-8 h-max text-custom-black">
      <Title text="Instrutores e instalações qualificadas" />
      <p>Contamos com instalações bem equipadas e modernas, incluindo uma variedade de equipamentos de fitness de última geração. Temos também uma equipe de instrutores experientes e certificados, capazes de oferecer orientação profissional e motivadora aos membros.</p>
      <NavigateButton text="Nos Conheça" route="/sobre" />
    </div>
    <div>
      <img class="w-full" src="../assets/mh-instructor.png" alt="">
    </div>
  </div>
</template>

<style scoped>
</style>