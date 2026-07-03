import { ArrowRight, MapPin, SearchCheck, ShieldCheck, Sparkles } from 'lucide-react';

const seoTopics = [
  {
    title: 'Nähe Hannover',
    text: 'LiftLounge liegt in Barsinghausen und ist gut erreichbar aus Hannover, Wunstorf, Gehrden, Wennigsen, Seelze und der Region.',
    icon: MapPin,
  },
  {
    title: 'Natürlicher Ausdruck',
    text: 'Der Fokus liegt auf gepflegten Naturwimpern und Naturbrauen statt auf einem künstlichen, schweren Look.',
    icon: Sparkles,
  },
  {
    title: 'Ruhige Behandlung',
    text: 'Vorbereitung, Form und Finish werden sauber abgestimmt, damit das Ergebnis zu Gesicht, Alltag und Wunsch passt.',
    icon: ShieldCheck,
  },
  {
    title: 'Klare Orientierung',
    text: 'Pflege, Haltbarkeit und wichtige Hinweise werden verständlich erklärt, damit du dich vor und nach dem Termin sicher fühlst.',
    icon: SearchCheck,
  },
];

export default function Services() {
  return (
    <section className="section services-section seo-service-section" id="leistungen">
      <div className="container">
        <div className="seo-service-layout">
          <div className="section-heading narrow">
            <p className="eyebrow">Lash & Brow Lifting Hannover</p>
            <h2>Natürlich gepflegter Blick in Barsinghausen bei Hannover</h2>
          </div>

          <div className="seo-service-copy">
            <p>
              Wenn du nach Lash Lifting in Hannover oder Brow Lifting in der
              Region suchst, geht es meistens nicht um einen extremen Effekt,
              sondern um einen wachen, gepflegten Ausdruck im Alltag.
            </p>
            <p>
              Bei LiftLounge stehen natürliche Ergebnisse, saubere Vorbereitung
              und eine ruhige Atmosphäre im Vordergrund. Preise und konkrete
              Optionen findest du kompakt im nächsten Abschnitt.
            </p>
            <div className="seo-service-actions">
              <a className="inline-link" href="#preise">
                Preise & Optionen ansehen
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="inline-link muted-link" href="/aufklaerung">
                Pflegehinweise lesen
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="seo-topic-grid">
          {seoTopics.map((topic) => {
            const Icon = topic.icon;

            return (
              <article className="seo-topic" key={topic.title}>
                <Icon aria-hidden="true" size={22} />
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
