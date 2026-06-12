import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { services } from '../data/siteData.js';

export default function Services() {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Leistungen</p>
          <h2>Lash Lifting für natürlich schöne Wimpern</h2>
          <p>
            Der Fokus liegt auf einer ruhigen, sauberen Wimpernbehandlung, die
            deine eigenen Naturwimpern sichtbar anhebt, färbt und pflegt.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.name}>
              <img
                src={service.image}
                alt={service.alt}
                width="1400"
                height="933"
                loading="lazy"
                decoding="async"
              />
              <div className="service-card-body">
                <div className="service-meta">
                  <span>{service.eyebrow}</span>
                  <span>
                    <Clock aria-hidden="true" size={15} />
                    {service.duration}
                  </span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <strong>{service.price}</strong>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 aria-hidden="true" size={17} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a className="inline-link" href="#kontakt">
                  Termin anfragen
                  <ArrowRight aria-hidden="true" size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
