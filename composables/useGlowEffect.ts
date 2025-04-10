import { ref } from 'vue';

export function useGlowEffect() {
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

  return {
    x,
    y,
    glowVisible,
    updateGlow,
    hideGlow
  };
}
