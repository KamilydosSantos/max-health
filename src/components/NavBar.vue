<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<template>
  <div class="flex items-center justify-center bg-black p-4 w-full">
      <nav class="flex items-center justify-between max-w-screen-lg w-full">
        <div class="flex items-center gap-4 text-custom-yellow text-2xl font-bold">
          <router-link to="/"><img src="../assets/max_health-logo.svg" alt=""></router-link>
          <span>MaxHealth</span>
        </div>
        <div class="flex items-center gap-8">
          <router-link class="text-white hidden lg:flex" to="/">Início</router-link>
          <router-link class="text-white hidden lg:flex" to="/sobre">Sobre Nós</router-link>
          <router-link class="text-white hidden lg:flex" to="/blog">Blog</router-link>
          <router-link class="text-white hidden lg:flex" to="/atividades">Atividades</router-link>
          <router-link class="text-white hidden lg:flex" to="/contato">Contato</router-link>
        </div>
      </nav>
      <button class="mobileButton flex lg:hidden"></button>
  </div>
</template>

<style scoped lang="scss">
.mobileButton {
  position: relative;
  background: transparent;
  border-radius: .2rem;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: .1s;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 2px;
    background: #fb0;
    box-shadow: 0 6px #fb0, 0 -6px #fb0;
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: #fb0;
  }
}

</style>