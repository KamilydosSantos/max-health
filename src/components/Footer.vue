<template>
  <footer class="flex items-center justify-center bg-custom-yellow w-full mt-12">
    <div class="flex flex-col lg:grid lg:grid-cols-[auto,1fr,auto] gap-8 lg:gap-0 justify-between max-w-screen-lg w-full mx-8 my-12 lg:mx-0">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4 text-custom-black">
          <router-link to="/">
            <img src="../assets/max_health-logo-black.svg" alt="">
          </router-link>
          <router-link class="text-2xl font-bold" to="/"><span>MaxHealth</span></router-link>
        </div>
        <p class="w-2/3">Alcance o seu potencial máximo de saúde e bem-estar.</p>
        <div class="flex gap-4">
          <img src="../assets/icon-facebook.svg">
          <img src="../assets/icon-instagram.svg">
          <img src="../assets/icon-youtube.svg">
        </div>
        <div class="flex flex-col text-xs">
          <span>Direitos Reservados | 2024</span>
          <span>Design e Desenvolvimento por Kamily</span>
        </div>
      </div>
      <div class="flex flex-col gap-4 text-custom-black">
        <div>
          <h4 class="uppercase font-bold">Informações</h4>
        </div>
        <nav class="flex flex-col">
          <router-link to="/">Início</router-link>
          <router-link to="/sobre">Sobre Nós</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/atividades">Atividades</router-link>
          <router-link to="/contato">Contato</router-link>
        </nav>
      </div>
      <div class="flex flex-col gap-4 text-custom-black">
        <h4 class="uppercase font-bold">Contato</h4>
        <div>
          <p>+55 51 99999-9999</p>
          <p>contato@maxhealth.com</p>
        </div>
        <div>
          <p>Rua Alí Perto, 11 - Bela Vista</p>
          <p>Porto Alegre - RS</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
</style>