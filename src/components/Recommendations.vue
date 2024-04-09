<template>
  <div class="flex flex-col gap-8">
    <h2 class="title font-bold text-2xl lg:text-3xl relative w-max">Recomendações</h2>
    <div class="flex flex-col gap-8 text-custom-black">
      <div class="rounded-md" v-for="recommendation in recommendations" :key="recommendation.id">
        <h3 class="p-4 font-bold text-lg">{{ recommendation.title }}</h3>
        <p>{{ recommendation.text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

interface Recommendation {
  id: number;
  title: string;
  text: string;
}

export default {
  props: {
    recommendations: {
      type: Array as PropType<Recommendation[]>,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.title::before {
  content: "";
  display: block;
  position: absolute;
  top: 30px;
  left: 0;
  height: 4px;
  width: 100%;
  background-color: #FB0;
}
</style>