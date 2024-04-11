<template>
  <div class="flex flex-col gap-12 lg:gap-24" v-if="activity">
    <CommonHeader :title="activity.name" :subtitle="activity.instructor" />
    <div class="flex flex-col gap-8 px-8 lg:px-0 lg:mx-auto max-w-screen-lg w-full">
      <Title text="Horários" />
      <ActivitySchedule :schedules="activity.schedules" />
    </div>
    <div class="flex flex-col gap-8 px-8 lg:px-0 lg:mx-auto max-w-screen-lg w-full">
      <Title text="Preços" />
      <ActivityPrice :img="activity.img" :prices="activity.prices" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '../services';
import CommonHeader from '../components/CommonHeader.vue';
import Title from '../components/Title.vue';
import ActivityPrice from '../components/ActivityPrice.vue';
import ActivitySchedule from '../components/ActivitySchedule.vue';

interface Activity {
  id: number;
  name: string;
  img: string;
  instructor: string;
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
}

export default {
  props: {
    activityId: {
      type: [Number, String],
      required: true
    }
  },
  setup(props) {
    const activity = ref<Activity | null>(null);
    onMounted(async () => {
      try {
        const id = Number(props.activityId);
        const data = await api.get<Activity>(`/activities/${id}`);
        activity.value = data;
      }
      catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    });
    return {
      activity
    };
  },
  components: { ActivitySchedule, ActivityPrice, Title, CommonHeader }
}
</script>

<style lang="scss">
</style>