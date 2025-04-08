<script setup lang="ts">
import TiltCard from '~/components/TiltCard.vue';

useSeoMeta({
  title: 'Home — ZaneTheFox.com',
  ogTitle: 'Home — ZaneTheFox.com',
  description:
    'Zane is a web developer and photographer sharing portraits, convention photos, and blog posts on tech, gear, mechanical keyboards, and coffee culture.',
  ogDescription:
    'Zane is a web developer and photographer sharing portraits, convention photos, and blog posts on tech, gear, mechanical keyboards, and coffee culture.'
});
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-36 md:mt-56">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="max-w-3xl">
          <h1 class="font-d text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-5xl break-normal">
            <span v-tooltip="{ content: 'Hello!', theme: 'zane' }">こんにちは!</span>
            I’m Zane—a soft nerd fox, photographer & website developer at NordicFuzzCon.
          </h1>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <TiltCard image="/images/home/ZaneLucarioKigu.jpg" label="About" link="/socials" />
          <TiltCard image="/images/home/WapiHeroImage.jpeg" label="Portfolio" link="/portfolio" />
          <TiltCard image="/images/home/ZanePhotographerBadge.jpg" label="Contact" link="/contact" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
