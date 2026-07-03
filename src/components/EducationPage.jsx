import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Droplets,
  Eye,
  ShieldCheck,
} from 'lucide-react';
import SEO from './SEO.jsx';

const quickFacts = [
  {
    title: 'Eigene Naturhaare',
    text: 'Beim Lash oder Brow Lifting werden deine eigenen Wimpern oder Augenbrauen geformt. Es werden keine Extensions aufgeklebt.',
    icon: Eye,
  },
  {
    title: 'Haltbarkeit',
    text: 'Das Ergebnis wächst mit deinem natürlichen Haarwechsel sanft heraus. Je nach Pflege und Wachstum hält es meist mehrere Wochen.',
    icon: Clock3,
  },
  {
    title: 'Pflege entscheidet mit',
    text: 'Die ersten 24 Stunden sind besonders wichtig. Danach helfen milde Reinigung und wenig Reibung, damit das Ergebnis schön bleibt.',
    icon: Droplets,
  },
];

const beforeCare = [
  'Bitte komme möglichst ungeschminkt und ohne ölhaltige Produkte an Augen und Brauen.',
  'Kontaktlinsen sollten vor einem Lash Lifting herausgenommen werden.',
  'Informiere Lea vorab über Allergien, Unverträglichkeiten, Augenreizungen oder frische Behandlungen im Augenbereich.',
  'Bei akuten Entzündungen, stark gereizter Haut oder medizinischen Beschwerden wird der Termin lieber verschoben.',
];

const afterCare = [
  'In den ersten 24 Stunden kein Wasser, Wasserdampf, Sauna, Schwimmen, Mascara oder Make-up-Entferner im behandelten Bereich.',
  'Nicht an Wimpern oder Brauen reiben, zupfen oder stark bürsten.',
  'Danach sanft reinigen und ölhaltige Produkte direkt am Lifting möglichst sparsam verwenden.',
  'Bei ungewöhnlichem Brennen, Schwellung oder anhaltender Rötung bitte direkt melden und bei Bedarf ärztlich abklären lassen.',
];

export default function EducationPage() {
  return (
    <>
      <SEO
        title="Aufklärung & Pflege | LiftLounge"
        description="Allgemeine Aufklärung zu Lash Lifting, Brow Lifting, Vorbereitung und Pflege nach der Behandlung bei LiftLounge."
        path="/aufklaerung"
        image="/images/kundin.jpeg"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Aufklärung und Pflegehinweise',
          description:
            'Allgemeine Hinweise zu Lash Lifting, Brow Lifting, Vorbereitung und Pflege nach der Behandlung.',
        }}
      />
      <main className="education-main">
        <section className="education-hero section">
          <div className="container education-hero-grid">
            <div className="education-hero-copy">
              <a className="back-link" href="/">
                Zurück zur Startseite
              </a>
              <p className="eyebrow">Aufklärung & Pflege</p>
              <h1>Damit dein Lifting sauber starten und schön halten kann.</h1>
              <p>
                Hier findest du die wichtigsten Hinweise zu Lash Lifting, Brow
                Lifting, Vorbereitung und Pflege danach. Kurz, verständlich und
                ohne unnötigen Fachjargon.
              </p>
              <div className="education-actions">
                <a className="button button-primary" href="/haftungshinweis">
                  Haftungshinweis ausfüllen
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a className="button button-secondary" href="/#kontakt">
                  Termin anfragen
                </a>
              </div>
            </div>
            <figure className="education-hero-image">
              <img
                src="/images/kundin.jpeg"
                alt="Echtes LiftLounge Ergebnis nach Lash und Brow Lifting"
                width="4279"
                height="4735"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section education-facts">
          <div className="container">
            <div className="section-heading narrow">
              <p className="eyebrow">Kurz erklärt</p>
              <h2>Was bei der Behandlung wichtig ist</h2>
            </div>
            <div className="education-fact-grid">
              {quickFacts.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="education-fact" key={item.title}>
                    <Icon aria-hidden="true" size={24} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-muted education-care">
          <div className="container education-care-grid">
            <article>
              <p className="eyebrow">Vor dem Termin</p>
              <h2>So bereitest du dich vor</h2>
              <ul className="care-list">
                {beforeCare.map((item) => (
                  <li key={item}>
                    <CheckCircle2 aria-hidden="true" size={19} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <p className="eyebrow">Nach der Behandlung</p>
              <h2>Darauf solltest du achten</h2>
              <ul className="care-list">
                {afterCare.map((item) => (
                  <li key={item}>
                    <CheckCircle2 aria-hidden="true" size={19} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section education-note-section">
          <div className="container education-note">
            <div className="education-note-icon" aria-hidden="true">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="eyebrow">Wichtig</p>
              <h2>Bei Reizungen lieber kurz prüfen</h2>
              <p>
                Lash und Brow Lifting sind kosmetische Behandlungen und ersetzen
                keine medizinische Beratung. Wenn deine Augen oder deine Haut
                akut gereizt, entzündet oder ungewöhnlich empfindlich sind,
                sag bitte vor dem Termin Bescheid. So kann Lea einschätzen, ob
                die Behandlung sinnvoll ist oder besser verschoben wird.
              </p>
            </div>
            <a className="button button-secondary" href="/haftungshinweis">
              Hinweis bestätigen
              <ShieldCheck aria-hidden="true" size={18} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
