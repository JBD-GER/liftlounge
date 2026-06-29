import { MessageCircle } from 'lucide-react';
import { site } from '../data/siteData.js';
import {
  fireGoogleAdsConversion,
  googleAdsConversionLabels,
} from '../utils/googleAds.js';

function handleWhatsAppClick() {
  fireGoogleAdsConversion(googleAdsConversionLabels.whatsappContact);
}

export default function MobileCTA() {
  return (
    <div className="mobile-cta" aria-label="Schnelle Kontaktoptionen">
      <a href="#kontakt">Termin anfragen</a>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noreferrer"
        onClick={handleWhatsAppClick}
      >
        <MessageCircle aria-hidden="true" size={17} />
        WhatsApp
      </a>
    </div>
  );
}
