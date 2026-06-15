import { MapPin } from 'lucide-react';
import { site } from '../data/siteData.js';

export default function Location() {
  return (
    <section className="section section-muted" id="standort">
      <div className="container location-layout">
        <div>
          <p className="eyebrow">Standort</p>
          <h2>Standort Barsinghausen für Lash Lifting & Brow Lifting</h2>
          <p>
            Gut erreichbar aus Hannover, Wunstorf, Gehrden, Wennigsen,
            Neustadt am Rübenberge, Seelze und der Region Hannover.
          </p>
          <div className="address-block">
            <MapPin aria-hidden="true" size={22} />
            <address>
              <strong>Standort der Behandlungen</strong>
              <span>{site.trainingAddress.street}</span>
              <span>{site.trainingAddress.postalCity}</span>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
