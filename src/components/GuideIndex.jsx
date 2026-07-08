import { ArrowRight, Clock } from 'lucide-react';
import SEO from './SEO.jsx';
import { guidePosts } from '../data/guideData.js';

const guideSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'LiftLounge Ratgeber',
  description:
    'SEO-Ratgeber rund um Lash Lifting, Brow Lifting, Pflege, Haltbarkeit und natürliche Ergebnisse.',
};

export default function GuideIndex() {
  return (
    <>
      <SEO
        title="Ratgeber | Lash Lifting & Brow Lifting Wissen"
        description="LiftLounge Ratgeber mit SEO-Beiträgen zu Lash Lifting, Brow Lifting, Haltbarkeit, Pflege und natürlichen Ergebnissen."
        path="/ratgeber"
        image="/images/ratgeber-lash-lifting-hannover.jpg"
        schema={guideSchema}
      />
      <main className="guide-main">
        <section className="section guide-hero">
          <div className="container guide-hero-grid">
            <div>
              <a className="back-link" href="/">
                Zur Startseite
              </a>
              <p className="eyebrow">Ratgeber</p>
              <h1>Lash & Brow Lifting Ratgeber</h1>
              <p>
                Wissenswertes rund um Lash Lifting, Brow Lifting, Pflege,
                Haltbarkeit und natürliche Ergebnisse.
              </p>
            </div>
            <img
              src="/images/ratgeber-lash-lifting-hannover.jpg"
              alt="Natürliches Lash Lifting Ergebnis in einem hellen Beauty-Studio"
              width="1200"
              height="800"
              decoding="async"
            />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="guide-card-grid">
              {guidePosts.map((post) => (
                <article className="guide-card" key={post.slug}>
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    width="1200"
                    height="800"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="guide-card-body">
                    <p className="eyebrow">{post.eyebrow}</p>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <span className="read-time">
                      <Clock aria-hidden="true" size={16} />
                      {post.readingTime}
                    </span>
                    <a className="inline-link" href={`/ratgeber/${post.slug}`}>
                      Beitrag lesen
                      <ArrowRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
