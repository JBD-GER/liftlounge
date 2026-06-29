import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { site } from '../data/siteData.js';
import SEO from './SEO.jsx';

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Danke für deine Anfrage | LiftLounge"
        description="Deine Anfrage wurde erfolgreich an LiftLounge übermittelt."
        path="/danke"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Danke für deine Anfrage',
        }}
      />
      <main className="thank-you-main">
        <section className="section">
          <div className="container thank-you-layout">
            <div className="thank-you-icon" aria-hidden="true">
              <CheckCircle2 size={34} />
            </div>
            <p className="eyebrow">Anfrage gesendet</p>
            <h1>Danke, deine Anfrage wurde erfolgreich übermittelt.</h1>
            <p>
              Lea meldet sich zeitnah persönlich bei dir. Falls du noch etwas
              ergänzen möchtest, kannst du LiftLounge auch direkt per WhatsApp
              schreiben.
            </p>
            <div className="thank-you-actions">
              <a className="button button-primary" href="/">
                Zur Startseite
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a
                className="button button-secondary"
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
