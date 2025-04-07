<script setup lang="ts">
import { socialLinks } from '@/composables/socials';
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-36 md:mt-56">
      <div class="mx-auto max-w-2xl flex flex-col gap-12">
        <div class="flex flex-col gap-4 items-center justify-center w-full px-6 lg:px-8">
          <div class="rounded-full bg-white/90 p-0.5 ring-1 shadow-lg shadow-neutral-800/5 ring-zinc-900/5 backdrop-blur-sm">
            <NuxtImg src="/images/ZaneIcon.webp" placeholder loading="lazy" class="w-32 h-32 rounded-full bg-neutral-100 object-cover" />
          </div>
          <p class="text-2xl">Connect with me on social media.</p>
        </div>
        <div class="flex flex-col gap-4">
          <GlowyButton v-for="s in socialLinks" :key="s.name" tag="a" :href="s.url" target="_blank" size="lg">
            <div class="flex flex-row justify-center gap-2 items-center">
              <Icon :name="s.icon" class="w-5 h-5" />
              <span>{{ s.name }}</span>
            </div>
          </GlowyButton>
        </div>
        <div>
          <hr class="text-neutral-200 my-10" />
        </div>
        <div class="text-xl flex flex-col gap-6 mb-24">
          <p class="text-3xl">こんにちは</p>
          <p>I’m Zane, a fox that enjoys photography, gaming and coffee.</p>
          <p>
            You’ll find me working as a website developer for the furry convention
            <a href="https://nordicfuzzcon.org" class="underline hover:text-neutral-700" target="_blank" rel="external">NordicFuzzCon</a> in Sweden.
          </p>
          <p>
            On my website I’ll publish my photos from events I’ve attended, portaits, and creative projects, as well as blog posts ranging from gear
            reviews, technology, mechanical keyboards, and—of course—coffee culture.
          </p>
          <p>Feel free to connect with me using the social links above, or just say hi—I’d love to hear from you!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
