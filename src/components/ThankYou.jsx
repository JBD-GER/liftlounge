import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { site } from '../data/siteData.js';
import {
  fireGoogleAdsConversion,
  googleAdsConversionLabels,
} from '../utils/googleAds.js';
import SEO from './SEO.jsx';

const conversionStoragePrefix = 'liftlounge-google-ads-lead-conversion:';

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

    fireGoogleAdsConversion(googleAdsConversionLabels.leadForm);
  }, []);

  return null;
}

function handleWhatsAppClick() {
  fireGoogleAdsConversion(googleAdsConversionLabels.whatsappContact);
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
                onClick={handleWhatsAppClick}
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
