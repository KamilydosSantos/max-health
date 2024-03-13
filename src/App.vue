<script setup lang="ts">
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'

</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/sobre">Sobre</router-link>
    </nav>
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
