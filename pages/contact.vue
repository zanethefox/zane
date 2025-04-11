<script setup lang="ts">
import { useClipboard, useMediaControls } from '@vueuse/core';
import { createTooltip, destroyTooltip } from 'floating-vue';

import { ref } from 'vue';

useSeoMeta({
  title: 'Contact Me — ZaneTheFox.com',
  ogTitle: 'Contact Me — ZaneTheFox.com',
  description: 'Get in touch with Zane for collaborations, photos, or a just say hello. Reach out through social media or email.',
  ogDescription: 'Get in touch with Zane for collaborations, photos, or a just say hello. Reach out through social media or email.'
});

const { copy } = useClipboard();
const emailRef = ref<HTMLElement | null>(null);
const isCopied = ref(false);

const handleClick = async (text: string) => {
  if (!emailRef.value) return;

  await copy(text);
  isCopied.value = true;

  const tooltip = createTooltip(emailRef.value, {
    triggers: [],
    content: 'Copied!',
    placement: 'top',
    theme: 'zane'
  });

  tooltip.show();

  setTimeout(() => {
    tooltip.hide();
    setTimeout(() => {
      destroyTooltip(emailRef.value!);
      isCopied.value = false;
    }, 600);
  }, 1500);
};

const video = useTemplateRef<HTMLVideoElement>('videoRef');

const { playing, currentTime, duration, muted } = useMediaControls(video, {
  src: '/videos/zane_clip_2.mp4'
});

onMounted(() => {
  if (muted) muted.value = true;
});

const progress = computed(() => (duration.value ? (currentTime.value / duration.value) * 100 : 0));
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-36 md:mt-56">
      <!-- header -->
      <div class="mx-auto max-w-2xl lg:max-w-none z-10 relative">
        <div class="max-w-3xl gap-8 flex flex-col">
          <h1 class="font-d text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-5xl">Contact me</h1>
          <p class="text-neutral-600">
            Want to say hi? Have questions about my work or want to get in touch about photos? Send me an email or reach out on any of my socials :3
          </p>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 pe-0 lg:px-8 mt-24">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="grid lg:gap-8 grid-cols-3">
          <div class="col-span-2">
            <div class="flex flex-col border border-black/10 rounded-3xl mb-auto">
              <div class="flex flex-col border-b border-black/10 md:p-8 p-6">
                <span class="text-sm text-neutral-500">Email</span>
                <span ref="emailRef" class="text-neutral-900 md:text-3xl text-xl me-auto break-all">paws@zanethefox.com</span>
              </div>
              <div class="flex flex-col md:p-8 p-6 gap-4">
                <GlowyButton size="lg" @click="handleClick('paws@zanethefox.com')">
                  <span v-text="isCopied ? 'owo' : 'Copy'" />
                </GlowyButton>

                <GlowyButton size="lg" tag="a" href="mailto:paws@zanethefox.com" theme="light">
                  <span v-text="'Open mail app'" />
                </GlowyButton>
              </div>
            </div>

            <p class="py-10 text-neutral-600">
              <span class="text-neutral-900">Email not really your thing?</span> You can connect with me on your favourite
              <NuxtLink to="/socials" class="underline hover:text-neutral-900">social networks</NuxtLink> :3
            </p>
          </div>

          <div class="flex sm:-mt-8 md:-mt-40">
            <div class="relative w-full h-auto overflow-hidden rounded-2xl">
              <video ref="videoRef" class="w-full h-full object-cover" muted playsinline autoplay loop aria-label="Zane video">
                Your browser does not support the video tag.
              </video>

              <button
                class="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white transition hover:bg-black/80 group"
                :aria-label="playing ? 'Pause video' : 'Play video'"
                @click="playing = !playing">
                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                  <circle class="text-white/20" stroke="currentColor" stroke-width="3" fill="none" cx="18" cy="18" r="16" />
                  <circle
                    class="text-white transition-all duration-150"
                    stroke="currentColor"
                    stroke-width="3"
                    fill="none"
                    stroke-linecap="round"
                    :stroke-dasharray="100"
                    :stroke-dashoffset="100 - progress"
                    cx="18"
                    cy="18"
                    r="16"
                    transform="rotate(-90 18 18)" />
                </svg>

                <!-- Icon -->
                <span class="z-10 h-4 w-4">
                  <span v-if="playing" class="flex">
                    <icon name="heroicons:pause-16-solid" width="16" height="16" />
                  </span>
                  <span v-else class="flex">
                    <icon name="heroicons:play-16-solid" width="16" height="16" />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
