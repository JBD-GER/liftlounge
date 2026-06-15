import { ArrowRight, Car, MapPin, Phone } from 'lucide-react';
import { site } from '../data/siteData.js';

export default function Location() {
  return (
    <section className="section section-muted" id="standort">
      <div className="container">
        <div className="location-panel">
          <div className="location-copy">
            <p className="eyebrow">Standort</p>
            <h2>Standort Barsinghausen für Lash Lifting & Brow Lifting</h2>
            <p>
              Gut erreichbar aus Hannover, Wunstorf, Gehrden, Wennigsen,
              Neustadt am Rübenberge, Seelze und der Region Hannover.
            </p>
            <div className="location-actions">
              <a className="button button-primary" href="#kontakt">
                Termin anfragen
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="button button-secondary" href={site.phoneHref}>
                <Phone aria-hidden="true" size={18} />
                Anrufen
              </a>
            </div>
          </div>

          <div className="location-card">
            <div className="address-block">
              <MapPin aria-hidden="true" size={22} />
              <address>
                <strong>Standort der Behandlungen</strong>
                <span>{site.trainingAddress.street}</span>
                <span>{site.trainingAddress.postalCity}</span>
              </address>
            </div>
            <div className="address-block">
              <Car aria-hidden="true" size={22} />
              <div>
                <strong>Parken</strong>
                <span>Hinweise zum Parken findest du unten im FAQ.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
