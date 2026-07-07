import { useId, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const sliderId = useId();

  function updatePosition(event) {
    setPosition(Number(event.target.value));
  }

  return (
    <div className="before-after-showcase">
      <div className="before-after-copy">
        <p className="eyebrow">Vorher / Nachher</p>
        <h3>Sieh dir den Effekt direkt im Vergleich an.</h3>
        <p>
          Ziehe den Regler nach links oder rechts und vergleiche das natürliche
          Ergebnis nach dem Lifting.
        </p>
      </div>

      <figure
        className="before-after-slider"
        style={{ '--slider-position': `${position}%` }}
      >
        <img
          className="before-after-image"
          src="/images/model-2.jpg"
          alt="Allgemeines LiftLounge Ergebnis mit gepflegten Wimpern und Augenbrauen"
          width="1800"
          height="1350"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="before-after-image-overlay">
          <img
            className="before-after-before-image"
            src="/images/vorher1.jpeg"
            alt="Vorher-Aufnahme vor dem Lash und Brow Lifting"
            width="3024"
            height="4032"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <span className="before-after-badge before-after-badge-left">Vorher</span>
        <span className="before-after-badge before-after-badge-right">Nachher</span>

        <span className="before-after-divider" aria-hidden="true">
          <span>
            <MoveHorizontal size={20} />
          </span>
        </span>

        <label className="sr-only" htmlFor={sliderId}>
          Vorher-Nachher Vergleich verschieben
        </label>
        <input
          id={sliderId}
          className="before-after-range"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={updatePosition}
        />
      </figure>
    </div>
  );
}
