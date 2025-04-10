<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCookie } from '#app';

const showBanner = ref(false);
const showModal = ref(false);

const categories = ref({
  essential: true,
  analytics: false,
  media: false,
  preferences: false
});

const consentCookie = useCookie('cookieConsent', { maxAge: 60 * 60 * 24 * 365 });

onMounted(() => {
  if (consentCookie.value) {
    categories.value = consentCookie.value;
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
  showModal.value = false;

  if (import.meta.client) {
    window.location.reload();
  }
}

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

defineExpose({
  openModal
});
</script>

<template>
  <div class="fixed bottom-0 w-full z-50 transition-all">
    <Transition name="cookie-banner">
      <div v-if="showBanner">
        <div
          class="max-w-4xl mx-auto flex flex-col gap-4 bg-white/80 p-8 backdrop-blur-lg rounded-t-3xl transition duration-700 ease"
          :class="{ 'translate-y-100': showModal, 'translate-y-0': !showModal }">
          <div class="text-sm text-neutral-800">
            This site uses cookies to enhance your experience. You can accept all cookies or customise your preferences. See the
            <NuxtLink to="/privacy" class="underline">privacy policy</NuxtLink>.
          </div>
          <div class="flex gap-2 justify-end">
            <button class="px-6 py-3 underline" @click="openModal">Customise</button>
            <button class="bg-neutral-900 hover:bg-neutral-700 text-white px-6 py-3 text-sm rounded-full" @click="declineAll">Decline</button>
            <button class="bg-neutral-900 hover:bg-neutral-700 text-white px-6 py-3 text-sm rounded-full" @click="acceptAll">Accept All</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>

  <Transition name="cookie-modal">
    <div v-if="showModal" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div class="inner bg-white/95 dark:bg-neutral-900 rounded-3xl p-8 w-full max-w-md shadow-xl">
        <div class="flex flex-col gap-3 mb-8">
          <h2 class="text-xl font-bold text-neutral-800 dark:text-white">Cookie Preferences</h2>
          <p class="text-neutral-500">
            This site uses cookies to enhance your experience. Here you can either can accept all cookies or customise your preferences.
          </p>
        </div>

        <div class="flex flex-col gap-3 mb-8">
          <div v-for="(enabled, key) in categories" :key="key" class="flex items-center justify-between">
            <span class="capitalize text-neutral-800 dark:text-neutral-200">{{ key }}</span>
            <Switch
              :model-value="enabled"
              :disabled="key === 'essential'"
              class="ml-auto"
              @update:model-value="(value) => (categories[key] = value)" />
          </div>
        </div>

        <div class="flex gap-2 justify-between">
          <button class="text-neutral-600 hover:text-neutral-900 underline" @click="closeModal">Cancel</button>
          <button class="bg-neutral-900 hover:bg-neutral-700 text-white px-6 py-3 rounded-full" @click="saveConsent">Save Preferences</button>
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
  transform: translateY(2rem) scale(0.98);
  opacity: 0;
}
</style>
