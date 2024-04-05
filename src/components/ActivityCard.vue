<template>
  <div>
    <div v-for="activity in activities" :key="activity.id">
      <img :src="`../assets/activities/atividade-${activity.name}.jpg`" alt="">
      <p>{{ activity.name }}</p>
      <NavigateButton text="Inscreva-se" route="/sobre" />
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

<style lang="scss">

</style>