import { useEffect, useState } from 'react';
import { Check, Cookie, Settings, X } from 'lucide-react';

const storageKey = 'liftlounge-cookie-consent';

const defaultConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [consent, setConsent] = useState(defaultConsent);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);

    if (stored) {
      try {
        setConsent({ ...defaultConsent, ...JSON.parse(stored) });
      } catch {
        setConsent(defaultConsent);
      }
      return;
    }

    setVisible(true);
  }, []);

  function save(nextConsent) {
    window.localStorage.setItem(storageKey, JSON.stringify(nextConsent));
    setConsent(nextConsent);
    setVisible(false);
    setSettingsOpen(false);
  }

  function toggle(key) {
    if (key === 'necessary') return;
    setConsent((current) => ({ ...current, [key]: !current[key] }));
  }

  if (!visible) {
    return (
      <button
        className="cookie-floating-button"
        type="button"
        onClick={() => setVisible(true)}
        aria-label="Cookie-Einstellungen öffnen"
      >
        <Cookie aria-hidden="true" size={18} />
      </button>
    );
  }

  return (
    <div className="cookie-panel" role="dialog" aria-modal="false" aria-labelledby="cookie-title">
      <div className="cookie-panel-header">
        <div>
          <p className="eyebrow">Privatsphäre</p>
          <h2 id="cookie-title">Cookie-Einstellungen</h2>
        </div>
        <button
          className="icon-button"
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Cookie-Hinweis schließen"
        >
          <X aria-hidden="true" />
        </button>
      </div>

      <p>
        Diese Website nutzt aktuell nur technisch notwendige Speicherung für
        deine Cookie-Auswahl. Optionale Kategorien sind vorbereitet, falls
        später Analyse- oder Marketing-Dienste ergänzt werden.
      </p>

      {settingsOpen && (
        <div className="cookie-settings">
          <label className="toggle-row">
            <span>
              <strong>Notwendig</strong>
              <small>Erforderlich für die Funktion der Website.</small>
            </span>
            <input type="checkbox" checked readOnly />
          </label>
          <label className="toggle-row">
            <span>
              <strong>Analyse</strong>
              <small>Vorbereitet für spätere Reichweitenmessung.</small>
            </span>
            <input
              type="checkbox"
              checked={consent.analytics}
              onChange={() => toggle('analytics')}
            />
          </label>
          <label className="toggle-row">
            <span>
              <strong>Marketing</strong>
              <small>Vorbereitet für spätere Kampagnen- oder Pixel-Dienste.</small>
            </span>
            <input
              type="checkbox"
              checked={consent.marketing}
              onChange={() => toggle('marketing')}
            />
          </label>
        </div>
      )}

      <div className="cookie-actions">
        <button
          className="button button-secondary"
          type="button"
          onClick={() => setSettingsOpen((value) => !value)}
        >
          <Settings aria-hidden="true" size={17} />
          Einstellungen
        </button>
        <button className="button button-secondary" type="button" onClick={() => save(defaultConsent)}>
          Nur notwendige
        </button>
        <button
          className="button button-primary"
          type="button"
          onClick={() => save({ necessary: true, analytics: true, marketing: true })}
        >
          <Check aria-hidden="true" size={17} />
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}
