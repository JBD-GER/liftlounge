import { useEffect } from 'react';

const defaultOrigin = 'https://liftlounge.de';

function setMeta(attribute, key, value) {
  if (!value) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', value);
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function SEO({
  title,
  description,
  path = '/',
  image = '/images/model-1.jpg',
  schema = [],
}) {
  useEffect(() => {
    const origin = window.location.origin || defaultOrigin;
    const canonical = `${origin}${path}`;
    const imageUrl = image.startsWith('http') ? image : `${origin}${image}`;
    const schemas = Array.isArray(schema) ? schema : [schema];

    document.title = title;
    setCanonical(canonical);
    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'og:type', 'website');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);

    let script = document.head.querySelector('#liftlounge-jsonld');

    if (!script) {
      script = document.createElement('script');
      script.id = 'liftlounge-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schemas.filter(Boolean));
  }, [title, description, path, image, schema]);

  return null;
}
