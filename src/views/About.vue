<template>
  <div class="flex flex-col gap-12 lg:gap-24">
    <CommonHeader title="Sobre Nós" subtitle="Instrutores e instalações qualificadas" />
    <div class="grid grid-rows-[auto,1fr] lg:grid-cols-2 gap-8 items-center lg:mx-auto max-w-screen-lg w-full">
      <div class="flex flex-col gap-8 h-max text-custom-black mx-8 lg:mx-0">
        <Title text="Quem somos?"></Title>
        <p>Fundada por entusiastas do fitness, a Max Health é uma academia dedicada ao bem-estar holístico. Oferecemos uma variedade de atividades e recursos para ajudar nossos membros a alcançarem seus objetivos de saúde e felicidade. Junte-se a nós e descubra o seu potencial máximo!</p>
      </div>
      <div class="galery flex flex-wrap gap-4 m-8 lg:m-0">
        <img src="../assets/local/local-musculacao.jpg" alt="musculacao">
        <img src="../assets/local/local-padel.jpg" alt="padel">
        <img src="../assets/local/local-natacao.jpg" alt="natacao">
      </div>
    </div>
    <Stats />
  </div>
</template>

<script setup lang="ts">
import CommonHeader from '../components/CommonHeader.vue';
import Title from '../components/Title.vue';
import Stats from '../components/Stats.vue';
</script>

<style lang="scss">
.galery img {
  flex: 1;
  min-width: 200px;
  border-radius: 6px;
  &:first-child {
    min-width: 100%;
  }
}
</style>