<template>
  <div v-if="prices">
    <div class="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
      <div class="bg-custom-light-gray rounded-md h-max">
        <img class="max-h-96 w-full object-cover rounded-t-md" :src="`../../src/assets/activities/${img}`" alt="">
        <div class="flex flex-col gap-4 items-center p-8">
          <div class="flex flex-col gap-8">
            <h3 class="font-bold text-lg">Semanal</h3>
            <ul class="text-sm flex flex-col gap-4">
              <li>Direito a uma aula por semana no horário escolhido</li>
              <li>Acompanhamento personalizado</li>
            </ul>
            <p class="font-bold text-2xl text-center">R$ {{ prices.weekly }}</p>
          </div>
          <NavigateButton class="w-max" text="Entre em contato" route="/contato" />
        </div>
      </div>
      <div class="recommended bg-custom-light-gray rounded-md h-max relative">
        <img class="max-h-96 w-full object-cover rounded-t-md" :src="`../../src/assets/activities/${img}`" alt="">
        <div class="flex flex-col gap-4 items-center p-8">
          <div class="flex flex-col gap-8">
            <h3 class="font-bold text-lg">Mensal</h3>
            <ul class="text-sm flex flex-col gap-4">
              <li>Direito a uma aula por semana no horário escolhido</li>
              <li>Acompanhamento personalizado</li>
              <li>Pague mais barato</li>
            </ul>
            <p class="font-bold text-2xl text-center">R$ {{ prices.monthly }}</p>
          </div>
          <NavigateButton class="w-max" text="Entre em contato" route="/contato" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import NavigateButton from './NavigateButton.vue';

interface Price {
  weekly: number;
  monthly: number;
}

export default {
    props: {
        prices: {
            type: Object as PropType<Price>,
            required: true
        },
        img: String
    },
    components: { NavigateButton }
};
</script>

<style scoped lang="scss">
.recommended::before {
  content: "Recomendado";
  background-color: #FB0;
  position: absolute;
  top: -15px;
  left: -15px;
  color: #1E1E1E;
  padding: 6px;
  border-radius: 2px;
  font-size: small;
}
</style>