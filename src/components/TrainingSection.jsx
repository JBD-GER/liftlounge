import { ArrowRight, GraduationCap } from 'lucide-react';
import { trainingOffers } from '../data/siteData.js';

export default function TrainingSection() {
  return (
    <section className="section section-muted" id="schulungen">
      <div className="container training-strip">
        <div>
          <p className="eyebrow">Schulungen</p>
          <h2>Schulungen für Lash Lifting & Brow Lifting</h2>
          <p>
            Praxisnahe Einzelschulungen, persönlich abgestimmt und nach Anfrage
            terminiert.
          </p>
          <a className="button button-secondary" href="#kontakt">
            Schulung anfragen
            <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>

        <div className="training-cards">
          {trainingOffers.map((offer) => (
            <article className="training-card" key={offer.name}>
              <span className="training-icon">
                <GraduationCap aria-hidden="true" size={21} />
              </span>
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
