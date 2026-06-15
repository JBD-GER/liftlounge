import { CheckCircle2 } from 'lucide-react';
import { audience } from '../data/siteData.js';

export default function Audience() {
  return (
    <section className="section section-muted">
      <div className="container audience-layout">
        <div className="section-heading">
          <p className="eyebrow">Für wen?</p>
          <h2>Für wen passt ein Lifting?</h2>
          <p>
            Wenn Wimpern oder Augenbrauen sichtbarer wirken sollen, ohne
            künstlichen Look.
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
