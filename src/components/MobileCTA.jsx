import { Phone } from 'lucide-react';
import { site } from '../data/siteData.js';

export default function MobileCTA() {
  return (
    <div className="mobile-cta" aria-label="Schnelle Kontaktoptionen">
      <a href="#kontakt">Termin anfragen</a>
      <a href={site.phoneHref}>
        <Phone aria-hidden="true" size={17} />
        Anrufen
      </a>
    </div>
  );
}
