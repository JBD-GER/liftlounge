import { MessageCircle } from 'lucide-react';
import { site } from '../data/siteData.js';

export default function MobileCTA() {
  return (
    <div className="mobile-cta" aria-label="Schnelle Kontaktoptionen">
      <a href="#kontakt">Termin anfragen</a>
      <a href={site.whatsappHref} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" size={17} />
        WhatsApp
      </a>
    </div>
  );
}
