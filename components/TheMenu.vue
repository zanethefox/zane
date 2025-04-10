<script setup lang="ts">
import { ref } from 'vue';
import { mainMenu } from '@/composables/menu';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Close on navigation
const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false;
  }
);

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

watch(isOpen, (open) => {
  if (open) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});
</script>

<template>
  <div class="fixed top-0 right-0 left-0 z-40 pt-14">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="flex items-center justify-between transition">
          <NuxtLink
            aria-label="Home"
            href="/"
            class="p-3 -mx-3 effect-shine rounded-xl relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.75)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
            :class="{
              'text-white transition before:!bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.1)_50%,transparent_75%,transparent_100%)]':
                isOpen,
              'bg-white/80 backdrop-blur-lg saturate-150 delay-150': !isOpen
            }"
            ><span class="text-lg">ZaneTheFox</span></NuxtLink
          >
          <div class="flex items-center gap-x-8">
            <NuxtLink
              class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition backdrop-blur-md"
              :class="{
                'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-neutral-950/90 hover:bg-neutral-950 ring-1 shadow-md ring-neutral-500/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] text-base font-medium whitespace-nowrap text-white data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20':
                  !isOpen,
                'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-white/15 hover:bg-white/10 ring-1 shadow-md ring-neutral-950/10 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] text-base font-medium whitespace-nowrap text-white data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20':
                  isOpen
              }"
              href="/socials"
              ><span>Socials</span></NuxtLink
            ><button
              type="button"
              class="group -m-2.5 rounded-full p-3.5 transition backdrop-blur-md"
              :class="{ 'hover:bg-white/10': isOpen, 'hover:bg-white/60 bg-white/80 saturate-150': !isOpen }"
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

  <transition name="drawer">
    <div
      v-show="isOpen"
      ref="drawer"
      :class="['overflow-hidden w-full fixed top-0 right-0 left-0 z-30', isDragging ? '' : 'transition-all duration-500']">
      <div class="bg-neutral-950/95 backdrop-blur-md backdrop-saturate-125 m-1 rounded-3xl pt-36 pb-14">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <nav class="flex flex-col gap-6">
              <NuxtLink
                v-for="item in mainMenu"
                :key="item.href"
                :to="item.href"
                class="text-white/70 text-lg hover:underline hover:text-white transition-colors duration-150"
                active-class="text-white/100"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined">
                <Icon v-if="item.icon" :name="item.icon" class="inline w-4 h-4 mr-1" />
                {{ item.title }}
              </NuxtLink>
            </nav>
          </div>
        </div>
      </div>
      <div class="relative p-2 py-14 -my-12 z-40 w-full flex justify-center items-center" @mousedown="onDragStart" @touchstart="onDragStart">
        <div class="w-8 h-1.5 bg-neutral-950/35 backdrop-blur-md rounded-full z-40" />
      </div>
    </div>
  </transition>

  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 bg-neutral-50/10 transition-opacity z-20" @click="toggleMenu" />
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.325s ease;
  transform: translateY(0%);
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateY(-100%);
}

.effect-shine:hover span {
  mask-image: linear-gradient(-75deg, rgba(0, 0, 0, 0.6) 30%, #000 50%, rgba(0, 0, 0, 0.6) 70%);
  mask-size: 200%;
  animation: shine 2s infinite;
}

@keyframes shine {
  from {
    mask-position: 150%;
  }

  to {
    mask-position: -50%;
  }
}
</style>
