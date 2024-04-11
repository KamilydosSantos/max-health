<template>
  <div class="px-8 lg:p-0 md:mx-auto max-w-screen-lg w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="activity-card flex flex-col gap-4" v-for="activity in activities" :key="activity.id" :style="{ backgroundImage: `url('../../src/assets/activities/${activity.img}')` }">
      <div>
        <p class="text-white font-bold text-lg">{{ activity.name }}</p>
        <p class="text-white text-sm">{{ activity.instructor }}</p>
      </div>
      <button class="bg-custom-yellow text-custom-black p-4 uppercase rounded-sm text-lg" @click="navigateToActivity(activity.id)">Ver detalhes</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '../services';

interface Activities {
  id: number;
  name: string;
  img: string;
  instructor: string;
  prices: Price;
  schedules: Schedule[];
}

interface Price {
  weekly: string;
  monthly: string;
}

interface Schedule {
  id: number;
  time: string;
  week_day: string;
}

export default {
    setup() {
        const activities = ref<Activities[]>([]);
        const router = useRouter();

        const navigateToActivity = (activityId: number) => {
          router.push(`/atividades/${activityId}`);
          };
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
            activities,
            navigateToActivity
        };
    }
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