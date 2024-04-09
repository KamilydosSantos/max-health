<template>
  <div class="flex flex-col gap-12 lg:gap-24">
    <CommonHeader title="Blog" subtitle="Informações personalizadas para você" />
    <div class="flex flex-col gap-12 lg:gap-24 mx-8 lg:mx-auto max-w-screen-lg">
      <div class="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24">
        <Curiosities :curiosities="curiosities" />
        <div class="flex flex-col gap-12">
          <Events :events="events" />
          <Recommendations :recommendations="recommendations" />
        </div>
      </div>
      <News :news="news" />
    </div>
  </div>
</template>

<script lang="ts">
import Curiosities from '../components/Curiosities.vue';
import Events from '../components/Events.vue';
import Recommendations from '../components/Recommendations.vue';
import News from '../components/News.vue';
import { ref, onMounted } from 'vue';
import { api } from '../services';
import CommonHeader from '../components/CommonHeader.vue';

interface Blog {
  initial: Initial[];
  curiosities: Curiosity[];
  events: Event[];
  recommendations: Recommendation[];
  news: New[];
}

interface Initial {
  id: number;
  icon: string;
  text: string;
}

interface Curiosity {
  id: number;
  title: string;
  text: string;
}

interface Event {
  id: number;
  date: string;
  name: string;
}

interface Recommendation {
  id: number;
  title: string;
  text: string;
}

interface New {
  id: number;
  title: string;
  phrase: string;
  img: string;
  text: string;
}

export default {
  components: {
    Curiosities,
    Events,
    Recommendations,
    News,
    CommonHeader
},
  setup() {
      const curiosities = ref<Curiosity[]>([]);
      const events = ref<Event[]>([]);
      const recommendations = ref<Recommendation[]>([]);
      const news = ref<New[]>([]);
      onMounted(async () => {
          try {
            const data = await api.get<Blog>('/blog');
            if (data) {
              curiosities.value = data.curiosities || [];
              events.value = data.events || [];
              recommendations.value = data.recommendations || [];
              news.value = data.news || [];
            }
          }
          catch (error) {
              console.error('Erro ao buscar dados:', error);
          }
      });
      return {
          curiosities,
          events,
          recommendations,
          news
      };
  }
}
</script>
  
<style lang="scss">
</style>