<script setup lang="ts">
  import CommonHeader from '../components/CommonHeader.vue';
  import ContactInfos from '../components/ContactInfos.vue';
  import ContactForm from '../components/ContactForm.vue';
</script>

<template>
  <div class="flex flex-col gap-12 lg:gap-24">
    <CommonHeader title="Contato" subtitle="Entre em contato conosco para tirar dúvidas" />
    <div class="mx-8 lg:mx-auto max-w-screen-lg lg:grid lg:grid-cols-2 flex flex-col gap-12 lg:gap-24">
      <ContactInfos />
      <ContactForm />
    </div>
  </div>
</template>

<style lang="scss">
</style>