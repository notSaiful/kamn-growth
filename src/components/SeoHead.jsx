import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoMetadata } from '../data/seoMetadata';

/**
 * Client-Side SEO Synchronizer
 * Keeps document.title, canonical link, meta description, and JSON-LD structured data
 * synchronized during single-page client transitions.
 */
export default function SeoHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const seo = getSeoMetadata(pathname);

    // 1. Title
    if (seo.title && document.title !== seo.title) {
      document.title = seo.title;
    }

    // Helper to set or create meta tag
    const setMeta = (attr, val, content) => {
      let el = document.querySelector(`meta[${attr}="${val}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Meta description
    if (seo.description) {
      setMeta('name', 'description', seo.description);
      setMeta('property', 'og:description', seo.description);
      setMeta('name', 'twitter:description', seo.description);
    }

    // 3. Open Graph & Twitter titles
    if (seo.title) {
      setMeta('property', 'og:title', seo.title);
      setMeta('name', 'twitter:title', seo.title);
    }

    // 4. Canonical Link
    if (seo.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', seo.canonical);
      setMeta('property', 'og:url', seo.canonical);
    }

    // 5. Structured Data JSON-LD
    if (seo.schema) {
      let scriptTag = document.getElementById('route-schema-jsonld');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'route-schema-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(seo.schema);
    }
  }, [pathname]);

  return null;
}
