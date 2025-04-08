<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheMenu />

    <main class="w-full flex-auto flex-grow">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<style scoped></style>
