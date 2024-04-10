<script setup lang="ts">
</script>

<template>
  <div>
    <form @submit.prevent class="flex flex-col gap-4 bg-custom-light-gray p-8 rounded-md">
      <div class="flex flex-col gap-1">
        <label for="name">Nome completo</label>
        <input class="p-2 rounded-sm" type="text" name="name">
      </div>
      <div class="flex flex-col gap-1">
        <label for="email">Email</label>
        <input class="p-2 rounded-sm" type="text" name="email">
      </div>
      <div class="flex flex-col gap-1">
        <label for="mensagem">mensagem</label>
        <textarea class="p-2 rounded-sm resize-none h-32" type="text" name="mensagem"></textarea>
      </div>
      <button class="flex items-center justify-center gap-4 bg-custom-yellow text-custom-black py-4 px-8 uppercase rounded-sm text-lg w-max mx-auto cursor-pointer">Enviar</button>
    </form>
  </div>
</template>

<style lang="scss">
</style>