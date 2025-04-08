<script setup lang="ts">
import ImageCard from '~/components/portfolio/ImageCard.vue';
import { portfolioItems } from '~/composables/portfolio';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const selectedCategory = ref<string | null>(null);
const selectedFursuiter = ref<string>('');
const sortOrder = ref<'newest' | 'oldest'>('newest');

const categories = computed(() => {
  const all = portfolioItems.flatMap((item) => item.categories);
  return [...new Set(all)];
});

const fursuiters = computed(() => {
  const all = portfolioItems.flatMap((item) => (Array.isArray(item.fursuiters) ? item.fursuiters.map((f) => f.name) : []));
  return [...[...new Set(all)]];
});

const filteredItems = computed(() => {
  let items = [...portfolioItems];

  if (selectedCategory.value) {
    items = items.filter((item) => item.categories.includes(selectedCategory.value!));
  }

  if (selectedFursuiter.value && selectedFursuiter.value !== 'none') {
    items = items.filter((item) => item.fursuiters?.some((f) => f.name === selectedFursuiter.value));
  }

  items.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder.value === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return items;
});
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-36 md:mt-56">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="max-w-3xl">
          <h1 class="font-d text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-5xl">Portfolio</h1>
        </div>

        <div class="mt-6 flex flex-nowrap items-center justify-between">
          <div class="flex w-fit overflow-hidden relative">
            <div class="flex overflow-y-scroll snap-x gap-2 pe-5">
              <button
                v-for="category in categories"
                :key="category"
                class="px-4 py-2 rounded-full border text-sm transition snap-center"
                :class="selectedCategory === category ? 'bg-neutral-900 border-neutral-900 text-white' : 'bg-white hover:bg-neutral-100'"
                @click="selectedCategory = category === selectedCategory ? null : category">
                {{ category }}
              </button>

              <!-- Fursuiter Select Menu -->
              <Select v-model="selectedFursuiter">
                <SelectTrigger class="px-4 pe-3 py-2 rounded-full border text-sm transition shadow-none !h-auto hover:bg-neutral-100">
                  <SelectValue placeholder="Fursuiter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="none">All</SelectItem>
                    <SelectItem v-for="fursuiter in fursuiters" :key="fursuiter" :value="fursuiter">
                      {{ fursuiter }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="bg-linear-to-r from-white/0 to-white h-full w-5 absolute end-0" />
          </div>

          <Select v-model="sortOrder">
            <SelectTrigger class="px-4 pe-3 py-2 rounded-full border text-sm transition shadow-none !h-auto hover:bg-neutral-100">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 image-grid">
          <ImageCard v-for="item in filteredItems" :key="item.id" :image="item" :width="item.width" :height="item.height" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
