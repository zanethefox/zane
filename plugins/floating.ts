import FloatingVue from 'floating-vue';

export default defineNuxtPlugin((nuxtApp) => {
  FloatingVue.options.themes['zane'] = {
    ...FloatingVue.options.themes.tooltip,
    placement: 'top',
    triggers: ['click', 'hover'],
    autoHide: false
  };
  nuxtApp.vueApp.use(FloatingVue);
  return;
});
