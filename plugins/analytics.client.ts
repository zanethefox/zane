import { useConsent } from '~/composables/useConsent';

export default defineNuxtPlugin(() => {
  const { hasConsent } = useConsent();

  if (hasConsent('analytics')) {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-1GLTD6RSWK';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-1GLTD6RSWK');
  }
});
