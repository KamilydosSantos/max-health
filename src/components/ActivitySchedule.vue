<template>
  <div class="flex flex-col gap-8">
    <div class="lg:flex grid grid-cols-2 grid-rows-2 gap-2 justify-between items-center bg-custom-light-gray p-8 rounded-md" v-for="schedule in schedules">
      <div>
        <h3 class="font-bold">Horário</h3>
        <p>{{ schedule.time }}</p>
      </div>
      <div>
        <h3 class="font-bold">Dia da Semana</h3>
        <p>{{ schedule.week_day }}</p>
      </div>
      <NavigateButton class="col-span-2" text="Inscreva-se" route="/contato" />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import NavigateButton from './NavigateButton.vue';

interface Schedule {
  id: number;
  time: string;
  week_day: string;
}

export default {
    props: {
        schedules: Array as PropType<Schedule[]>
    },
    components: { NavigateButton }
}
</script>

<style lang="scss">
</style>