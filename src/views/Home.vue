<script setup lang="ts">
import InitialAbout from '../components/InitialAbout.vue';
import InitialActivities from '../components/InitialActivities.vue';
import InitialBlog from '../components/InitialBlog.vue';
import PrincipalHeader from '../components/PrincipalHeader.vue';
</script>

<template>
  <div class="flex flex-col gap-12 lg:gap-24">
    <PrincipalHeader/>
    <main class="flex flex-col gap-12 lg:gap-24">
      <InitialAbout />
      <InitialActivities />
      <InitialBlog />
    </main>
  </div>
</template>

<style lang="scss">

</style>
