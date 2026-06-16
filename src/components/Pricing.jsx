import { ArrowRight, Check, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { addOnServices, pricingPackages } from '../data/siteData.js';

export default function Pricing() {
  return (
    <section className="section section-muted" id="preise">
      <div className="container">
        <div className="section-heading narrow">
          <p className="eyebrow">Preise & Optionen</p>
          <h2>Behandlungen auf einen Blick</h2>
          <p>
            Kurz gehalten, damit du schnell die passende Anfrage stellen kannst.
          </p>
        </div>
        <div className="pricing-panel">
          <div className="pricing-cards">
            {pricingPackages.map((plan) => (
              <article
                className={plan.featured ? 'pricing-card pricing-card-featured' : 'pricing-card'}
                key={plan.name}
              >
                <div>
                  <p className="pricing-eyebrow">{plan.eyebrow}</p>
                  <h3>{plan.name}</h3>
                  <p className="pricing-description">{plan.description}</p>
                </div>
                <div className="price-box">
                  <span>Behandlungspreis</span>
                  <p className={plan.price.includes('Anfrage') ? 'price price-request' : 'price'}>
                    {plan.price}
                  </p>
                  <a className="button button-primary full-width" href="#kontakt">
                    Termin anfragen
                    <ArrowRight aria-hidden="true" size={18} />
                  </a>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="pricing-add-ons" aria-label="Zusatzservices">
            {addOnServices.map((service) => (
              <article className="pricing-add-on-card" key={service.name}>
                <div className="pricing-add-on-copy">
                  <p className="pricing-eyebrow">Zusatzservice</p>
                  <h3>{service.name}</h3>
                  <p className="pricing-description">{service.description}</p>
                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <Check aria-hidden="true" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-add-on-action">
                  <span>ab</span>
                  <strong>{service.price}</strong>
                  <a className="button button-primary" href="#kontakt">
                    Anfragen
                    <ArrowRight aria-hidden="true" size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <aside className="pricing-side-note">
            <div>
              <Sparkles aria-hidden="true" size={21} />
              <strong>Natürliches Finish</strong>
              <span>Form und Ergebnis werden typgerecht abgestimmt.</span>
            </div>
            <div>
              <Clock aria-hidden="true" size={21} />
              <strong>Ruhiger Termin</strong>
              <span>Genug Zeit für Vorbereitung, Lifting und Pflege.</span>
            </div>
            <div>
              <ShieldCheck aria-hidden="true" size={21} />
              <strong>Pflegehinweise inklusive</strong>
              <span>Damit dein Ergebnis möglichst lange schön bleibt.</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
