import { Car, MapPin } from 'lucide-react';
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
        <div className="parking-card">
          <img
            src="/images/parken.png"
            alt="Parkhinweis für LiftLounge: Parken an der Straße Am Schafanger, Eingang gegenüber"
            width="1126"
            height="1081"
            loading="lazy"
            decoding="async"
          />
          <div className="parking-copy">
            <Car aria-hidden="true" size={22} />
            <div>
              <strong>Parken vor Ort</strong>
              <p>
                Du kannst direkt am Schafanger parken. Der Eingang liegt
                gegenüber der markierten Parkfläche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
