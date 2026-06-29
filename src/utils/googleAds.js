export const googleAdsConversionId = 'AW-18282813022';

const googleAdsScriptId = 'liftlounge-google-ads-tag';
const googleAdsScriptSelector = `script[src*="googletagmanager.com/gtag/js?id=${googleAdsConversionId}"]`;

export const googleAdsConversionLabels = {
  leadForm: '-R6RCP7Tw8ccEN6s9o1E',
  whatsappContact: 'YjyOCJ6Vw8ccEN6s9o1E',
};

export function loadGoogleAdsTag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  if (
    !document.getElementById(googleAdsScriptId) &&
    !document.querySelector(googleAdsScriptSelector)
  ) {
    const script = document.createElement('script');
    script.id = googleAdsScriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAdsConversionId}`;
    document.head.appendChild(script);
  }

  const isConfigured =
    window.__liftloungeGoogleAdsConfigured ||
    window.dataLayer.some(
      (entry) => entry?.[0] === 'config' && entry?.[1] === googleAdsConversionId,
    );

  if (!isConfigured) {
    window.gtag('js', new Date());
    window.gtag('config', googleAdsConversionId);
  }

  window.__liftloungeGoogleAdsConfigured = true;
}

export function fireGoogleAdsConversion(label) {
  loadGoogleAdsTag();
  window.gtag('event', 'conversion', {
    send_to: `${googleAdsConversionId}/${label}`,
  });
}
