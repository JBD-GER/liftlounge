import { useEffect, useState } from 'react';
import { Check, Cookie, Settings, X } from 'lucide-react';

export const cookieConsentStorageKey = 'liftlounge-cookie-consent';
export const cookieConsentUpdatedEvent = 'liftlounge-cookie-consent-updated';

const defaultConsent = {
  necessary: true,
  analytics: false,
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [consent, setConsent] = useState(defaultConsent);

  useEffect(() => {
    let stored;

    try {
      stored = window.localStorage.getItem(cookieConsentStorageKey);
    } catch {
      setVisible(true);
      return;
    }

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
    try {
      window.localStorage.setItem(cookieConsentStorageKey, JSON.stringify(nextConsent));
    } catch {
      // The current choice still applies for this session through the event below.
    }

    window.dispatchEvent(
      new CustomEvent(cookieConsentUpdatedEvent, { detail: nextConsent }),
    );
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
        Diese Website speichert deine Cookie-Auswahl. Optionale Analyse wird
        nur nach deiner Einwilligung aktiviert.
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
              <small>Datensparsame Reichweitenmessung mit Vercel Web Analytics.</small>
            </span>
            <input
              type="checkbox"
              checked={consent.analytics}
              onChange={() => toggle('analytics')}
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
          onClick={() => save({ necessary: true, analytics: true })}
        >
          <Check aria-hidden="true" size={17} />
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}
