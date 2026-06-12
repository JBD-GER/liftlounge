import { processSteps } from '../data/siteData.js';

export default function Process() {
  return (
    <section className="section" id="ablauf">
      <div className="container">
        <div className="section-heading narrow">
          <p className="eyebrow">Ablauf</p>
          <h2>Von der Anfrage bis zum Zertifikat</h2>
          <p>
            Der Lashlifting Kurs in der Region Hannover ist klar strukturiert,
            damit du jederzeit weißt, was als Nächstes passiert.
          </p>
        </div>
        <div className="process-list">
          {processSteps.map(({ title, text, icon: Icon }, index) => (
            <article className="step-card" key={title}>
              <div className="step-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="step-icon">
                <Icon aria-hidden="true" size={23} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
