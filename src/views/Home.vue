<script setup lang="ts">
import InitialAbout from '../components/InitialAbout.vue';
import PrincipalHeader from '../components/PrincipalHeader.vue';
</script>

<template>
  <div class="flex flex-col gap-12 lg:gap-24">
    <PrincipalHeader/>
    <main>
      <InitialAbout />
    </main>
  </div>
</template>

<style lang="scss">

</style>
