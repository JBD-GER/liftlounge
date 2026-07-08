import { ArrowRight } from 'lucide-react';
import { guidePosts } from '../data/guideData.js';

export default function GuideTeaser() {
  const featuredPosts = guidePosts.slice(0, 3);

  return (
    <section className="section section-muted" id="ratgeber">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Ratgeber</p>
          <h2>Lash & Brow Lifting Wissen</h2>
          <p>
            Ausgewählte Beiträge rund um Lash Lifting, Brow Lifting, Schulungen,
            Selbstständigkeit, Pflege und natürliche Ergebnisse.
          </p>
        </div>
        <div className="guide-teaser-grid">
          {featuredPosts.map((post) => (
            <a className="guide-teaser-card" href={`/ratgeber/${post.slug}`} key={post.slug}>
              <img
                src={post.image}
                alt={post.imageAlt}
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
              <span>{post.eyebrow}</span>
              <strong>{post.title}</strong>
            </a>
          ))}
        </div>
        <a className="button button-secondary guide-teaser-button" href="/ratgeber">
          Alle Ratgeber lesen
          <ArrowRight aria-hidden="true" size={18} />
        </a>
      </div>
    </section>
  );
}
