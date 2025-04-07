<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

defineProps({
  image: {
    type: Object as () => {
      src: string;
      description?: string;
      width: number;
      height: number;
    },
    required: true
  }
});

const lightbox = ref<PhotoSwipeLightbox | null>(null);

onMounted(() => {
  if (!lightbox.value) {
    lightbox.value = new PhotoSwipeLightbox({
      gallery: '.image-grid',
      children: 'a',
      pswpModule: () => import('photoswipe')
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
    <a :key="image.src" :href="image.src" :data-pswp-width="image.width" :data-pswp-height="image.height" data-cropped="true">
      <NuxtImg
        placeholder
        loading="lazy"
        sizes="100vw sm:400px md:600px"
        :src="image.src"
        :alt="image.description"
        class="w-full aspect-1/1 object-cover cursor-pointer" />
    </a>
  </div>
</template>
