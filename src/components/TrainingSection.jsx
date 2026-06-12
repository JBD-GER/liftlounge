import { ArrowRight, GraduationCap } from 'lucide-react';
import { trainingOffers } from '../data/siteData.js';

export default function TrainingSection() {
  return (
    <section className="section section-muted" id="schulungen">
      <div className="container training-layout">
        <div>
          <p className="eyebrow">Schulungen</p>
          <h2>Ergänzende Lash & Brow Schulungen auf Anfrage</h2>
          <p>
            Neben den kosmetischen Behandlungen können Schulungen für Lash
            Lifting und Brow Lifting angefragt werden. Dieser Bereich ist
            bewusst sekundär und wird persönlich abgestimmt.
          </p>
          <a className="button button-secondary" href="#kontakt">
            Schulung anfragen
            <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>

        <div className="training-cards">
          {trainingOffers.map((offer) => (
            <article className="training-card" key={offer.name}>
              <GraduationCap aria-hidden="true" size={22} />
              <div>
                <h3>{offer.name}</h3>
                <strong>{offer.price}</strong>
                <p>{offer.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
