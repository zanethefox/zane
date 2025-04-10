import { useCookie } from '#app';

export function useConsent() {
  const consent = useCookie<{
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
  }>('cookieConsent');

  const hasConsent = (category: keyof typeof consent.value) => {
    return consent.value?.[category] ?? false;
  };

  return { hasConsent };
}
