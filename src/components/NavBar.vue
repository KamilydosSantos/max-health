<template>
  <div class="flex items-center justify-center bg-black p-4 w-full">
    <nav class="flex items-center justify-between max-w-screen-lg w-full">
      <div class="flex items-center gap-4 text-custom-yellow text-2xl font-bold">
        <router-link to="/"><img src="../assets/max_health-logo.svg" alt=""></router-link>
        <router-link to="/"><span>MaxHealth</span></router-link>
      </div>
      <div class=" hidden lg:flex items-center gap-8 text-white">
        <router-link to="/">Início</router-link>
        <router-link to="/sobre">Sobre Nós</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/atividades">Atividades</router-link>
        <router-link to="/contato">Contato</router-link>
      </div>
    </nav>
    <div class="relative lg:hidden">
      <button class="mobileButton flex" @click="toggleMobileMenu"></button>
      <div class="absolute top-0 right-0 mt-10 bg-black p-4 w-40" :class="{ 'hidden': !isMobileMenuOpen }">
        <div class="flex flex-col items-center gap-8 text-white">
          <router-link to="/" @click="toggleMobileMenu">Início</router-link>
          <router-link to="/sobre" @click="toggleMobileMenu">Sobre Nós</router-link>
          <router-link to="/blog" @click="toggleMobileMenu">Blog</router-link>
          <router-link to="/atividades" @click="toggleMobileMenu">Atividades</router-link>
          <router-link to="/contato" @click="toggleMobileMenu">Contato</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

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