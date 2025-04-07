<script setup lang="ts">
import { mainMenu } from '@/composables/menu';
import { socialLinks } from '@/composables/socials';

const footerMenu = mainMenu.filter((item) => !item.children);
</script>

<template>
  <footer>
    <div class="bg-neutral-100/95 border border-neutral-200 backdrop-blur-md backdrop-saturate-125 m-1 rounded-3xl py-14">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-between items-center">
        <div class="max-w-2xl lg:max-w-none flex flex-col gap-8">
          <nav class="flex flex-row flex-wrap gap-6">
            <li v-for="link in footerMenu" :key="link.href" class="flex items-center gap-1">
              <template v-if="link.external">
                <a
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-neutral-900 hover:underline text-neutral-800 transition-colors duration-200 flex items-center gap-1">
                  {{ link.title }}
                  <Icon name="lucide:external-link" class="w-4 h-4 opacity-60" />
                </a>
              </template>
              <template v-else>
                <NuxtLink :to="link.href" class="hover:text-neutral-900 hover:underline text-neutral-800 transition-colors duration-200">
                  {{ link.title }}
                </NuxtLink>
              </template>
            </li>
          </nav>
          <nav class="flex flex-row flex-wrap gap-1 -ms-2">
            <NuxtLink
              v-for="s in socialLinks"
              :key="s.name"
              :href="s.url"
              target="_blank"
              :title="s.name"
              class="rounded-full p-2.5 transition text-neutral-800 hover:bg-neutral-950/10 text-lg flex">
              <Icon :name="s.icon" class="flex h-6 w-6" />
            </NuxtLink>
          </nav>

          <div class="text-xs text-neutral-500">&copy; {{ new Date().getFullYear() }} ZaneTheFox :3</div>
        </div>

        <NuxtImg src="/images/ZaneChibiSwitch.webp" placeholder loading="lazy" class="w-32 h-32 object-cover hidden sm:block" />
      </div>
    </div>
  </footer>
</template>
