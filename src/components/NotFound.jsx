import SEO from './SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Seite nicht gefunden | LiftLounge"
        description="Diese LiftLounge Seite wurde nicht gefunden."
        path="/404"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Seite nicht gefunden',
        }}
      />
      <main className="legal-main">
        <section className="section">
          <div className="container legal-layout">
            <a className="back-link" href="/">
              Zur Startseite
            </a>
            <p className="eyebrow">404</p>
            <h1>Seite nicht gefunden</h1>
            <p>
              Die gewünschte Seite gibt es nicht oder sie wurde verschoben.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
