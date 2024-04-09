<template>
  <div class="flex flex-col gap-12 lg:gap-24">
    <CommonHeader title="Atividades" subtitle="Uma variedade de atividades e exercícios" />
    <ActivityCard />
  </div>
</template>

<script setup lang="ts">
import ActivityCard from '../components/ActivityCard.vue';
import CommonHeader from '../components/CommonHeader.vue';

</script>

<style lang="scss">

</style>