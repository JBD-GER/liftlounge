import { Sparkles } from 'lucide-react';

export default function TrainingIntro() {
  return (
    <section className="section" id="leistungen">
      <div className="container split-layout">
        <div>
          <p className="eyebrow">Über LiftLounge</p>
          <h2>Schöne Wimpern und Brauen, ohne künstlich zu wirken</h2>
        </div>
        <div className="text-stack">
          <p>
            Bei LiftLounge stehen Lash Lifting und Brow Lifting im Mittelpunkt:
            Behandlungen, die deine natürlichen Wimpern und Augenbrauen
            sichtbar betonen, ohne Extensions oder einen überzeichneten Look.
            Das Ergebnis soll frisch, gepflegt und typgerecht wirken.
          </p>
          <p>
            Jede Behandlung wird ruhig vorbereitet: kurze Beratung, Reinigung,
            präzises Formen, Färben und eine pflegende Keratin-Komponente. So
            entsteht ein Augenaufschlag, der im Alltag funktioniert und trotzdem
            hochwertig aussieht.
          </p>
          <div className="soft-callout">
            <Sparkles aria-hidden="true" size={20} />
            <span>
              Ideal für alle, die Lash Lifting, Brow Lifting oder eine
              kombinierte Beauty-Behandlung in Barsinghausen bei Hannover
              suchen.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
