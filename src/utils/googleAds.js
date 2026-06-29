export const googleAdsConversionId = 'AW-18282813022';

const googleAdsScriptId = 'liftlounge-google-ads-tag';

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

  if (!document.getElementById(googleAdsScriptId)) {
    const script = document.createElement('script');
    script.id = googleAdsScriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAdsConversionId}`;
    document.head.appendChild(script);
  }

  if (!window.__liftloungeGoogleAdsConfigured) {
    window.gtag('js', new Date());
    window.gtag('config', googleAdsConversionId);
    window.__liftloungeGoogleAdsConfigured = true;
  }
}

export function fireGoogleAdsConversion(label) {
  loadGoogleAdsTag();
  window.gtag('event', 'conversion', {
    send_to: `${googleAdsConversionId}/${label}`,
  });
}
