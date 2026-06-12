import { Sparkles } from 'lucide-react';

export default function TrainingIntro() {
  return (
    <section className="section" id="schulung">
      <div className="container split-layout">
        <div>
          <p className="eyebrow">Über die Schulung</p>
          <h2>Wimpernlifting lernen mit persönlicher Anleitung</h2>
        </div>
        <div className="text-stack">
          <p>
            Die LiftLounge Schulung verbindet verständliche Theorie,
            professionelle Vorbereitung und praktische Anwendung am Modell.
            Statt einem anonymen Gruppenkurs erhältst du eine ruhige
            1:1 Wimpernschulung, in der deine Fragen, dein Tempo und deine
            Sicherheit im Mittelpunkt stehen.
          </p>
          <p>
            Du lernst, wie eine Lashlifting Behandlung sauber aufgebaut wird:
            von Beratung und Hygiene über Produktauswahl, Timing und
            Wimpernanalyse bis zum finalen Ergebnis. Ziel ist, dass du die
            Behandlung fachlich nachvollziehen kannst und mit einem klaren Plan
            weiterübst oder dein Beauty-Angebot erweiterst.
          </p>
          <div className="soft-callout">
            <Sparkles aria-hidden="true" size={20} />
            <span>
              Ideal für alle, die eine Lash Schulung mit Zertifikat in
              Barsinghausen, Hannover oder der Region Hannover suchen.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
