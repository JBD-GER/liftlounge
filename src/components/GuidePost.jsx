import { ArrowRight, Clock } from 'lucide-react';
import SEO from './SEO.jsx';
import { guidePosts } from '../data/guideData.js';
import { site } from '../data/siteData.js';

function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: site.owner,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
    },
    mainEntityOfPage: `/ratgeber/${post.slug}`,
  };
}

export default function GuidePost({ post }) {
  return (
    <>
      <SEO
        title={`${post.title} | LiftLounge`}
        description={post.description}
        path={`/ratgeber/${post.slug}`}
        image={post.image}
        schema={articleSchema(post)}
      />
      <main className="article-main">
        <article>
          <header className="section article-hero">
            <div className="container article-hero-grid">
              <div>
                <a className="back-link" href="/ratgeber">
                  Zurück zum Ratgeber
                </a>
                <p className="eyebrow">{post.eyebrow}</p>
                <h1>{post.title}</h1>
                <p>{post.intro}</p>
                <span className="read-time">
                  <Clock aria-hidden="true" size={16} />
                  {post.readingTime}
                </span>
              </div>
              <img
                src={post.image}
                alt={post.imageAlt}
                width="1200"
                height="800"
                decoding="async"
              />
            </div>
          </header>

          <div className="container article-content">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <aside className="article-cta">
              <p className="eyebrow">LiftLounge</p>
              <h2>Lash Lifting Hannover anfragen</h2>
              <p>
                Der Standort ist in Barsinghausen, gut erreichbar aus Hannover
                und der Region Hannover. Für Termine erreichst du LiftLounge
                direkt telefonisch oder über das Formular.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="/#kontakt">
                  Termin anfragen
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a className="button button-secondary" href={site.phoneHref}>
                  Jetzt anrufen
                </a>
              </div>
            </aside>

            <section>
              <h2>Weitere Beiträge zum Lash Lifting</h2>
              <div className="related-posts">
                {guidePosts
                  .filter((item) => item.slug !== post.slug)
                  .map((item) => (
                    <a className="related-post" href={`/ratgeber/${item.slug}`} key={item.slug}>
                      <span>{item.eyebrow}</span>
                      <strong>{item.title}</strong>
                    </a>
                  ))}
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
