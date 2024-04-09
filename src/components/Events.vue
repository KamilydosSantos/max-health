<template>
  <div class="flex flex-col gap-8 bg-custom-black text-white p-8 rounded-md h-max">
    <h2 class="font-bold text-2xl lg:text-3xl">Eventos</h2>
    <div class="flex flex-col gap-8 text-custom-black">
      <div class="text-white" v-for="event in events" :key="event.id">
        <h3 class="text-sm font-bold">{{ event.date }}</h3>
        <p class="uppercase">{{ event.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

interface Event {
  id: number;
  date: string;
  name: string;
}

export default {
  props: {
    events: {
      type: Array as PropType<Event[]>,
      required: true
    }
  }
}
</script>

<style lang="scss">
</style>