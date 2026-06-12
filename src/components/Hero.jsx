import { ArrowRight, Award, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { heroHighlights, site } from '../data/siteData.js';

export default function Hero() {
  return (
    <section className="hero section-band" id="top">
      <div className="container hero-grid">
        <div className="hero-copy animate-in">
          <p className="eyebrow">Lashlifting Schulung Barsinghausen</p>
          <h1>LiftLounge</h1>
          <p className="hero-claim">
            Hochwertige 1:1 Wimpernschulung in Barsinghausen bei Hannover.
            Persönlich, praxisnah und mit Zertifikat.
          </p>
          <div className="hero-actions" aria-label="Kontaktoptionen">
            <a className="button button-primary" href="#kontakt">
              Schulung anfragen
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className="button button-secondary" href={site.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              Jetzt anrufen
            </a>
          </div>
          <ul className="hero-pills" aria-label="Schulungsmerkmale">
            {heroHighlights.map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" size={17} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual animate-in delay-1">
          <img
            src="/images/model-1.jpg"
            alt="1:1 Lashlifting Schulung bei LiftLounge in einem hellen Beauty-Studio"
            width="1400"
            height="933"
            decoding="async"
            fetchPriority="high"
          />
          <div className="hero-note" aria-label="Schulung mit Zertifikat">
            <span className="note-icon">
              <Award aria-hidden="true" size={19} />
            </span>
            <span>
              <strong>Zertifikat inklusive</strong>
              <small>1:1 Betreuung vor Ort</small>
            </span>
          </div>
          <div className="hero-badge">
            <Sparkles aria-hidden="true" size={17} />
            Für Anfängerinnen geeignet
          </div>
        </div>
      </div>
    </section>
  );
}
