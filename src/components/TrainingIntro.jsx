import { Sparkles } from 'lucide-react';

export default function TrainingIntro() {
  return (
    <section className="section">
      <div className="container intro-editorial">
        <div>
          <p className="eyebrow">Über LiftLounge</p>
          <h2>Schöne Wimpern, ohne künstlich zu wirken.</h2>
        </div>
        <div className="text-stack">
          <p>
            Bei LiftLounge steht Lash Lifting im Mittelpunkt: eine Behandlung,
            die deine natürlichen Wimpern sichtbar betont, ohne Extensions oder
            einen überzeichneten Look. Das Ergebnis soll frisch, gepflegt und
            typgerecht wirken.
          </p>
          <p>
            Jede Behandlung wird ruhig vorbereitet: kurze Beratung, Reinigung,
            präzises Positionieren, Färben und eine pflegende
            Keratin-Komponente. So entsteht ein Augenaufschlag, der im Alltag
            funktioniert und trotzdem hochwertig aussieht.
          </p>
        </div>
        <div className="intro-note">
          <Sparkles aria-hidden="true" size={19} />
          <span>
            Ideal für alle, die Lash Lifting Hannover suchen und einen ruhigen
            Beauty-Standort in Barsinghausen bevorzugen.
          </span>
        </div>
      </div>
    </section>
  );
}
