<script setup lang="ts">
import { ref } from 'vue';
import { useClipboard } from '@vueuse/core';
import { createTooltip, destroyTooltip } from 'floating-vue';

useSeoMeta({
  title: 'Reference sheet — ZaneTheFox.com',
  ogTitle: 'Reference sheet — ZaneTheFox.com',
  description: "Check out the reference sheet to see Zane's unique traits and features.",
  ogDescription: "Check out the reference sheet to see Zane's unique traits and features."
});

const aboutInfo = [
  { label: 'Species', value: 'Fox' },
  { label: 'Height', value: '180cm' },
  { label: 'Pronouns', value: 'He/Him' },
  { label: 'Languages', value: 'English, German, Norwegian' },
  { label: 'Likes', value: 'Photography, coffee, games' },
  { label: 'Foods', value: 'Soba, onigiri, cinnamon rolls' },
  { label: 'Drinks', value: 'Coffee, monster' }
];

const zaneInventory = [
  { label: 'Switch', src: 'switch.png' },
  { label: 'Games', src: 'games.png' },
  { label: 'Phone', src: 'phone.png' },
  { label: 'Lucario', src: 'lucario.png' },
  { label: 'Waterbottle', src: 'bottle.png' },
  { label: 'Badge', src: 'badge.png' }
];

const zaneAccs = [{ label: 'Anklet', src: 'anklet.png' }];

const outfitTypes = ref(['casual', 'pink'] as const);
const outfitType = ref<(typeof outfitTypes.value)[number]>('casual');

const allOutfits = [
  {
    type: 'casual',
    name: 'Hoodie',
    image: '/images/ref-sheet/outfit-1/hoodie.png',
    description: 'Comfy hoodie uwu',
    isHighlighted: true
  },
  {
    type: 'casual',
    name: 'Pants',
    image: '/images/ref-sheet/outfit-1/pants.png',
    description: 'Light grey jeans'
  },
  {
    type: 'casual',
    name: 'Hat',
    image: '/images/ref-sheet/outfit-1/hat.png',
    description: 'Cosy hat'
  },
  {
    type: 'casual',
    name: 'Socks',
    image: '/images/ref-sheet/outfit-1/socks.png',
    description: 'Keep the paws cosy'
  },
  {
    type: 'casual',
    name: 'Shoes',
    image: '/images/ref-sheet/outfit-1/shoes.png',
    description: 'Protecc the beans'
  },
  {
    type: 'pink',
    name: 'Hoodie',
    image: '/images/ref-sheet/outfit-2/hoodie.png',
    description: 'Soft pink hoodie',
    isHighlighted: true
  },
  {
    type: 'pink',
    name: 'Shorts',
    image: '/images/ref-sheet/outfit-2/shorts.png',
    description: 'Black shorts'
  },
  {
    type: 'pink',
    name: 'Shoes',
    image: '/images/ref-sheet/outfit-2/shoes.png',
    description: 'Comfy beans'
  },
  {
    type: 'pink',
    name: 'Socks',
    image: '/images/ref-sheet/outfit-2/socks.png',
    description: "uwu they're good for programming",
    isHighlighted: true
  },
  {
    type: 'pink',
    name: 'Bag',
    image: '/images/ref-sheet/outfit-2/bag.png',
    description: 'Snaccs stored here'
  },
  {
    type: 'pink',
    name: 'Hat',
    image: '/images/ref-sheet/outfit-1/hat.png',
    description: 'Cosy vibes'
  },
  {
    type: 'pink',
    name: 'Collar',
    image: '/images/ref-sheet/outfit-1/collar.png',
    description: 'Fox'
  }
];

const filteredOutfits = computed(() => allOutfits.filter((outfit) => outfit.type === outfitType.value));

const colours = ['#6489e9', '#2f3a5d', '#ee67bd', '#ffffff', '#00e04e', '#096d19'];

const tooltipTexts = ref(colours.map((colour) => colour));
const { copy } = useClipboard();

const handleClick = async (colour: string, event: MouseEvent) => {
  const el = event.currentTarget as HTMLElement;
  await copy(colour);

  const tooltip = createTooltip(el, {
    triggers: [],
    content: 'Copied!',
    placement: 'top',
    theme: 'zane'
  });

  tooltip.show();

  setTimeout(() => {
    tooltip.hide();
    setTimeout(() => {
      destroyTooltip(el);
    }, 300);
  }, 1500);
};
</script>

<template>
  <div class="bg-gradient-to-t from-pink-100 from-0% via-pink-200 via- to-pink-100">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-36 md:py-56 -mb-42">
      <div class="mx-auto flex flex-col gap-12">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <!-- Biography stuff -->
          <div class="flex flex-col gap-8">
            <div class="rounded-3xl bg-black/5 p-2 outline outline-white/15 backdrop-blur-md dark:bg-white/10">
              <div
                class="relative flex w-full flex-col rounded-2xl bg-gradient-to-b from-white/90 to-white/75 outline outline-black/5 dark:bg-neutral-950 p-7 gap-6 items-center @xs:flex-row @xs:gap-8">
                <div class="rounded-full bg-white/90 p-0.5 ring-1 shadow-lg shadow-neutral-800/5 ring-neutral-900/5 backdrop-blur-sm">
                  <NuxtImg
                    src="/images/ZaneIcon.webp"
                    placeholder
                    placeholder-class="bg-neutral-200 animate-pulse"
                    loading="lazy"
                    class="w-32 h-32 rounded-full bg-neutral-100 object-cover" />
                </div>
                <div class="flex flex-col gap-2 text-center">
                  <p class="text-2xl">Hi, I'm Zane!</p>
                  <p class="text-sm text-neutral-500">This is my ref sheet page~</p>
                </div>
              </div>
            </div>

            <div class="lg:px-2">
              <div class="relative flex w-full flex-col rounded-2xl bg-white/50 outline outline-black/5 dark:bg-neutral-950 p-7 gap-6">
                <div class="flex flex-col gap-2 text-start">
                  <p class="text-sm text-neutral-500">Colours</p>
                </div>
                <div class="flex">
                  <div class="flex gap-2 flex-wrap">
                    <div
                      v-for="(colour, index) in colours"
                      :key="colour"
                      v-tooltip="{ content: tooltipTexts[index], theme: 'zane' }"
                      :style="{ backgroundColor: colour }"
                      class="w-10 h-10 rounded-full cursor-pointer outline outline-black/5"
                      @click="handleClick(colour, $event)" />
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:px-2">
              <div class="relative flex w-full flex-col rounded-2xl bg-white/50 outline outline-black/5 dark:bg-neutral-950 p-7 pb-2 gap-6">
                <div class="flex flex-col gap-2 text-start">
                  <p class="text-sm text-neutral-500">About</p>
                </div>
                <div class="border-t border-neutral-950/10">
                  <dl class="divide-y divide-neutral-950/10">
                    <div v-for="(item, index) in aboutInfo" :key="index" class="px-0 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm/6 font-medium text-neutral-900">{{ item.label }}</dt>
                      <dd class="mt-1 text-sm/6 text-neutral-700 sm:col-span-2 sm:mt-0">{{ item.value }}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <!-- The actual ref -->
          <div class="lg:col-span-2 flex flex-col gap-8">
            <div class="relative flex w-full flex-col rounded-2xl bg-white/50 outline outline-black/5 dark:bg-neutral-950 p-8 gap-6 backdrop-blur-md">
              <NuxtImg
                src="/images/ref-sheet/zane-3-views.png"
                placeholder
                placeholder-class="bg-neutral-200 animate-pulse"
                loading="lazy"
                class="object-cover w-full h-auto"
                width="1907"
                height="1272" />
            </div>

            <!-- Items -->
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <!-- Smaller col -->
              <div class="lg:col-span-5 flex flex-col gap-8">
                <div class="flex flex-col gap-4">
                  <div class="relative flex w-full flex-col rounded-2xl bg-white/50 outline outline-black/5 dark:bg-neutral-950 p-7 py-4 gap-6">
                    <p class="text-sm text-neutral-500">Items</p>
                  </div>
                  <div class="grid grid-cols-3 gap-4">
                    <div v-for="(item, index) in zaneInventory" class="flex flex-col gap-1">
                      <div class="rounded-2xl bg-gradient-to-b from-white/30 to-white/40 outline outline-black/5">
                        <NuxtImg
                          :key="index"
                          :src="'/images/ref-sheet/items/' + item.src"
                          :alt="item.label"
                          placeholder
                          placeholder-class="bg-neutral-200 animate-pulse"
                          loading="lazy"
                          class="object-contain aspect-square" />
                      </div>
                      <span class="text-xs text-neutral-950/60 text-center" v-text="item.label" />
                    </div>
                  </div>
                </div>

                <!-- Even more smaller col -->
                <div class="grid grid-cols-3 gap-4">
                  <div class="col-span-2">
                    <div class="relative flex w-full flex-col rounded-2xl bg-white/50 outline outline-black/5 dark:bg-neutral-950 p-7 pb-7">
                      <div class="flex flex-col gap-2 text-start">
                        <p class="text-sm text-neutral-500">Paws</p>
                      </div>
                      <NuxtImg
                        src="/images/ref-sheet/zane-paws.png"
                        placeholder
                        placeholder-class="bg-neutral-200 animate-pulse"
                        loading="lazy"
                        class="object-cover w-full h-auto" />
                    </div>
                  </div>

                  <div class="col-span-1">
                    <div v-for="(item, index) in zaneAccs" class="flex flex-col gap-1">
                      <div class="rounded-2xl bg-gradient-to-b from-white/30 to-white/40 outline outline-black/5">
                        <NuxtImg
                          :key="index"
                          :src="'/images/ref-sheet/accessories/' + item.src"
                          :alt="item.label"
                          placeholder
                          placeholder-class="bg-neutral-200 animate-pulse"
                          loading="lazy"
                          class="object-contain aspect-square" />
                      </div>
                      <span class="text-xs text-neutral-950/60 text-center" v-text="item.label" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Larger col -->
              <div
                class="lg:col-span-7 relative flex w-full flex-col rounded-2xl bg-white/50 outline outline-black/5 dark:bg-neutral-950 p-7 py-4 pb-7 gap-6 mb-auto">
                <!-- Outfits -->
                <div class="flex flex-row justify-between gap-2 text-start">
                  <p class="text-sm text-neutral-500">Outfits</p>

                  <!-- Toggle -->
                  <div class="flex gap-1 rounded-full bg-gray-950/5 p-1" role="tablist" aria-orientation="horizontal">
                    <!-- Segmented controls for Outfit Types -->
                    <button
                      v-for="option in outfitTypes"
                      :key="option"
                      class="group flex items-center rounded-full px-4 text-sm/7 font-medium transition"
                      :class="{
                        'bg-white ring-2 ring-gray-950/5': outfitType === option,
                        'text-neutral-600 hover:bg-neutral-100': outfitType !== option
                      }"
                      role="tab"
                      aria-selected="outfitType === option"
                      @click="outfitType = option">
                      {{ option.charAt(0).toUpperCase() + option.slice(1) }}
                    </button>
                  </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  <div
                    v-for="outfit in filteredOutfits"
                    :key="outfit.name"
                    :class="{ 'col-span-2': outfit?.isHighlighted }"
                    class="rounded-lg overflow-hidden bg-white/60 outline outline-black/5 p-3 flex flex-col gap-2">
                    <NuxtImg
                      :src="outfit.image"
                      :alt="outfit.name"
                      class="w-full h-full max-h-50 min-h-20 object-contain"
                      placeholder
                      placeholder-class="bg-neutral-200 animate-pulse"
                      loading="lazy" />
                    <h3 class="text-sm font-semibold text-neutral-950/80">{{ outfit.name }}</h3>
                    <p class="text-xs text-neutral-950/60">{{ outfit.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
