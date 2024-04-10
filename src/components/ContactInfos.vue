<script setup lang="ts">
  import Title from './Title.vue';
</script>

<template>
  <div class="flex flex-col gap-8">
    <Title text="Estamos aqui para te ajudar!" />
    <p>Entre em contato conosco para tirar dúvidas, enviar sugestões ou simplesmente compartilhar sua jornada de saúde e fitness conosco. Estamos ansiosos para ouvir de você!</p>
    <div class="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-0">
      <div>
        <p class="font-bold">Rua Alí Perto, 11</p>
        <p>Bela Vista</p>
        <p>Porto Alegre - RS</p>
      </div>
      <div>
        <p class="font-bold">Horário de Atendimento</p>
        <p>Segunda à sábado</p>
        <p>08:00 - 22:00</p>
      </div>
    </div>
    <div class="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-0">
      <div>
        <p class="font-bold">Contato</p>
        <p>+55 51 99999-9999</p>
        <p>contato@maxhealth.com</p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-bold">Nos siga</p>
        <div class="flex gap-4">
          <img src="../assets/icon-facebook.svg" alt="">
          <img src="../assets/icon-instagram.svg" alt="">
          <img src="../assets/icon-youtube.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>