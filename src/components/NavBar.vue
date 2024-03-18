
<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<template>
  <div class="flex items-center bg-black p-8 w-full">
    <nav class="flex items-center">
      <div class="flex items-center gap-4 text-yellow-400 text-2xl font-bold">
        <router-link to="/"><img src="../assets/max_health-logo.svg" alt=""></router-link>
        <span>MaxHealth</span>
      </div>
      <router-link to="/">Início</router-link>
      <router-link to="/sobre">Sobre Nós</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/atividades">Atividades</router-link>
      <router-link to="/contato">Contato</router-link>
    </nav>
    <button class="mobileButton"></button>
  </div>
</template>

<style scoped lang="scss">
.mobileButton {
  position: relative;
  background: white;
  border-radius: .2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: .1s;
  cursor: pointer;
}

.mobileButton::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 2px;
  background: red;
  box-shadow: 0 6px red, 0 -6px red;
}
</style>