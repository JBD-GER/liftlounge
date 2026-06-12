import SEO from './SEO.jsx';
import { site } from '../data/siteData.js';

const pageContent = {
  '/impressum': {
    title: 'Impressum | LiftLounge',
    headline: 'Impressum',
    description:
      'Platzhalter-Impressum für LiftLounge. Die Angaben müssen vor Veröffentlichung rechtlich geprüft werden.',
    sections: [
      {
        heading: 'Angaben gemäß § 5 TMG',
        paragraphs: [
          `${site.name}`,
          `${site.owner}`,
          `${site.legalAddress.street}`,
          `${site.legalAddress.postalCity}`,
        ],
      },
      {
        heading: 'Standort der Ausführung',
        paragraphs: [
          `${site.trainingAddress.street}`,
          `${site.trainingAddress.postalCity}`,
        ],
      },
      {
        heading: 'Kontakt',
        paragraphs: [`Telefon: ${site.phone}`],
      },
      {
        heading: 'Hinweis',
        paragraphs: [
          'Dies ist ein rechtlicher Platzhalter. Umsatzsteuerangaben, Aufsichtsbehörden, berufsrechtliche Angaben und weitere Pflichtinformationen müssen vor Veröffentlichung geprüft und ergänzt werden.',
        ],
      },
    ],
  },
  '/datenschutz': {
    title: 'Datenschutz | LiftLounge',
    headline: 'Datenschutzerklärung',
    description:
      'Platzhalter-Datenschutzerklärung für LiftLounge mit Hinweis auf spätere rechtliche Prüfung.',
    sections: [
      {
        heading: 'Allgemeiner Hinweis',
        paragraphs: [
          'Diese Datenschutzerklärung ist ein Platzhalter und muss vor Veröffentlichung rechtlich geprüft werden.',
          'Die Website verarbeitet derzeit nur die Daten, die Nutzerinnen freiwillig über das Kontaktformular eingeben. Das Formular zeigt aktuell nur eine frontendseitige Erfolgsmeldung und sendet noch keine Daten an ein Backend.',
        ],
      },
      {
        heading: 'Kontaktanfragen',
        paragraphs: [
          'Wenn später eine Formularanbindung ergänzt wird, können Name, Telefonnummer, E-Mail-Adresse, gewünschtes Paket und Nachricht verarbeitet werden, um die Anfrage zu beantworten.',
        ],
      },
      {
        heading: 'Cookie-Einstellungen',
        paragraphs: [
          'Aktuell wird lediglich die Cookie-Auswahl lokal im Browser gespeichert. Analyse- oder Marketingdienste sind technisch vorbereitet, aber nicht aktiv eingebunden.',
        ],
      },
      {
        heading: 'Hosting',
        paragraphs: [
          'Beim Hosting, zum Beispiel über Vercel, können technische Zugriffsdaten verarbeitet werden. Die konkreten Informationen zum Anbieter und zu Aufbewahrungsfristen müssen ergänzt werden.',
        ],
      },
    ],
  },
  '/agb': {
    title: 'AGB | LiftLounge',
    headline: 'Allgemeine Geschäftsbedingungen',
    description:
      'Platzhalter-AGB für LiftLounge. Inhalte müssen vor Veröffentlichung rechtlich geprüft werden.',
    sections: [
      {
        heading: 'Geltungsbereich',
        paragraphs: [
          'Diese AGB sind ein Platzhalter. Sie müssen an die tatsächlichen Behandlungen, optionalen Schulungsangebote, Zahlungsbedingungen, Stornoregeln und rechtlichen Anforderungen angepasst werden.',
        ],
      },
      {
        heading: 'Termin- und Schulungsanfragen',
        paragraphs: [
          'Eine Anfrage über die Website ist unverbindlich. Ein verbindlicher Behandlungstermin, Schulungstermin oder Vertrag entsteht erst nach persönlicher Bestätigung durch LiftLounge.',
        ],
      },
      {
        heading: 'Preise und Leistungen',
        paragraphs: [
          'Die finalen Preise und Leistungsumfänge für Behandlungen und optionale Schulungen müssen vor Veröffentlichung rechtlich geprüft werden.',
        ],
      },
      {
        heading: 'Stornierung und Ausfall',
        paragraphs: [
          'Regelungen zu Stornierung, Ersatzterminen, Ausfall und Zahlungen sind vor Veröffentlichung rechtlich sauber zu definieren.',
        ],
      },
    ],
  },
};

export default function LegalPage({ path }) {
  const page = pageContent[path] || pageContent['/impressum'];

  return (
    <>
      <SEO
        title={page.title}
        description={page.description}
        path={path}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: page.headline,
          description: page.description,
        }}
      />
      <main className="legal-main">
        <section className="section">
          <div className="container legal-layout">
            <a className="back-link" href="/">
              Zurück zur Startseite
            </a>
            <p className="eyebrow">Rechtliches</p>
            <h1>{page.headline}</h1>
            <div className="legal-warning">
              Platzhalter: Diese Inhalte müssen vor Veröffentlichung durch eine
              rechtlich qualifizierte Person geprüft und ergänzt werden.
            </div>
            {page.sections.map((section) => (
              <section className="legal-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
