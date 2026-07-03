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
  const isLiabilityNotice =
    new URLSearchParams(window.location.search).get('type') === 'haftungshinweis';

  return (
    <>
      <GoogleAdsLeadConversion />
      <SEO
        title={isLiabilityNotice ? 'Haftungshinweis gesendet | LiftLounge' : 'Danke für deine Anfrage | LiftLounge'}
        description={
          isLiabilityNotice
            ? 'Dein Haftungshinweis wurde erfolgreich an LiftLounge übermittelt.'
            : 'Deine Anfrage wurde erfolgreich an LiftLounge übermittelt.'
        }
        path="/danke"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: isLiabilityNotice ? 'Haftungshinweis gesendet' : 'Danke für deine Anfrage',
        }}
      />
      <main className="thank-you-main">
        <section className="section">
          <div className="container thank-you-layout">
            <div className="thank-you-icon" aria-hidden="true">
              <CheckCircle2 size={34} />
            </div>
            <p className="eyebrow">
              {isLiabilityNotice ? 'Haftungshinweis gesendet' : 'Anfrage gesendet'}
            </p>
            <h1>
              {isLiabilityNotice
                ? 'Danke, dein Haftungshinweis wurde erfolgreich übermittelt.'
                : 'Danke, deine Anfrage wurde erfolgreich übermittelt.'}
            </h1>
            <p>
              {isLiabilityNotice
                ? 'Du erhältst eine Bestätigung per E-Mail, sofern die E-Mail-Adresse korrekt angegeben wurde. Falls du noch etwas ergänzen möchtest, kannst du LiftLounge direkt per WhatsApp schreiben.'
                : 'Lea meldet sich zeitnah persönlich bei dir. Falls du noch etwas ergänzen möchtest, kannst du LiftLounge auch direkt per WhatsApp schreiben.'}
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
