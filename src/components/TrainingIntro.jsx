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
            LiftLounge steht für gepflegte Ergebnisse, die frisch wirken, ohne
            überzeichnet auszusehen.
          </p>
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
