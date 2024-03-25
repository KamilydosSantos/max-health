<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="font-poppins">
    <NavBar />
    <RouterView/>
    <Footer />
  </div>
</template>

<style scoped>
</style>
