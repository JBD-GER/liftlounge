import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { site } from '../data/siteData.js';
import SEO from './SEO.jsx';

const googleAdsConversionId = 'AW-18282813022';
const googleAdsConversionLabel = '-R6RCP7Tw8ccEN6s9o1E';
const googleAdsScriptId = 'liftlounge-google-ads-tag';
const googleAdsSendTo = `${googleAdsConversionId}/${googleAdsConversionLabel}`;
const conversionStoragePrefix = 'liftlounge-google-ads-lead-conversion:';

function loadGoogleAdsTag() {
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

function GoogleAdsLeadConversion() {
  useEffect(() => {
    const leadToken =
      new URLSearchParams(window.location.search).get('lead') || 'direct-thank-you';
    const storageKey = `${conversionStoragePrefix}${leadToken}`;

    try {
      if (window.sessionStorage.getItem(storageKey)) return;
      window.sessionStorage.setItem(storageKey, '1');
    } catch {
      // Tracking should still run if sessionStorage is unavailable.
    }

    loadGoogleAdsTag();
    window.gtag('event', 'conversion', {
      send_to: googleAdsSendTo,
    });
  }, []);

  return null;
}

export default function ThankYou() {
  return (
    <>
      <GoogleAdsLeadConversion />
      <SEO
        title="Danke für deine Anfrage | LiftLounge"
        description="Deine Anfrage wurde erfolgreich an LiftLounge übermittelt."
        path="/danke"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Danke für deine Anfrage',
        }}
      />
      <main className="thank-you-main">
        <section className="section">
          <div className="container thank-you-layout">
            <div className="thank-you-icon" aria-hidden="true">
              <CheckCircle2 size={34} />
            </div>
            <p className="eyebrow">Anfrage gesendet</p>
            <h1>Danke, deine Anfrage wurde erfolgreich übermittelt.</h1>
            <p>
              Lea meldet sich zeitnah persönlich bei dir. Falls du noch etwas
              ergänzen möchtest, kannst du LiftLounge auch direkt per WhatsApp
              schreiben.
            </p>
            <div className="thank-you-actions">
              <a className="button button-primary" href="/">
                Zur Startseite
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a
                className="button button-secondary"
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
