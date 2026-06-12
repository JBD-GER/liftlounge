import { ArrowRight, Clock } from 'lucide-react';
import SEO from './SEO.jsx';
import { guidePosts } from '../data/guideData.js';

const guideSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'LiftLounge Ratgeber',
  description:
    'SEO-Ratgeber rund um Wimpernlifting, Lash Lifting und Pflege für Hannover und die Region.',
};

export default function GuideIndex() {
  return (
    <>
      <SEO
        title="Ratgeber | Wimpernlifting Hannover"
        description="LiftLounge Ratgeber mit SEO-Beiträgen zu Wimpernlifting, Haltbarkeit, Pflege und Lash Lifting in Hannover."
        path="/ratgeber"
        image="/images/ratgeber-wimpernlifting-hannover.svg"
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
              <h1>Wimpernlifting Ratgeber</h1>
              <p>
                Wissenswertes rund um Wimpernlifting, Lash Lifting Hannover,
                Pflege, Haltbarkeit und die Entscheidung zwischen natürlichem
                Lifting und künstlicher Verlängerung.
              </p>
            </div>
            <img
              src="/images/ratgeber-wimpernlifting-hannover.svg"
              alt="SVG-Grafik zum Wimpernlifting Ratgeber"
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
