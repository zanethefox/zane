<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCookie } from '#app';

const showBanner = ref(false);
const isOpen = ref(false);

const categoryDefinitions = {
  essential: {
    name: 'Essential',
    description: 'Required for the site to function properly. Cannot be disabled.',
    required: true
  },
  analytics: {
    name: 'Analytics',
    description: 'Helps us understand how you use the site to improve it.'
  },
  media: {
    name: 'Media',
    description: 'Allows embedding content like YouTube videos or maps.'
  },
  preferences: {
    name: 'Preferences',
    description: 'Saves your settings and preferences across visits.'
  }
};

const categories = ref(Object.fromEntries(Object.entries(categoryDefinitions).map(([key, def]) => [key, def.required || false])));

const consentCookie = useCookie('cookieConsent', { maxAge: 60 * 60 * 24 * 365 });

onMounted(() => {
  const cookie = consentCookie.value;
  if (cookie && typeof cookie === 'object') {
    for (const key in categories.value) {
      if (key in cookie && !categoryDefinitions[key]?.required) {
        categories.value[key] = cookie[key];
      }
    }
  } else {
    showBanner.value = true;
  }
});

function acceptAll() {
  categories.value = {
    essential: true,
    analytics: true,
    media: true,
    preferences: true
  };
  saveConsent();
}

function declineAll() {
  categories.value = {
    essential: true,
    analytics: false,
    media: false,
    preferences: false
  };
  saveConsent();
}

function saveConsent() {
  consentCookie.value = categories.value;
  showBanner.value = false;
  isOpen.value = false;

  if (import.meta.client) {
    window.location.reload();
  }
}

function openModal() {
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}

defineExpose({
  openModal
});

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
    // Invert the translation direction: dragging down should now open, dragging up should close
    drawer.value.style.transform = `translateY(${isOpen.value ? Math.max(0, delta) : Math.min(300, delta + 300)}px)`;
  }
}

function onDragEnd() {
  const delta = currentY - startY;

  // Adjust threshold logic to detect the swipe direction
  if (Math.abs(delta) > threshold) {
    isOpen.value = delta < 0; // Now we open the drawer when swiping down
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
  <div class="fixed bottom-0 w-full z-50 transition-all">
    <Transition name="cookie-banner">
      <div v-if="showBanner">
        <div
          class="max-w-4xl mx-auto flex flex-col gap-4 bg-white/80 p-8 backdrop-blur-lg rounded-t-3xl transition duration-700 ease"
          :class="{ 'translate-y-100': isOpen, 'translate-y-0': !isOpen }">
          <div class="text-sm text-neutral-800">
            This site uses cookies to enhance your experience. You can accept all cookies or customise your preferences. See the
            <NuxtLink to="/privacy" class="underline">privacy policy</NuxtLink>.
          </div>
          <div class="flex gap-2 justify-end">
            <button class="cursor-pointer px-6 py-3 underline rounded-full" @click="openModal">Customise</button>
            <button class="cursor-pointer bg-neutral-900 hover:bg-neutral-700 text-white px-6 py-3 text-sm rounded-full" @click="declineAll">
              Decline
            </button>
            <button class="cursor-pointer bg-neutral-900 hover:bg-neutral-700 text-white px-6 py-3 text-sm rounded-full" @click="acceptAll">
              Accept All
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>

  <Transition name="cookie-modal">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex flex-row items-end md:items-center justify-center p-2"
      @click.self="closeModal">
      <div ref="drawer" class="inner flex max-h-full flex-col" :class="[isDragging ? '' : 'duration-500']">
        <div class="p-2 py-14 -my-12 z-10 w-full flex justify-center items-center" @mousedown="onDragStart" @touchstart="onDragStart">
          <div class="w-8 h-1.5 bg-neutral-950/35 backdrop-blur-md rounded-full z-40" />
        </div>
        <div class="bg-white/95 dark:bg-neutral-900 rounded-3xl w-full max-w-md max-h-full shadow-xl overflow-scroll">
          <div class="flex flex-col gap-3 p-8 pb-0">
            <h2 class="text-xl font-bold text-neutral-800 dark:text-white">Cookie Preferences</h2>
            <p class="text-neutral-500">
              This site uses cookies to enhance your experience. Here you can either can accept all cookies or customise your preferences.
            </p>
          </div>

          <div class="flex flex-col gap-4 p-8 pb-4">
            <div v-for="(enabled, key) in categories" :key="key" class="flex justify-between gap-5">
              <div class="flex flex-col">
                <span class="font-medium text-neutral-800 dark:text-neutral-200">
                  {{ categoryDefinitions[key]?.name || key }}
                </span>
                <span class="text-sm text-neutral-500 dark:text-neutral-400">
                  {{ categoryDefinitions[key]?.description }}
                </span>
              </div>

              <Switch
                :model-value="enabled"
                :disabled="categoryDefinitions[key]?.required"
                class="mt-2"
                @update:model-value="(value) => (categories[key] = value)" />
            </div>
          </div>

          <div class="flex flex-col sticky bottom-0">
            <div class="bg-gradient-to-t from-white to-transparent h-4 flex w-full transition duration-700 ease" />

            <div class="flex gap-2 justify-between bg-white p-8 pb-4 pt-2">
              <button class="cursor-pointer text-neutral-600 hover:text-neutral-900 underline" @click="closeModal">Cancel</button>
              <button class="cursor-pointer bg-neutral-900 hover:bg-neutral-700 text-white px-6 py-3 rounded-full" @click="saveConsent">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition: all 0.5s ease-in-out;
  transform: translateY(0%);
}

.cookie-banner-enter-from,
.cookie-banner-leave-to {
  transform: translateY(100%) scale(0.98);
}

.cookie-modal-enter-from,
.cookie-modal-leave-to {
  opacity: 0;
}
.cookie-modal-enter-active,
.cookie-modal-leave-active {
  transition: opacity 0.3s ease;
}

.cookie-modal-enter-active .inner,
.cookie-modal-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.cookie-modal-enter-from .inner,
.cookie-modal-leave-to .inner {
  transform: translateY(100%) scale(0.98);
  opacity: 0;
}
</style>
