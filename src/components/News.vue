<template>
  <div class="flex flex-col gap-8">
    <Title text="Novidades"></Title>
    <div class="flex flex-col gap-8 text-custom-black">
      <div class="flex flex-col md:flex-row bg-custom-light-gray rounded-md" v-for="item in news" :key="item.id">
        <img class="w-full md:w-60 rounded-t-md md:rounded-l-md md:rounded-r-none" :src="`../../src/assets/activities/${item.img}`" alt="">
        <div class="flex flex-col gap-4 p-8">
          <div class="flex flex-col gap-1">
            <h3 class="font-bold text-md">{{ item.title }}</h3>
            <h4 class="uppercase text-sm">{{ item.phrase }}</h4>
          </div>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import Title from './Title.vue';

interface News {
  id: number;
  title: string;
  phrase: string;
  img: string;
  text: string;
}

export default {
  props: {
    news: {
      type: Array as PropType<News[]>,
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