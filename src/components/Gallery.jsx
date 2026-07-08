import BeforeAfterSlider from './BeforeAfterSlider.jsx';
import { gallery } from '../data/siteData.js';

export default function Gallery() {
  return (
    <section className="section gallery-section" id="beispiele">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Beispiele</p>
          <h2>Vorher/Nachher und Einblicke</h2>
        </div>
        <BeforeAfterSlider />
        <div className="gallery-grid">
          {gallery.map((image) => {
            const isMobileFeature = image.src === '/images/kundin-hochkant.jpeg';

            return (
              <figure
                className={`image-card${isMobileFeature ? ' image-card-mobile-feature' : ''}`}
                key={image.src}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width="1400"
                  height="933"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
