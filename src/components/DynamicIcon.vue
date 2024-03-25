<template>
  <component :is="props.iconName"></component>
</template>

<script setup lang="ts">
import IconCuriosities from "./IconCuriosities.vue";
import IconNews from "./IconNews.vue";
import IconRecommendation from "./IconRecommendation.vue";

const props = defineProps({
  iconName: String
})
</script>

<style></style>