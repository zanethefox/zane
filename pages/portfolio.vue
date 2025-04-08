<script setup lang="ts">
import ImageCard from '~/components/portfolio/ImageCard.vue';
import { portfolioItems } from '~/composables/portfolio';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const selectedCategory = ref<string | null>(null);
const sortOrder = ref<'newest' | 'oldest'>('newest');

const categories = computed(() => {
  const all = portfolioItems.flatMap((item) => item.categories);
  return [...new Set(all)];
});

const filteredItems = computed(() => {
  let items = [...portfolioItems];

  if (selectedCategory.value) {
    items = items.filter((item) => item.categories.includes(selectedCategory.value!));
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

          <div class="mt-6 flex flex-wrap items-center gap-4">
            <div class="flex flex-wrap items-center gap-2">
              <button
                v-for="category in categories"
                :key="category"
                class="px-3 py-1 rounded-full border text-sm transition"
                :class="selectedCategory === category ? 'bg-neutral-800 text-white' : 'bg-neutral-100 hover:bg-neutral-200'"
                @click="selectedCategory = category === selectedCategory ? null : category">
                {{ category }}
              </button>
            </div>

            <Select v-model="sortOrder">
              <SelectTrigger>
                <SelectValue placeholder="Sort by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
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
