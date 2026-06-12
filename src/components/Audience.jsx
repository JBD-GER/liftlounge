import { CheckCircle2 } from 'lucide-react';
import { audience } from '../data/siteData.js';

export default function Audience() {
  return (
    <section className="section section-muted">
      <div className="container audience-layout">
        <div className="section-heading">
          <p className="eyebrow">Für wen?</p>
          <h2>Für wen eignet sich Lash Lifting?</h2>
          <p>
            Lash Lifting eignet sich, wenn du deine natürlichen Wimpern
            sichtbarer betonen möchtest, ohne täglich viel Zeit in Mascara oder
            Wimpernzange zu investieren.
          </p>
        </div>
        <div className="audience-grid">
          {audience.map((item) => (
            <div className="audience-item" key={item}>
              <CheckCircle2 aria-hidden="true" size={21} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
