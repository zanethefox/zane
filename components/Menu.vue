<template>
  <div class="absolute right-0 left-0 z-40 pt-14">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="flex items-center justify-between">
          <a aria-label="Home" href="/" :class="{ 'text-white transition': isOpen }">ZaneTheFox</a>
          <div class="flex items-center gap-x-8">
            <a
              class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition"
              :class="{ 'bg-neutral-950 text-white hover:bg-neutral-800': !isOpen, 'text-neutral-900 bg-white': isOpen }"
              href="/"
              ><span>Socials</span></a
            ><button
              type="button"
              class="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10"
              aria-label="Toggle navigation"
              @click="toggleMenu">
              <div class="w-5 h-5 flex justify-center items-center flex-wrap">
                <div class="w-5 h-0.5 bg-neutral-950 transition-all duration-300" :class="{ 'rotate-45 translate-y-1 bg-white': isOpen }" />
                <div class="w-5 h-0.5 bg-neutral-950 transition-all duration-300" :class="{ '-rotate-45 -translate-y-1.5 bg-white': isOpen }" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    ref="drawer"
    :class="[
      'overflow-hidden w-full absolute right-0 left-0 z-30',
      isDragging ? '' : 'transition-all duration-500',
      { '-translate-y-full': !isOpen }
    ]">
    <div class="bg-neutral-950/95 backdrop-blur-md backdrop-saturate-125 m-1 rounded-3xl pt-36 pb-14">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <nav>
            <ul class="space-y-4">
              <li><a href="/" class="text-white">Home</a></li>
              <li><a href="/about" class="text-white">About</a></li>
              <li><a href="/links" class="text-white">Links</a></li>
              <li><a href="/blog" class="text-white">Blog</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="p-2 w-full flex justify-center items-center" @mousedown="onDragStart" @touchstart="onDragStart">
      <div class="w-8 h-1.5 bg-neutral-950/35 backdrop-blur-md rounded-full z-40" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Draggy owo
let startY = 0;
let currentY = 0;
const drawer = ref<HTMLElement | null>(null);
const threshold = 100;
const isDragging = ref(false);

function onDragStart(e: MouseEvent | TouchEvent) {
  isDragging.value = true;
  startY = 'touches' in e ? e.touches[0].clientY : e.clientY;
  window.addEventListener('mousemove', onDragging);
  window.addEventListener('mouseup', onDragEnd);
  window.addEventListener('touchmove', onDragging);
  window.addEventListener('touchend', onDragEnd);
}

function onDragging(e: MouseEvent | TouchEvent) {
  currentY = 'touches' in e ? e.touches[0].clientY : e.clientY;
  const delta = currentY - startY;
  if (drawer.value) {
    drawer.value.style.transform = `translateY(${isOpen.value ? Math.min(0, delta) : Math.max(-300, delta - 300)}px)`;
  }
}

function onDragEnd() {
  const delta = currentY - startY;
  if (Math.abs(delta) > threshold) {
    isOpen.value = delta > 0;
  }

  if (drawer.value) {
    drawer.value.style.transform = '';
  }

  isDragging.value = false;

  window.removeEventListener('mousemove', onDragging);
  window.removeEventListener('mouseup', onDragEnd);
  window.removeEventListener('touchmove', onDragging);
  window.removeEventListener('touchend', onDragEnd);
}
</script>

<style scoped></style>
