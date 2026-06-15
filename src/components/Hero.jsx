import { ArrowRight, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { heroHighlights, site } from '../data/siteData.js';

export default function Hero() {
  return (
    <section className="hero section-band" id="top">
      <div className="hero-visual" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto" poster="/images/slider2.png">
          <source src="/images/slider3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">LiftLounge by Lea Kirfel</p>
          <h1>
            <span>Lash Lifting &</span>
            <span>Brow Lifting</span>
            <span>Hannover</span>
          </h1>
          <p className="hero-claim">
            Natürlicher Schwung, gepflegte Augenbrauen und ein frischer Blick
            in Barsinghausen bei Hannover.
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
      </div>
    </section>
  );
}
