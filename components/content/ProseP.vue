<template>
  <div
    class="cursor-pointer transition-all duration-150 ease-in-out"
    :class="{
      'bg-pink-50 rounded-md px-3 -mx-3': isHighlighted
    }"
    @click="toggleHighlight">
    <p ref="el">
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
  return text
    .split(' ')
    .map((word) => word[0])
    .join('');
}

function checkHash() {
  isHighlighted.value = route.query.highlight === hash.value;
}

function toggleHighlight(event: MouseEvent) {
  if ((event.target as HTMLElement).tagName !== 'P') return;

  if (!hash.value) return;

  if (isHighlighted.value) {
    router.replace({ query: {} });
    isHighlighted.value = false;
  } else {
    router.replace({ query: { highlight: hash.value } });
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
