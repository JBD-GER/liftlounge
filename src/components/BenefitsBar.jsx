import { benefits } from '../data/siteData.js';

export default function BenefitsBar() {
  return (
    <section className="benefit-strip" aria-label="Vorteile der Schulung">
      <div className="container benefit-grid">
        {benefits.map(({ title, text, icon: Icon }) => (
          <article className="benefit-item" key={title}>
            <Icon aria-hidden="true" size={22} />
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
