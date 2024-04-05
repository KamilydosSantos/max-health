<template>
  <div>
    <Title text="{{ activityType }}" />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '../services';
import NavigateButton from '../components/NavigateButton.vue';
import Title from '../components/Title.vue';

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
        props: ['activityType']
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
    components: { NavigateButton, Title }
}
</script>

<style lang="scss">

</style>