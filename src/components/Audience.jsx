import { CheckCircle2 } from 'lucide-react';
import { audience } from '../data/siteData.js';

export default function Audience() {
  return (
    <section className="section section-muted">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Für wen?</p>
          <h2>Für Anfängerinnen, Gründerinnen und Beauty-Profis</h2>
          <p>
            Die Schulung richtet sich an Menschen, die Wimpernlifting lernen,
            ihr Angebot erweitern oder eine Beauty Schulung vor Ort mit
            persönlichem Feedback absolvieren möchten.
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
