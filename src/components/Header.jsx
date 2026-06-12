import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { navigation, site } from '../data/siteData.js';

export default function Header({ isHome }) {
  const [isOpen, setIsOpen] = useState(false);

  const getHref = (href) => (isHome ? href : `/${href}`);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="LiftLounge Startseite">
        <span className="brand-mark">LL</span>
        <span>
          <strong>LiftLounge</strong>
          <small>by Lea Kirfel</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {navigation.map((item) => (
          <a key={item.href} href={getHref(item.href)}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="phone-link" href={site.phoneHref}>
          <Phone aria-hidden="true" size={17} />
          <span>{site.phone}</span>
        </a>
        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={isOpen ? 'Navigation schließen' : 'Navigation öffnen'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={getHref(item.href)}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="mobile-nav-cta" href={isHome ? '#kontakt' : '/#kontakt'}>
            Termin anfragen
          </a>
        </nav>
      )}
    </header>
  );
}
