import { ArrowRight, Check, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { pricingPackages } from '../data/siteData.js';

export default function Pricing() {
  return (
    <section className="section section-muted" id="preise">
      <div className="container">
        <div className="section-heading narrow">
          <p className="eyebrow">Preise & Pakete</p>
          <h2>Preis für Lash Lifting</h2>
          <p>
            Das Angebot ist bewusst klar gehalten: Lash Lifting inklusive
            Färben und pflegender Keratin-Komponente.
          </p>
        </div>
        <div className="pricing-panel">
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
                <p className="price">{plan.price}</p>
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
          <aside className="pricing-side-note">
            <div>
              <Sparkles aria-hidden="true" size={21} />
              <strong>Natürliches Finish</strong>
              <span>Das Ergebnis wird auf deine Naturwimpern abgestimmt.</span>
            </div>
            <div>
              <Clock aria-hidden="true" size={21} />
              <strong>ca. 60-90 Minuten</strong>
              <span>Genug Zeit für Vorbereitung, Farbe und Pflege.</span>
            </div>
            <div>
              <ShieldCheck aria-hidden="true" size={21} />
              <strong>Pflegehinweise inklusive</strong>
              <span>Damit das Lash Lifting möglichst lange schön bleibt.</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
