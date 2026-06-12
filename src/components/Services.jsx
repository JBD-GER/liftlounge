import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { services } from '../data/siteData.js';

export default function Services() {
  return (
    <section className="section services-section" id="leistungen">
      <div className="container">
        <div className="section-heading narrow">
          <p className="eyebrow">Leistungen</p>
          <h2>Lash Lifting für natürlich schöne Wimpern</h2>
          <p>
            Der Fokus liegt auf einer ruhigen, sauberen Wimpernbehandlung, die
            deine eigenen Naturwimpern sichtbar anhebt, färbt und pflegt.
          </p>
        </div>

        {services.map((service) => (
          <article className="treatment-showcase" key={service.name}>
            <div className="treatment-image-wrap">
              <img
                src={service.image}
                alt={service.alt}
                width="1400"
                height="933"
                loading="lazy"
                decoding="async"
              />
              <div className="treatment-floating">
                <Sparkles aria-hidden="true" size={18} />
                <span>Färben & Pflege inklusive</span>
              </div>
            </div>

            <div className="treatment-content">
              <div className="service-meta">
                <span>{service.eyebrow}</span>
                <span>
                  <Clock aria-hidden="true" size={15} />
                  {service.duration}
                </span>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="treatment-price-row">
                <strong>{service.price}</strong>
                <span>inklusive Färben & Keratin-Pflege</span>
              </div>
              <ul className="treatment-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 aria-hidden="true" size={17} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a className="button button-primary" href="#kontakt">
                Termin anfragen
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
