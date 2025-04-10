<script setup lang="ts">
import { formatDate } from '~/lib/formatDate';

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first();
});

watchEffect(() => {
  if (post.value) {
    useSeoMeta({
      title: `${post.value.title} — Blog — ZaneTheFox.com`,
      description: post.value.description,
      ogTitle: post.value.title,
      ogDescription: post.value.description,
      ogType: 'article',
      author: 'ZaneTheFox'
    });
  }
});
</script>

<template>
  <div>
    <ClientOnly>
      <template v-if="post">
        <section class="max-w-3xl mx-auto px-4 py-12 prose prose-lg md:prose-xl dark:prose-invert">
          <article class="mt-24 sm:mt-32 lg:mt-40">
            <header class="mx-auto flex max-w-5xl flex-col text-center">
              <time :dateTime="post.date" class="text-sm text-neutral-600 mb-6">
                {{ formatDate(post.date) }}
              </time>
              <h1 class="mt-10 font-display text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-5xl">
                {{ post.title }}
              </h1>

              <div class="flex gap-2 items-center justify-center">
                <div class="rounded-full bg-white/90 p-0.5 ring-1 shadow-lg shadow-neutral-800/5 ring-neutral-900/5">
                  <NuxtImg
                    src="/images/ZaneIcon.webp"
                    placeholder
                    placeholder-class="bg-neutral-200 animate-pulse"
                    loading="lazy"
                    class="h-10 w-10 rounded-full bg-neutral-100 object-cover !m-0" />
                </div>

                <p class="mt-6 text-sm font-semibold text-neutral-950 !m-0">by Zane</p>
              </div>
            </header>
          </article>

          <ContentRenderer :value="post" class="mt-24 sm:mt-28 lg:mt-32" />
        </section>
      </template>
      <template v-else>
        <div class="empty-page">
          <section class="max-w-3xl mx-auto px-4 py-12 prose prose-lg md:prose-xl dark:prose-invert">
            <article class="mt-24 sm:mt-32 lg:mt-40">
              <header class="mx-auto flex max-w-5xl flex-col">
                <h1 class="mt-10 font-display text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-5xl">
                  Page Not Found
                </h1>
                <p class="text-lg text-neutral-600">Oops! The content you're looking for doesn't exist.</p>
                <NuxtLink to="/" class="underline text-neutral-600 hover:text-neutral-900">Go back home</NuxtLink>
              </header>
            </article>
          </section>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
