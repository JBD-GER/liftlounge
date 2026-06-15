import { gallery } from '../data/siteData.js';

export default function Gallery() {
  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Einblicke</p>
          <h2>Einblicke in die LiftLounge</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((image) => (
            <figure className="image-card" key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                width="1400"
                height="933"
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
