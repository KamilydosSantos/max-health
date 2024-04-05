<template>
  <div>
    <p>{{ curiosities[0].title }}</p>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

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
  }
}
</script>

<style lang="scss">
</style>