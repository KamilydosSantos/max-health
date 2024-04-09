<template>
  <div class="flex flex-col lg:flex-row lg:mx-auto max-w-screen-lg w-full gap-8">
    <div class="flex flex-col items-center justify-center self-center lg:m-auto text-center p-12 max-w-72 h-72 bg-custom-black text-white rounded-md mx-8" v-for="stat in stats" key="stat.id">
      <span class="font-bold text-4xl w-3/4">+{{ stat.number }}</span>
      <p class="text-md">{{ stat.information }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '../services';

interface Stats {
  id: number;
  number: string;
  information: string;
}

export default {
  setup() {
    const stats = ref<Stats[]>([]);

    onMounted(async () => {
      try {
        const data = await api.get<Stats[]>('/about');
        stats.value = data;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    });

    return {
      stats
    };
  }
}
</script>

<style lang="scss">
</style>