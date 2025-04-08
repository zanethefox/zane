import FloatingVue from 'floating-vue';

export default defineNuxtPlugin((nuxtApp) => {
  FloatingVue.options.themes['zane'] = {
    ...FloatingVue.options.themes.tooltip,
    placement: 'top'
  };
  nuxtApp.vueApp.use(FloatingVue);
  return;
});
