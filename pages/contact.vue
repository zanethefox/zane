<script setup lang="ts">
import { useClipboard } from '@vueuse/core';
import { createTooltip, destroyTooltip } from 'floating-vue';

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
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-36 md:mt-56">
      <!-- header -->
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="max-w-3xl gap-8 flex flex-col">
          <h1 class="font-d text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-5xl">Contact me</h1>
          <p class="text-neutral-600">
            Want to say hi? Have questions about my work or want to get in touch about photos? Send me an email or reach out on any of my socials :3
          </p>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
      <!-- header -->
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="max-w-3xl gap-8 flex flex-col">
          <div class="flex flex-col border border-black/10 rounded-3xl">
            <div class="flex flex-col border-b border-black/10 md:p-8 p-6">
              <span class="text-sm text-neutral-500">Email</span>
              <span ref="emailRef" class="text-neutral-900 md:text-3xl text-2xl me-auto break-all">paws@zanethefox.com</span>
            </div>
            <div class="flex flex-col md:p-8 p-6 gap-4">
              <GlowyButton size="lg" @click="handleClick('hello@zanefox.com')">
                <span v-text="isCopied ? 'owo' : 'Copy'" />
              </GlowyButton>

              <GlowyButton size="lg" tag="a" href="mailto:zanethefox.com" theme="light">
                <span v-text="'Open mail client'" />
              </GlowyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
