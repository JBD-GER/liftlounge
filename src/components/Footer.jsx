import { Phone } from 'lucide-react';
import { site } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="/" aria-label="LiftLounge Startseite">
            <span className="brand-mark">LL</span>
            <span>
              <strong>LiftLounge</strong>
              <small>{site.owner}</small>
            </span>
          </a>
          <p>
            Lash Lifting, Brow Lifting und Kombi-Behandlungen in Barsinghausen
            bei Hannover.
          </p>
        </div>

        <address>
          <strong>Inhaberin</strong>
          <span>{site.owner}</span>
          <span>{site.legalAddress.street}</span>
          <span>{site.legalAddress.postalCity}</span>
        </address>

        <address>
          <strong>Standort der Behandlungen</strong>
          <span>{site.trainingAddress.street}</span>
          <span>{site.trainingAddress.postalCity}</span>
          <a href={site.phoneHref}>
            <Phone aria-hidden="true" size={16} />
            {site.phone}
          </a>
        </address>

        <nav aria-label="Rechtliches">
          <strong>Rechtliches</strong>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/agb">AGB</a>
          <a href="/#kontakt">Kontakt</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} LiftLounge. Alle Rechte vorbehalten.</span>
      </div>
    </footer>
  );
}
