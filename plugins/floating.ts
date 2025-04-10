import FloatingVue from 'floating-vue';

export default defineNuxtPlugin(() => {
  FloatingVue.options.themes['zane'] = {
    ...FloatingVue.options.themes.tooltip,
    placement: 'top',
    triggers: ['click', 'hover'],
    autoHide: false
  };
  return;
});
