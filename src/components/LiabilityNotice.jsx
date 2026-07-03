import { useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  HeartPulse,
  ShieldCheck,
} from 'lucide-react';
import { site } from '../data/siteData.js';
import SEO from './SEO.jsx';

const steps = [
  {
    label: 'Kontakt',
    title: 'Deine Kontaktdaten',
    description: 'Damit die Bestätigung eindeutig zugeordnet werden kann.',
    icon: ClipboardCheck,
  },
  {
    label: 'Gesundheit',
    title: 'Wichtige Angaben vor der Behandlung',
    description: 'Alles, was für Lash oder Brow Lifting relevant sein kann.',
    icon: HeartPulse,
  },
  {
    label: 'Pflege',
    title: 'Pflegehinweise bestätigen',
    description: 'Besonders die ersten 24 Stunden entscheiden über das Ergebnis.',
    icon: ShieldCheck,
  },
  {
    label: 'Bestätigung',
    title: 'Datenschutz und digitale Bestätigung',
    description: 'Zum Schluss bestätigst du deine Angaben verbindlich.',
    icon: FileCheck2,
  },
];

const treatmentOptions = [
  'Lash Lifting',
  'Brow Lifting',
  'Lash & Brow Lifting',
  'Augenbrauenkorrektur mit Heißwachs',
  'Schulung / Modelltermin',
];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  treatment: '',
  appointmentDate: '',
  allergies: '',
  eyeHealth: '',
  contactLenses: '',
  medications: '',
  recentTreatments: '',
  aftercareNoWater: false,
  aftercareNoRubbing: false,
  aftercareContact: false,
  aftercareNotes: '',
  riskConsent: false,
  liabilityConsent: false,
  privacyConsent: false,
  signature: '',
};

const stepFieldKeys = [
  ['name', 'phone', 'email', 'treatment'],
  ['allergies', 'eyeHealth', 'contactLenses', 'medications', 'recentTreatments'],
  ['aftercareNoWater', 'aftercareNoRubbing', 'aftercareContact'],
  ['riskConsent', 'liabilityConsent', 'privacyConsent', 'signature'],
];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateStep(index, form) {
  const errors = {};

  if (index === 0) {
    if (!form.name.trim()) errors.name = 'Bitte gib deinen Namen ein.';
    if (!form.phone.trim()) errors.phone = 'Bitte gib deine Telefonnummer ein.';
    if (!form.email.trim()) {
      errors.email = 'Bitte gib deine E-Mail-Adresse ein.';
    } else if (!isValidEmail(form.email)) {
      errors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    }
    if (!form.treatment) errors.treatment = 'Bitte wähle eine Behandlung aus.';
  }

  if (index === 1) {
    if (!form.allergies.trim()) {
      errors.allergies = 'Bitte trage bekannte Allergien ein oder schreibe „keine“.';
    }
    if (!form.eyeHealth.trim()) {
      errors.eyeHealth = 'Bitte trage aktuelle Beschwerden ein oder schreibe „keine“.';
    }
    if (!form.contactLenses) {
      errors.contactLenses = 'Bitte wähle aus, ob Kontaktlinsen relevant sind.';
    }
    if (!form.medications.trim()) {
      errors.medications = 'Bitte trage relevante Medikamente/Umstände ein oder schreibe „keine“.';
    }
    if (!form.recentTreatments.trim()) {
      errors.recentTreatments =
        'Bitte trage frische Behandlungen im Augenbereich ein oder schreibe „keine“.';
    }
  }

  if (index === 2) {
    if (!form.aftercareNoWater) {
      errors.aftercareNoWater = 'Bitte bestätige den 24-Stunden-Hinweis.';
    }
    if (!form.aftercareNoRubbing) {
      errors.aftercareNoRubbing = 'Bitte bestätige den Reibungs-Hinweis.';
    }
    if (!form.aftercareContact) {
      errors.aftercareContact = 'Bitte bestätige den Kontakt-Hinweis.';
    }
  }

  if (index === 3) {
    if (!form.riskConsent) {
      errors.riskConsent = 'Bitte bestätige die Aufklärung.';
    }
    if (!form.liabilityConsent) {
      errors.liabilityConsent = 'Bitte bestätige die Richtigkeit deiner Angaben.';
    }
    if (!form.privacyConsent) {
      errors.privacyConsent = 'Bitte bestätige den Datenschutzhinweis.';
    }
    if (!form.signature.trim()) {
      errors.signature = 'Bitte bestätige mit deinem Vor- und Nachnamen.';
    }
  }

  return errors;
}

function validateAll(form) {
  return steps.reduce(
    (allErrors, _step, index) => ({ ...allErrors, ...validateStep(index, form) }),
    {},
  );
}

function getFirstErrorStep(errors) {
  const errorKeys = Object.keys(errors);

  return stepFieldKeys.findIndex((keys) => keys.some((key) => errorKeys.includes(key)));
}

export default function LiabilityNotice() {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });
  const currentStep = steps[activeStep];
  const progress = useMemo(
    () => `${Math.round(((activeStep + 1) / steps.length) * 100)}%`,
    [activeStep],
  );
  const isSending = submitState.status === 'sending';

  function clearFieldError(name) {
    setErrors((current) => ({ ...current, [name]: undefined }));

    if (submitState.status !== 'sending') {
      setSubmitState({ status: 'idle', message: '' });
    }
  }

  function updateField(event) {
    const { checked, name, type, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
    clearFieldError(name);
  }

  function goToStep(targetStep) {
    if (targetStep <= activeStep) {
      setActiveStep(targetStep);
      return;
    }

    const nextErrors = validateStep(activeStep, form);
    setErrors((current) => ({ ...current, ...nextErrors }));

    if (Object.keys(nextErrors).length === 0) {
      setActiveStep(targetStep);
    }
  }

  function goNext() {
    goToStep(Math.min(activeStep + 1, steps.length - 1));
  }

  function goBack() {
    setActiveStep((step) => Math.max(step - 1, 0));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateAll(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstErrorStep = getFirstErrorStep(nextErrors);
      setActiveStep(firstErrorStep === -1 ? 0 : firstErrorStep);
      return;
    }

    setSubmitState({
      status: 'sending',
      message: 'Dein Haftungshinweis wird gesendet...',
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'liability_notice',
          ...form,
        }),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.ok) {
        if (payload.errors) {
          setErrors(payload.errors);
          const firstErrorStep = getFirstErrorStep(payload.errors);
          setActiveStep(firstErrorStep === -1 ? activeStep : firstErrorStep);
        }

        throw new Error(
          payload.message || 'Der Haftungshinweis konnte gerade nicht gesendet werden.',
        );
      }

      window.location.assign(`/danke?type=haftungshinweis&lead=${Date.now().toString(36)}`);
    } catch (error) {
      setSubmitState({
        status: 'error',
        message:
          error.message ||
          'Der Haftungshinweis konnte gerade nicht gesendet werden. Bitte versuche es später erneut.',
      });
    }
  }

  const StepIcon = currentStep.icon;

  return (
    <>
      <SEO
        title="Haftungshinweis ausfüllen | LiftLounge"
        description="Digitaler Haftungshinweis und Datenschutzhinweis für Lash Lifting und Brow Lifting bei LiftLounge."
        path="/haftungshinweis"
        image="/images/kundin.jpeg"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Haftungshinweis',
          description:
            'Digitaler Haftungshinweis mit Gesundheitsangaben, Pflegebestätigung und Datenschutzhinweis.',
        }}
      />
      <main className="liability-main">
        <section className="section liability-hero">
          <div className="container liability-layout">
            <aside className="liability-intro">
              <a className="back-link" href="/">
                Zurück zur Startseite
              </a>
              <p className="eyebrow">Haftungshinweis</p>
              <h1>Bitte vor der Behandlung ausfüllen.</h1>
              <p>
                Deine Angaben helfen Lea, die Behandlung passend und
                verantwortungsvoll einzuschätzen. Nach dem Absenden erhältst du
                eine Bestätigung per E-Mail.
              </p>
              <div className="liability-contact-box">
                <ShieldCheck aria-hidden="true" size={22} />
                <span>
                  Bei Unsicherheiten bitte vor dem Termin kurz melden:
                  {' '}
                  <a href={site.phoneHref}>{site.phone}</a>
                </span>
              </div>
            </aside>

            <form className="liability-form" onSubmit={handleSubmit} noValidate>
              <div className="liability-stepper" aria-label="Formularfortschritt">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === index;
                  const isComplete = activeStep > index;

                  return (
                    <button
                      className={`stepper-button${isActive ? ' is-active' : ''}${
                        isComplete ? ' is-complete' : ''
                      }`}
                      key={step.label}
                      type="button"
                      onClick={() => goToStep(index)}
                    >
                      <span className="stepper-icon">
                        {isComplete ? (
                          <CheckCircle2 aria-hidden="true" size={17} />
                        ) : (
                          <Icon aria-hidden="true" size={17} />
                        )}
                      </span>
                      <span>{step.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="liability-progress" aria-hidden="true">
                <span style={{ width: progress }} />
              </div>

              {submitState.status === 'error' && (
                <div className="error-message" role="alert">
                  <AlertCircle aria-hidden="true" size={21} />
                  <span>{submitState.message}</span>
                </div>
              )}

              <div className="liability-step-heading">
                <div className="liability-step-icon" aria-hidden="true">
                  <StepIcon size={22} />
                </div>
                <div>
                  <p className="eyebrow">
                    Schritt {activeStep + 1} von {steps.length}
                  </p>
                  <h2>{currentStep.title}</h2>
                  <p>{currentStep.description}</p>
                </div>
              </div>

              {activeStep === 0 && (
                <div className="liability-fields">
                  <div className="form-grid">
                    <label>
                      <span>Name</span>
                      <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={updateField}
                        autoComplete="name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'liability-name-error' : undefined}
                        required
                      />
                      {errors.name && <small id="liability-name-error">{errors.name}</small>}
                    </label>

                    <label>
                      <span>Telefonnummer</span>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={updateField}
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'liability-phone-error' : undefined}
                        required
                      />
                      {errors.phone && <small id="liability-phone-error">{errors.phone}</small>}
                    </label>
                  </div>

                  <label>
                    <span>E-Mail</span>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateField}
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'liability-email-error' : undefined}
                      required
                    />
                    {errors.email && <small id="liability-email-error">{errors.email}</small>}
                  </label>

                  <div className="form-grid">
                    <label>
                      <span>Behandlung</span>
                      <select
                        name="treatment"
                        value={form.treatment}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.treatment)}
                        aria-describedby={
                          errors.treatment ? 'liability-treatment-error' : undefined
                        }
                        required
                      >
                        <option value="">Bitte auswählen</option>
                        {treatmentOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.treatment && (
                        <small id="liability-treatment-error">{errors.treatment}</small>
                      )}
                    </label>

                    <label>
                      <span>Termin am</span>
                      <input
                        name="appointmentDate"
                        type="date"
                        value={form.appointmentDate}
                        onChange={updateField}
                      />
                    </label>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="liability-fields">
                  <label>
                    <span>Bekannte Allergien oder Unverträglichkeiten</span>
                    <textarea
                      name="allergies"
                      rows="3"
                      value={form.allergies}
                      onChange={updateField}
                      placeholder="z. B. keine bekannt, Kleber, Farbe, Kosmetikprodukte"
                      aria-invalid={Boolean(errors.allergies)}
                      aria-describedby={
                        errors.allergies ? 'liability-allergies-error' : undefined
                      }
                      required
                    />
                    {errors.allergies && (
                      <small id="liability-allergies-error">{errors.allergies}</small>
                    )}
                  </label>

                  <label>
                    <span>Aktuelle Beschwerden an Augen, Haut oder Brauen</span>
                    <textarea
                      name="eyeHealth"
                      rows="3"
                      value={form.eyeHealth}
                      onChange={updateField}
                      placeholder="z. B. keine, Rötung, Brennen, Entzündung, sehr empfindliche Haut"
                      aria-invalid={Boolean(errors.eyeHealth)}
                      aria-describedby={
                        errors.eyeHealth ? 'liability-eye-health-error' : undefined
                      }
                      required
                    />
                    {errors.eyeHealth && (
                      <small id="liability-eye-health-error">{errors.eyeHealth}</small>
                    )}
                  </label>

                  <label>
                    <span>Kontaktlinsen / sensible Augen</span>
                    <select
                      name="contactLenses"
                      value={form.contactLenses}
                      onChange={updateField}
                      aria-invalid={Boolean(errors.contactLenses)}
                      aria-describedby={
                        errors.contactLenses ? 'liability-contact-lenses-error' : undefined
                      }
                      required
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="Keine Kontaktlinsen / nicht relevant">
                        Keine Kontaktlinsen / nicht relevant
                      </option>
                      <option value="Kontaktlinsen werden vor der Behandlung entfernt">
                        Kontaktlinsen werden vor der Behandlung entfernt
                      </option>
                      <option value="Sehr sensible Augen">
                        Sehr sensible Augen
                      </option>
                    </select>
                    {errors.contactLenses && (
                      <small id="liability-contact-lenses-error">{errors.contactLenses}</small>
                    )}
                  </label>

                  <label>
                    <span>Medikamente, Schwangerschaft oder weitere relevante Umstände</span>
                    <textarea
                      name="medications"
                      rows="3"
                      value={form.medications}
                      onChange={updateField}
                      placeholder="z. B. keine oder kurze Beschreibung"
                      aria-invalid={Boolean(errors.medications)}
                      aria-describedby={
                        errors.medications ? 'liability-medications-error' : undefined
                      }
                      required
                    />
                    {errors.medications && (
                      <small id="liability-medications-error">{errors.medications}</small>
                    )}
                  </label>

                  <label>
                    <span>Frische Behandlungen im Augenbereich</span>
                    <textarea
                      name="recentTreatments"
                      rows="3"
                      value={form.recentTreatments}
                      onChange={updateField}
                      placeholder="z. B. keine, Permanent Make-up, Augen-OP, Wimpernserum, Färbung"
                      aria-invalid={Boolean(errors.recentTreatments)}
                      aria-describedby={
                        errors.recentTreatments
                          ? 'liability-recent-treatments-error'
                          : undefined
                      }
                      required
                    />
                    {errors.recentTreatments && (
                      <small id="liability-recent-treatments-error">
                        {errors.recentTreatments}
                      </small>
                    )}
                  </label>
                </div>
              )}

              {activeStep === 2 && (
                <div className="liability-fields">
                  <div className="consent-stack">
                    <label className="checkbox-card">
                      <input
                        name="aftercareNoWater"
                        type="checkbox"
                        checked={form.aftercareNoWater}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.aftercareNoWater)}
                      />
                      <span>
                        Ich vermeide in den ersten 24 Stunden Wasser,
                        Wasserdampf, Sauna, Schwimmen, Mascara und Make-up-Entferner
                        im behandelten Bereich.
                      </span>
                    </label>
                    {errors.aftercareNoWater && <small>{errors.aftercareNoWater}</small>}

                    <label className="checkbox-card">
                      <input
                        name="aftercareNoRubbing"
                        type="checkbox"
                        checked={form.aftercareNoRubbing}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.aftercareNoRubbing)}
                      />
                      <span>
                        Ich reibe, zupfe oder bürste Wimpern und Brauen direkt
                        nach der Behandlung nicht stark.
                      </span>
                    </label>
                    {errors.aftercareNoRubbing && <small>{errors.aftercareNoRubbing}</small>}

                    <label className="checkbox-card">
                      <input
                        name="aftercareContact"
                        type="checkbox"
                        checked={form.aftercareContact}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.aftercareContact)}
                      />
                      <span>
                        Ich melde mich bei ungewöhnlichem Brennen, Schwellung,
                        starker Rötung oder anhaltenden Beschwerden zeitnah.
                      </span>
                    </label>
                    {errors.aftercareContact && <small>{errors.aftercareContact}</small>}
                  </div>

                  <label>
                    <span>Notiz zur Pflege oder Behandlung</span>
                    <textarea
                      name="aftercareNotes"
                      rows="4"
                      value={form.aftercareNotes}
                      onChange={updateField}
                      placeholder="Optional"
                    />
                  </label>
                </div>
              )}

              {activeStep === 3 && (
                <div className="liability-fields">
                  <div className="consent-stack">
                    <label className="checkbox-card">
                      <input
                        name="riskConsent"
                        type="checkbox"
                        checked={form.riskConsent}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.riskConsent)}
                      />
                      <span>
                        Ich habe die allgemeine Aufklärung gelesen und verstanden,
                        dass trotz sorgfältiger Durchführung Reizungen,
                        Unverträglichkeiten oder ein individuell abweichendes
                        Ergebnis möglich sind.
                      </span>
                    </label>
                    {errors.riskConsent && <small>{errors.riskConsent}</small>}

                    <label className="checkbox-card">
                      <input
                        name="liabilityConsent"
                        type="checkbox"
                        checked={form.liabilityConsent}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.liabilityConsent)}
                      />
                      <span>
                        Ich bestätige, dass meine Angaben vollständig und richtig
                        sind und ich relevante Änderungen vor der Behandlung mitteile.
                      </span>
                    </label>
                    {errors.liabilityConsent && <small>{errors.liabilityConsent}</small>}

                    <label className="checkbox-card privacy-card">
                      <input
                        name="privacyConsent"
                        type="checkbox"
                        checked={form.privacyConsent}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.privacyConsent)}
                      />
                      <span>
                        Ich bin damit einverstanden, dass LiftLounge meine Angaben
                        zur Terminvorbereitung, Dokumentation und Kontaktaufnahme
                        verarbeitet.
                        <small className="privacy-note">
                          Du kannst diese Einwilligung jederzeit mit Wirkung für
                          die Zukunft widerrufen, z. B. per E-Mail an{' '}
                          <a href={site.emailHref}>{site.email}</a>. Weitere
                          Informationen findest du in der{' '}
                          <a href="/datenschutz">Datenschutzerklärung</a>.
                        </small>
                      </span>
                    </label>
                    {errors.privacyConsent && <small>{errors.privacyConsent}</small>}
                  </div>

                  <label>
                    <span>Digitale Bestätigung mit Vor- und Nachname</span>
                    <input
                      name="signature"
                      type="text"
                      value={form.signature}
                      onChange={updateField}
                      autoComplete="name"
                      aria-invalid={Boolean(errors.signature)}
                      aria-describedby={
                        errors.signature ? 'liability-signature-error' : undefined
                      }
                      required
                    />
                    {errors.signature && (
                      <small id="liability-signature-error">{errors.signature}</small>
                    )}
                  </label>
                </div>
              )}

              <div className="liability-form-actions">
                {activeStep > 0 && (
                  <button
                    className="button button-secondary"
                    type="button"
                    onClick={goBack}
                    disabled={isSending}
                  >
                    <ArrowLeft aria-hidden="true" size={18} />
                    Zurück
                  </button>
                )}

                {activeStep < steps.length - 1 ? (
                  <button
                    className="button button-primary"
                    type="button"
                    onClick={goNext}
                    disabled={isSending}
                  >
                    Weiter
                    <ArrowRight aria-hidden="true" size={18} />
                  </button>
                ) : (
                  <button
                    className="button button-primary"
                    type="submit"
                    disabled={isSending}
                  >
                    {isSending ? 'Wird gesendet...' : 'Haftungshinweis senden'}
                    <ArrowRight aria-hidden="true" size={18} />
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
