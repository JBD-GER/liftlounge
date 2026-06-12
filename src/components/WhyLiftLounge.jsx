import { CheckCircle2 } from 'lucide-react';
import { whyLiftLounge } from '../data/siteData.js';

export default function WhyLiftLounge() {
  return (
    <section className="section">
      <div className="container split-layout why-layout">
        <div>
          <p className="eyebrow">Warum LiftLounge?</p>
          <h2>Natürlich gepflegt statt künstlich überladen.</h2>
        </div>
        <div className="why-panel">
          {whyLiftLounge.map((item) => (
            <div className="why-row" key={item}>
              <CheckCircle2 aria-hidden="true" size={21} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
