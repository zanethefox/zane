<template>
  <span class="inline-flex items-center gap-1">
    <NuxtLink
      :href="href"
      :rel="!isInternal ? 'noopener noreferrer' : undefined"
      :target="isInternal ? target || undefined : '_blank'"
      class="inline font-normal underline-offset-4 transition text-neutral-900 hover:text-neutral-700 hover:underline">
      <slot />
    </NuxtLink>
    <template v-if="!isInternal">
      <NuxtImg
        v-if="!showFallbackFavicon"
        class="inline-block relative not-prose"
        :src="faviconUrl"
        width="16"
        height="16"
        @error="showFallbackFavicon = true" />
      <span v-else class="text-sm" aria-label="External link">↗</span>
    </template>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  target: {
    type: String,
    default: undefined
  }
});

const isInternal = computed(() => props.href.startsWith('/'));

const showFallbackFavicon = ref(false);
const faviconUrl = computed(() => {
  try {
    const hostname = new URL(props.href).hostname;
    return `https://icons.duckduckgo.com/ip3/${hostname}.ico`;
  } catch {
    return '';
  }
});
</script>
