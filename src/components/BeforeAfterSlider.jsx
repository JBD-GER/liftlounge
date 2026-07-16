import { useId, useRef, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const sliderId = useId();
  const sliderRef = useRef(null);
  const isDraggingRef = useRef(false);

  function updatePosition(event) {
    setPosition(Number(event.target.value));
  }

  function updatePositionFromClientX(clientX) {
    const slider = sliderRef.current;

    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, nextPosition)));
  }

  function handlePointerDown(event) {
    if (event.pointerType === 'mouse' && event.button !== 0) return;

    event.preventDefault();
    isDraggingRef.current = true;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    updatePositionFromClientX(event.clientX);
  }

  function handlePointerMove(event) {
    if (!isDraggingRef.current) return;
    updatePositionFromClientX(event.clientX);
  }

  function stopDragging(event) {
    isDraggingRef.current = false;

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleTouch(event) {
    const touch = event.touches[0];

    if (!touch) return;

    event.preventDefault();
    updatePositionFromClientX(touch.clientX);
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
        ref={sliderRef}
        className="before-after-slider"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onTouchStart={handleTouch}
        onTouchMove={handleTouch}
        style={{ '--slider-position': `${position}%` }}
      >
        <img
          className="before-after-image before-after-result-image"
          src="/images/nachher1.jpeg"
          alt="Nachher-Aufnahme nach dem Lash und Brow Lifting"
          width="3840"
          height="5120"
          draggable="false"
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
            draggable="false"
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
