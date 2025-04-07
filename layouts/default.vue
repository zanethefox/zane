<script setup lang="ts"></script>

<template>
  <div>
    <Menu />

    <main class="w-full flex-auto">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
