import SEO from './SEO.jsx';
import { site } from '../data/siteData.js';

const pageContent = {
  '/impressum': {
    title: 'Impressum | LiftLounge',
    headline: 'Impressum',
    description: 'Impressum von LiftLounge by Lea Kirfel.',
    sections: [
      {
        heading: 'Angaben gemäß § 5 DDG',
        paragraphs: [
          `${site.name}`,
          `${site.owner}`,
          `${site.legalAddress.street}`,
          `${site.legalAddress.postalCity}`,
          'Deutschland',
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
        paragraphs: [`Telefon: ${site.phone}`, `E-Mail: ${site.email}`],
      },
      {
        heading: 'Verantwortlich für Inhalte',
        paragraphs: [
          `Verantwortlich für die Inhalte dieser Website nach § 18 Abs. 2 MStV: ${site.owner}, ${site.legalAddress.street}, ${site.legalAddress.postalCity}.`,
        ],
      },
      {
        heading: 'Verbraucherstreitbeilegung',
        paragraphs: [
          'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        ],
      },
      {
        heading: 'Haftung für Inhalte',
        paragraphs: [
          'Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.',
          'Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.',
        ],
      },
    ],
  },
  '/datenschutz': {
    title: 'Datenschutz | LiftLounge',
    headline: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung von LiftLounge by Lea Kirfel.',
    sections: [
      {
        heading: '1. Verantwortliche Stelle',
        paragraphs: [
          `Verantwortlich für die Datenverarbeitung auf dieser Website ist ${site.owner}, ${site.legalAddress.street}, ${site.legalAddress.postalCity}, Deutschland.`,
          `Telefon: ${site.phone}`,
          `E-Mail: ${site.email}`,
        ],
      },
      {
        heading: '2. Allgemeine Verarbeitung beim Besuch der Website',
        paragraphs: [
          'Beim Aufruf dieser Website werden technisch erforderliche Zugriffsdaten verarbeitet, damit die Website ausgeliefert, stabil betrieben und gegen Missbrauch geschützt werden kann. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Referrer-URL, Browsertyp, Betriebssystem und technische Verbindungsdaten gehören.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, fehlerfreien und effizienten Bereitstellung dieser Website.',
        ],
      },
      {
        heading: '3. Hosting und Bereitstellung über Vercel',
        paragraphs: [
          'Diese Website wird über Vercel bereitgestellt. Anbieter ist Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Vercel verarbeitet technische Zugriffsdaten, Server-Logs und Auslieferungsdaten, die für den Betrieb der Website erforderlich sind.',
          'Soweit Daten in die USA übertragen werden, erfolgt dies auf Grundlage geeigneter Garantien im Sinne der DSGVO, insbesondere vertraglicher Regelungen und der von den Anbietern bereitgestellten Datenschutzmechanismen.',
        ],
      },
      {
        heading: '4. Kontaktformular und E-Mail-Anfragen',
        paragraphs: [
          'Wenn du über das Kontaktformular oder per E-Mail Kontakt aufnimmst, verarbeiten wir die von dir angegebenen Daten. Dazu gehören Name, Telefonnummer, E-Mail-Adresse, gewünschte Behandlung oder Schulung sowie deine Nachricht.',
          'Die Verarbeitung erfolgt zur Bearbeitung deiner Anfrage, zur Terminabstimmung und zur Kommunikation mit dir. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen gerichtet ist. Im Übrigen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.',
          'Für den Versand der Formular-E-Mails nutzen wir Resend. Anbieter ist Plus Five Five, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA. Dabei können E-Mail-Adresse, Metadaten und Nachrichteninhalte an Resend übermittelt werden.',
        ],
      },
      {
        heading: '5. Cookies, Local Storage und Einwilligungen',
        paragraphs: [
          'Diese Website speichert deine Cookie- und Datenschutz-Auswahl lokal in deinem Browser. Dies ist erforderlich, um deine Auswahl zu merken und nicht bei jedem Besuch erneut abzufragen.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Soweit du optionale Analysefunktionen aktivierst, ist Rechtsgrundlage deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.',
        ],
      },
      {
        heading: '6. Vercel Web Analytics',
        paragraphs: [
          'Nach deiner Einwilligung kann Vercel Web Analytics eingesetzt werden, um Seitenaufrufe und die Nutzung der Website statistisch auszuwerten. Vercel Web Analytics arbeitet ohne Drittanbieter-Cookies und verarbeitet Daten aggregiert für statistische Auswertungen.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Du kannst deine Einwilligung jederzeit über die Cookie-Einstellungen auf der Website ändern.',
        ],
      },
      {
        heading: '7. Speicherdauer',
        paragraphs: [
          'Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.',
          'Kontaktanfragen werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.',
        ],
      },
      {
        heading: '8. Deine Rechte',
        paragraphs: [
          'Du hast im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen.',
          'Soweit eine Verarbeitung auf deiner Einwilligung beruht, kannst du diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.',
          'Du hast außerdem das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren.',
        ],
      },
      {
        heading: '9. Keine automatisierte Entscheidungsfindung',
        paragraphs: [
          'Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.',
        ],
      },
    ],
  },
  '/agb': {
    title: 'AGB | LiftLounge',
    headline: 'Allgemeine Geschäftsbedingungen',
    description: 'Allgemeine Geschäftsbedingungen von LiftLounge by Lea Kirfel.',
    sections: [
      {
        heading: 'Geltungsbereich',
        paragraphs: [
          'Diese Allgemeinen Geschäftsbedingungen gelten für Termin- und Schulungsanfragen sowie Leistungen von LiftLounge by Lea Kirfel.',
          'Abweichende Bedingungen der Kundin oder des Kunden gelten nur, wenn sie ausdrücklich schriftlich bestätigt wurden.',
        ],
      },
      {
        heading: 'Termin- und Schulungsanfragen',
        paragraphs: [
          'Eine Anfrage über die Website ist unverbindlich. Ein verbindlicher Behandlungstermin, Schulungstermin oder Vertrag entsteht erst nach persönlicher Bestätigung durch LiftLounge.',
          'Die Abstimmung eines Termins kann telefonisch, per E-Mail oder über das Kontaktformular erfolgen.',
        ],
      },
      {
        heading: 'Preise und Leistungen',
        paragraphs: [
          'Es gelten die auf der Website genannten Preise und Leistungsumfänge zum Zeitpunkt der Anfrage, sofern nichts anderes ausdrücklich vereinbart wurde.',
          'Behandlungen und Schulungen werden nach persönlicher Abstimmung erbracht. Änderungen des Leistungsumfangs können sich aus individuellen Voraussetzungen, Beratung oder Terminabsprachen ergeben.',
        ],
      },
      {
        heading: 'Zahlung',
        paragraphs: [
          'Die Zahlung erfolgt, sofern nicht anders vereinbart, spätestens zum Termin vor Ort oder nach individueller Absprache.',
          'Bei Schulungen können abweichende Zahlungsmodalitäten individuell vereinbart werden.',
        ],
      },
      {
        heading: 'Stornierung und Ausfall',
        paragraphs: [
          'Wenn du einen Termin nicht wahrnehmen kannst, bitten wir um möglichst frühzeitige Absage oder Verschiebung.',
          'Bei verspätetem Erscheinen kann sich die Behandlungs- oder Schulungszeit entsprechend verkürzen, wenn nachfolgende Termine betroffen sind.',
        ],
      },
      {
        heading: 'Gesundheitliche Hinweise und Mitwirkung',
        paragraphs: [
          'Bitte informiere LiftLounge vor der Behandlung über Allergien, Unverträglichkeiten, Augenreizungen, Entzündungen, aktuelle Beschwerden oder sonstige Umstände, die für die Behandlung relevant sein können.',
          'LiftLounge kann eine Behandlung ablehnen oder verschieben, wenn gesundheitliche Gründe, Sicherheitsaspekte oder fachliche Einschätzungen dagegen sprechen.',
        ],
      },
      {
        heading: 'Schulungen',
        paragraphs: [
          'Schulungen finden als individuell abgestimmte 1:1 Einzelschulungen statt. Inhalte, Termine und organisatorische Details werden persönlich abgestimmt.',
          'Schulungsunterlagen und vermittelte Inhalte dürfen ohne vorherige Zustimmung nicht vervielfältigt, veröffentlicht oder an Dritte weitergegeben werden.',
        ],
      },
      {
        heading: 'Haftung',
        paragraphs: [
          'LiftLounge haftet nach den gesetzlichen Vorschriften bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit.',
          'Im Übrigen gelten die gesetzlichen Haftungsregelungen.',
        ],
      },
      {
        heading: 'Schlussbestimmungen',
        paragraphs: [
          'Es gilt deutsches Recht. Gesetzliche Verbraucherrechte bleiben unberührt.',
          'Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.',
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
