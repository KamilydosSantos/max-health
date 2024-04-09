<template>
  <div class="px-8 lg:p-0 md:mx-auto max-w-screen-lg w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="activity-card flex flex-col gap-4" v-for="activity in activities" :key="activity.id" :style="{ backgroundImage: `url('../../src/assets/activities/${activity.img}')` }">
      <p class="text-white font-bold text-lg">{{ activity.name }}</p>
      <NavigateButton class="w-full" text="Inscreva-se" route="/sobre" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '../services';
import NavigateButton from './NavigateButton.vue';

interface Activities {
  id: number;
  name: string;
  img: string;
  prices: Price;
  schedules: Schedule[];
}

interface Price {
  weekly: number;
  monthly: number;
}

interface Schedule {
  id: number;
  time: string;
  week_day: string;
  instructor: string;
}

export default {
    setup() {
        const activities = ref<Activities[]>([]);
        onMounted(async () => {
            try {
                const data = await api.get<Activities[]>('/activities');
                activities.value = data;
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        });
        return {
            activities
        };
    },
    components: { NavigateButton }
}
</script>

<style scoped lang="scss">
.activity-card {
  width: 100%;
  max-width: 350px; 
  height: 500px; 
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
}
</style>