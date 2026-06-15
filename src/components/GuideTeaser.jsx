import { ArrowRight } from 'lucide-react';
import { guidePosts } from '../data/guideData.js';

export default function GuideTeaser() {
  return (
    <section className="section section-muted" id="ratgeber">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Ratgeber</p>
          <h2>Lash Lifting Wissen für Hannover</h2>
          <p>
            Drei kompakte SEO-Beiträge rund um Lash Lifting, Pflege,
            Haltbarkeit und die Entscheidung für einen natürlichen Lash-Look.
          </p>
        </div>
        <div className="guide-teaser-grid">
          {guidePosts.map((post) => (
            <a className="guide-teaser-card" href={`/ratgeber/${post.slug}`} key={post.slug}>
              <img src={post.image} alt={post.imageAlt} width="1200" height="800" loading="eager" />
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
