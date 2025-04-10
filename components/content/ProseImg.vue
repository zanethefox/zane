<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

defineProps({
  src: {
    type: String,
    default: ''
  },
  height: {
    type: Number,
    default: undefined
  },
  width: {
    type: Number,
    default: undefined
  },
  alt: {
    type: String,
    default: ''
  }
});

const lightbox = ref<PhotoSwipeLightbox | null>(null);

onMounted(() => {
  if (!lightbox.value) {
    lightbox.value = new PhotoSwipeLightbox({
      gallery: '.image-card',
      pswpModule: () => import('photoswipe'),
      padding: { top: 24, right: 0, bottom: 24, left: 0 },
      arrowPrev: false,
      arrowNext: false,
      wheelToZoom: true
    });

    lightbox.value.init();
  }
});

onUnmounted(() => {
  if (lightbox.value) {
    lightbox.value.destroy();
    lightbox.value = null;
  }
});
</script>

<template>
  <div class="image-card">
    <a :key="src" :href="src" :data-pswp-width="width" :data-pswp-height="height" data-cropped="true">
      <NuxtImg
        placeholder
        placeholder-class="bg-neutral-200 animate-pulse"
        loading="lazy"
        sizes="100vw sm:400px md:600px"
        :width="width"
        :height="height"
        :src="src"
        :alt="alt"
        class="w-full h-auto aspect-auto object-cover cursor-pointer rounded-3xl" />
    </a>
  </div>
</template>
