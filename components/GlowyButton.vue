<script setup lang="ts">
import { ref, defineProps } from 'vue';

const { tag, size } = defineProps({
  tag: {
    type: String,
    default: 'button'
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md'
  }
});

const sizeClasses = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3'
}[size];

const x = ref(0);
const y = ref(0);
const glowVisible = ref(false);

function updateGlow(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  x.value = e.clientX - rect.left;
  y.value = e.clientY - rect.top;
  glowVisible.value = true;
}

function hideGlow() {
  glowVisible.value = false;
}
</script>

<template>
  <component
    :is="tag"
    :class="sizeClasses"
    class="relative overflow-hidden rounded-full border-1 border-neutral-900 bg-neutral-900 text-white font-medium transition hover:bg-neutral-800 hover:text-shadow-black/10 text-shadow-lg active:scale-[0.98] ring-1 shadow-md ring-neutral-500/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_4px_1px_#ffffff4d]"
    @mousemove="updateGlow"
    @mouseleave="hideGlow">
    <span class="relative z-10">
      <slot />
    </span>

    <span
      v-if="glowVisible"
      class="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
      :style="{
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.125), transparent 50%)`,
        opacity: glowVisible ? 1 : 0
      }" />
  </component>
</template>
