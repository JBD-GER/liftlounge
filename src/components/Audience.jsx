import { CheckCircle2 } from 'lucide-react';
import { audience } from '../data/siteData.js';

export default function Audience() {
  return (
    <section className="section section-muted">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Für wen?</p>
          <h2>Für wen eignen sich Lash & Brow Liftings?</h2>
          <p>
            Lash Lifting und Brow Lifting eignen sich, wenn du deine natürlichen
            Wimpern und Augenbrauen betonen möchtest, ohne täglich viel Zeit in
            Styling, Mascara oder Brow-Gel zu investieren.
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
