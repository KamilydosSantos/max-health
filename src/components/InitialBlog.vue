<template>
  <div class="flex flex-col gap-8 bg-custom-black text-white p-8">
    <h1 class="font-bold text-xl text-center">Informações personalizadas</h1>
    <div v-for="item in items" :key="item.id">
      <DynamicIcon :iconName="item.icon" />
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '../services';
import DynamicIcon from './DynamicIcon.vue';

interface Item {
  id: number;
  icon: string;
  text: string
}

const items = ref<Item[]>([]);

async function fetchItems() {
  try {
    const response = await api.get<Item[]>('/initial');
    items.value = response;
    console.log(items.value);
  } catch(error) {
    console.error('Erro ao carregar os itens:', error);
  }
}

onMounted(() => {
  fetchItems();
});
</script>

<style lang="scss">
</style>
