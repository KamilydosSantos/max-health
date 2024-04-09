<template>
  <div class="flex flex-col gap-8">
    <Title text="Curiosidades"></Title>
    <div class="flex flex-col gap-8 text-custom-black">
      <div class="bg-custom-light-gray p-8 rounded-md" v-for="curiosity in curiosities" :key="curiosity.id">
        <h3 class="font-bold text-lg">{{ curiosity.title }}</h3>
        <p>{{ curiosity.text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import Title from './Title.vue';

interface Curiosity {
  id: number;
  title: string;
  text: string;
}

export default {
  props: {
    curiosities: {
      type: Array as PropType<Curiosity[]>,
      required: true
    }
  },
  components: {
    Title
  }
}
</script>

<style lang="scss">
</style>