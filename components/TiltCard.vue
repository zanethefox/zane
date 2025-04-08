<script setup lang="ts">
import { onMounted, ref } from 'vue';
import VanillaTilt from 'vanilla-tilt';

defineProps<{
  image: string;
  label: string;
  link: string;
}>();

const cardRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (cardRef.value) {
    VanillaTilt.init(cardRef.value, {
      glare: true,
      'max-glare': 0.5,
      speed: 800,
      max: 5,
      scale: 1.025
    });
  }
});
</script>

<template>
  <div>
    <NuxtLink :to="link" class="flex flex-col gap-4">
      <div ref="cardRef" class="relative hover:drop-shadow-2xl transition-shadow duration-250 rounded-3xl overflow-hidden img-border">
        <NuxtImg placeholder loading="lazy" :src="image" :alt="label" class="w-full lg:aspect-2/3 aspect-square object-cover" />
      </div>

      <span class="text-xl">{{ label }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.img-border:after {
  content: '';
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: inherit;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
