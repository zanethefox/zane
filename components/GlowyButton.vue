<script setup lang="ts">
import { ref } from 'vue';

const { tag, size, theme } = defineProps({
  tag: {
    type: String,
    default: 'button'
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md'
  },
  theme: {
    type: String as PropType<'dark' | 'light'>,
    default: 'dark'
  }
});

const sizeClasses = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3'
}[size];

const themeClasses = {
  dark: 'relative overflow-hidden rounded-full border-1 border-neutral-900 bg-neutral-900 text-white font-medium transition hover:bg-neutral-800 hover:text-shadow-black/10 text-shadow-lg active:scale-[0.98] ring-1 shadow-md ring-neutral-500/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_4px_1px_#ffffff4d]',
  light:
    'relative inline-flex items-center justify-center rounded-full border border-transparent bg-white/15 ring-1 shadow-md ring-neutral-100 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff] whitespace-nowrap text-gray-950 data-disabled:bg-white/15 data-disabled:opacity-40 hover:bg-neutral-100'
}[theme];

const { x, y, glowVisible, updateGlow, hideGlow } = useGlowEffect();
</script>

<template>
  <component
    :is="tag"
    :class="[sizeClasses, themeClasses]"
    class=""
    @mousemove="updateGlow"
    @mouseleave="hideGlow"
    @focus="glowVisible = true"
    @blur="glowVisible = false">
    <span class="relative z-10">
      <slot />
    </span>

    <span
      v-if="glowVisible"
      class="absolute inset-0 z-0 pointer-events-none duration-300 rounded-full transition"
      :style="{
        background: `radial-gradient(circle at ${x}px ${y}px, ${theme === 'light' ? `rgba(255,255,255,1)` : `rgba(255,255,255,0.125)`}, transparent 50%)`,
        opacity: glowVisible ? 1 : 0
      }" />
  </component>
</template>
