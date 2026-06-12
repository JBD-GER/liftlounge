import { ArrowRight, GraduationCap } from 'lucide-react';
import { trainingOffers } from '../data/siteData.js';

export default function TrainingSection() {
  return (
    <section className="section section-muted" id="schulungen">
      <div className="container training-layout">
        <div>
          <p className="eyebrow">Schulungen</p>
          <h2>Ergänzende Lash Lifting Schulung auf Anfrage</h2>
          <p>
            Neben der kosmetischen Behandlung kann eine Lash Lifting Schulung
            angefragt werden. Dieser Bereich bleibt bewusst sekundär und wird
            persönlich abgestimmt.
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
