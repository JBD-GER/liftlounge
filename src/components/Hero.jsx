import { ArrowRight, Award, CheckCircle2, MapPin, Phone, Sparkles } from 'lucide-react';
import { heroHighlights, site } from '../data/siteData.js';

export default function Hero() {
  return (
    <section className="hero section-band" id="top">
      <div className="container hero-grid">
        <div className="hero-copy animate-in">
          <p className="eyebrow">LiftLounge by Lea Kirfel</p>
          <h1>Lash Lifting Hannover</h1>
          <p className="hero-claim">
            Natürlicher Schwung, gepflegte Wimpern und ein frischer Blick ohne
            Extensions. Persönlich behandelt am Standort Barsinghausen bei
            Hannover.
          </p>
          <div className="hero-actions" aria-label="Kontaktoptionen">
            <a className="button button-primary" href="#kontakt">
              Termin anfragen
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className="button button-secondary" href={site.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              Jetzt anrufen
            </a>
          </div>
          <ul className="hero-pills" aria-label="Behandlungsmerkmale">
            {heroHighlights.map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" size={17} />
                {item}
              </li>
            ))}
          </ul>
          <div className="hero-location">
            <MapPin aria-hidden="true" size={17} />
            Am Schafanger 12, 30890 Barsinghausen
          </div>
        </div>

        <div className="hero-visual animate-in delay-1">
          <img
            src="/images/model-1.jpg"
            alt="Lash Lifting Behandlung bei LiftLounge in einem hellen Beauty-Studio"
            width="1400"
            height="933"
            decoding="async"
            fetchPriority="high"
          />
          <div className="hero-note" aria-label="Lash Lifting Behandlung">
            <span className="note-icon">
              <Award aria-hidden="true" size={19} />
            </span>
            <span>
              <strong>Färben & Pflege inklusive</strong>
              <small>für gepflegte Naturwimpern</small>
            </span>
          </div>
          <div className="hero-badge">
            <Sparkles aria-hidden="true" size={17} />
            Natürliche Ergebnisse
          </div>
        </div>
      </div>
    </section>
  );
}
