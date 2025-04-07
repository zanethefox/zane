<script setup lang="ts">
import ImageCard from '~/components/portfolio/ImageCard.vue';
import { portfolioItems } from '~/composables/portfolio';
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-36 md:mt-56">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="max-w-3xl">
          <h1 class="font-d text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-5xl">Portfolio</h1>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 image-grid">
          <ImageCard v-for="item in portfolioItems" :key="item.id" :image="item" :width="item.width" :height="item.height" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
