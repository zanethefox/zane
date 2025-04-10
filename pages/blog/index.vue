<script setup lang="ts">
import { formatDate } from '~/lib/formatDate';
import { ref } from 'vue';

const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all());

useSeoMeta({
  title: 'Blog — ZaneTheFox.com',
  ogTitle: 'Blog — ZaneTheFox.com',
  description: 'Check out blog posts ranging from gear reviews, technology, mechanical keyboards, and—of course—coffee culture.',
  ogDescription: 'Check out blog posts ranging from gear reviews, technology, mechanical keyboards, and—of course—coffee culture.'
});

const { x, y, glowVisible, updateGlow, hideGlow } = useGlowEffect();
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-36 md:mt-56">
      <!-- header -->
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="max-w-3xl gap-8 flex flex-col">
          <h1 class="font-d text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-5xl">Blog</h1>
          <p class="text-neutral-600">Read my blog :3</p>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-20 md:mt-36">
      <!-- header -->
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="max-w-3xl gap-8 flex flex-col">
          <article v-for="post in posts" :key="post.id" class="md:grid md:grid-cols-4 md:items-baseline">
            <div
              class="md:col-span-3 group relative flex flex-col items-start"
              @mousemove="updateGlow"
              @mouseleave="hideGlow"
              @focus="glowVisible = true"
              @blur="glowVisible = false">
              <h2 class="text-base font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
                <div
                  class="border border-transparent ring-1 ring-neutral-100 after:absolute after:inset-0 after:rounded-2xl after:shadow-[inset_0_0_2px_1px_#ffffff] whitespace-nowrap absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl">
                  <span
                    v-if="glowVisible"
                    class="absolute -inset-[1px] z-0 sm:rounded-2xl pointer-events-none duration-300 rounded-full transition"
                    :style="{
                      background: `radial-gradient(circle at ${x}px ${y}px, var(--color-white), transparent 50%)`,
                      opacity: glowVisible ? 1 : 0
                    }" />
                </div>
                <div
                  class="hidden absolute -inset-x-4 -inset-y-6 z-0 sm:-inset-x-6 sm:rounded-2xl group-hover:before:bg-[position:-100%_0,0_0] group-hover:before:duration-[1500ms] before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.75)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease]" />
                <NuxtLink :to="post.path">
                  <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span class="relative z-10" v-text="post.title" />
                </NuxtLink>
              </h2>
              <time
                class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-neutral-400 dark:text-neutral-500"
                :datetime="post.date"
                v-text="formatDate(post.date)" />
              <p class="relative z-10 mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3" v-text="post.description" />
            </div>
            <time
              class="mt-1 max-md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-neutral-400 dark:text-neutral-500"
              :datetime="post.date"
              v-text="formatDate(post.date)" />
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
