<script setup lang="ts">
import Title from './Title.vue';
import NavigateButton from './NavigateButton.vue';

</script>

<template>
  <div class="grid grid-rows-[1ft,auto] lg:grid-cols-2 gap-8 items-center mx-8 lg:mx-auto max-w-screen-lg">
    <div>
      <img class="w-full" src="../assets/mh-activities.png" alt="">
    </div>
    <div class="flex flex-col gap-8 h-max text-custom-black">
      <Title text="Uma variedade de atividades e exercícios" />
      <p>Oferecemos uma ampla gama de modalidades de exercícios e atividades para atender às preferências e necessidades dos nossos clientes. Além da possibilidade de serviços de treinamento pessoal individualizado e programas de exercícios adaptados às suas metas e habilidades específicas.</p>
      <NavigateButton class="w-full lg:w-max" text="Nossas Atividades" route="/atividades" />
    </div>
  </div>
</template>

<style scoped>
</style>