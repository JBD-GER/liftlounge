import { ArrowRight, Check } from 'lucide-react';
import { pricingPackages } from '../data/siteData.js';

export default function Pricing() {
  return (
    <section className="section section-muted" id="preise">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Preise & Pakete</p>
          <h2>Pakete für deine 1:1 Wimpernschulung</h2>
          <p>
            Die Pakete sind für unterschiedliche Startpunkte vorbereitet. Die
            finalen Preise werden transparent vor der Terminbestätigung
            abgestimmt, da der Referenzlink für die exakte Preisübernahme noch
            fehlt.
          </p>
        </div>
        <div className="pricing-grid">
          {pricingPackages.map((plan) => (
            <article
              className={plan.featured ? 'pricing-card pricing-card-featured' : 'pricing-card'}
              key={plan.name}
            >
              <p className="pricing-eyebrow">{plan.eyebrow}</p>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p className="pricing-description">{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check aria-hidden="true" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a className="button button-primary full-width" href="#kontakt">
                Schulung anfragen
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
