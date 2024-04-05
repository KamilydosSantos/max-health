<template>
  <div>
    <Curiosities :curiosities="curiosities" />
  </div>
</template>

<script lang="ts">
import Curiosities from '../components/Curiosities.vue';
import { ref, onMounted } from 'vue';
import { api } from '../services';

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
  text: string;
}

export default {
  components: {
    Curiosities
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