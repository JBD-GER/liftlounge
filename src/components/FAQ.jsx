import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/siteData.js';

export default function FAQ() {
  return (
    <section className="section section-muted" id="faq">
      <div className="container">
        <div className="section-heading narrow">
          <p className="eyebrow">FAQ</p>
          <h2>Häufige Fragen zu Lash Lifting & Braulifting</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" size={20} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
