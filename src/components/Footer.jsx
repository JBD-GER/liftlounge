import { Phone } from 'lucide-react';
import { site } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="/" aria-label="LiftLounge Startseite">
            <img
              className="brand-logo"
              src="/images/liftlounge.png"
              alt="LiftLounge by Lea Kirfel"
              width="750"
              height="188"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p>
            Lash Lifting und Brow Lifting am Standort Barsinghausen.
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
          <a href="/ratgeber">Ratgeber</a>
          <a href="/#kontakt">Kontakt</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} LiftLounge. Alle Rechte vorbehalten.</span>
      </div>
    </footer>
  );
}
