import { Sparkles } from 'lucide-react';

export default function TrainingIntro() {
  return (
    <section className="section">
      <div className="container intro-editorial">
        <div>
          <p className="eyebrow">Über LiftLounge</p>
          <h2>Wimpern und Augenbrauen, natürlich geliftet.</h2>
        </div>
        <div className="text-stack">
          <p>
            Bei LiftLounge geht es um Behandlungen, die den eigenen Look
            unterstreichen, statt ihn zu verändern. Wimpern und Augenbrauen
            werden typgerecht vorbereitet, geliftet, gepflegt und so geformt,
            dass das Ergebnis frisch, ruhig und natürlich wirkt.
          </p>
          <p>
            Der Fokus liegt auf Lash Lifting, Brow Lifting und persönlichen
            Schulungen in kleiner, konzentrierter Atmosphäre. Jede Anfrage wird
            individuell abgestimmt, damit Behandlung, Ablauf und Ergebnis zu dir
            passen.
          </p>
          <ul className="intro-points" aria-label="Schwerpunkte von LiftLounge">
            <li>Natürlicher Ausdruck ohne künstlichen Look</li>
            <li>Wimpern und Augenbrauen als klarer Schwerpunkt</li>
            <li>Persönliche Termine und Schulungen nach Anfrage</li>
          </ul>
        </div>
        <div className="intro-note">
          <Sparkles aria-hidden="true" size={19} />
          <span>
            Für Lash Lifting, Brow Lifting und Schulungsanfragen in
            Barsinghausen bei Hannover.
          </span>
        </div>
      </div>
    </section>
  );
}
