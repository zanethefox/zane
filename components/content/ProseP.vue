<template>
  <div
    class="px-2 -mx-2 rounded-2xl cursor-pointer transition-all duration-150 outline-0 outline-pink-50 hover:outline hover:outline-1 hover:outline-pink-50 hover:outline-offset-2 focus:outline focus:outline-2 focus:outline-pink-100 focus:outline-offset-2"
    :class="{
      'bg-pink-50 rounded-2xl px-3 -mx-3': isHighlighted
    }"
    tabindex="0"
    role="button"
    :aria-pressed="isHighlighted"
    :title="isHighlighted ? 'Remove highlight' : 'Highlight this paragraph'"
    @click="toggleHighlight"
    @keydown.enter="toggleHighlight"
    @keydown.space.prevent="toggleHighlight">
    <p ref="el" class="scroll-m-32">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const el = ref<HTMLElement | null>(null);
const isHighlighted = ref(false);
const hash = ref('');

function getTextContent(el: HTMLElement | null): string {
  return el?.textContent || '';
}

function generateHash(text: string): string {
  // Simple hash function that still produces readable and URL-friendly hashes
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36).slice(0, 8);
}

function checkHash() {
  isHighlighted.value = route.query.highlight === hash.value;
}

function toggleHighlight(event: MouseEvent) {
  // Check if the clicked element is part of the paragraph or its children
  const target = event.target as HTMLElement;
  if (!el.value?.contains(target) && target !== el.value) return;
  if (!hash.value) return;

  if (isHighlighted.value) {
    const newQuery = { ...route.query };
    delete newQuery.highlight;
    router.replace({ query: newQuery });
    isHighlighted.value = false;
  } else {
    router.replace({
      query: {
        ...route.query,
        highlight: hash.value
      }
    });
    isHighlighted.value = true;
  }
}

onMounted(() => {
  // Wait until slot content is rendered
  requestAnimationFrame(() => {
    const text = getTextContent(el.value);
    hash.value = generateHash(text);
    checkHash();

    if (isHighlighted.value && el.value) {
      el.value.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

watch(
  () => route.query.highlight,
  () => checkHash()
);
</script>
