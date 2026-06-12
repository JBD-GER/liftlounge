import { useMemo, useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { pricingPackages, site, trainingOffers } from '../data/siteData.js';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  packageName: '',
  message: '',
};

function validate(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = 'Bitte gib deinen Namen ein.';
  if (!form.phone.trim()) errors.phone = 'Bitte gib deine Telefonnummer ein.';
  if (!form.email.trim()) {
    errors.email = 'Bitte gib deine E-Mail-Adresse ein.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
  }
  if (!form.packageName) errors.packageName = 'Bitte wähle eine Behandlung aus.';
  if (!form.message.trim()) errors.message = 'Bitte schreibe kurz, worum es geht.';

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });
  const packageOptions = useMemo(
    () => [
      ...pricingPackages.map((plan) => plan.name),
      ...trainingOffers.map((offer) => offer.name),
    ],
    [],
  );

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));

    if (submitState.status !== 'sending') {
      setSubmitState({ status: 'idle', message: '' });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState({ status: 'idle', message: '' });
      return;
    }

    setSubmitState({ status: 'sending', message: 'Deine Anfrage wird gesendet...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.ok) {
        if (payload.errors) {
          setErrors(payload.errors);
        }

        throw new Error(payload.message || 'Die Anfrage konnte gerade nicht gesendet werden.');
      }

      setSubmitState({
        status: 'success',
        message:
          payload.message ||
          'Danke, deine Anfrage wurde gesendet. Du erhältst gleich eine Bestätigung per E-Mail.',
      });
      setForm(initialForm);
    } catch (error) {
      setSubmitState({
        status: 'error',
        message:
          error.message ||
          'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es später erneut.',
      });
    }
  }

  const isSending = submitState.status === 'sending';

  return (
    <section className="section contact-section" id="kontakt">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Kontakt</p>
          <h2>Termin anfragen</h2>
          <p>
            Sende deine Anfrage für Lash Lifting. Der Standort ist in
            Barsinghausen, gut erreichbar für Hannover und die Region Hannover.
          </p>
          <a className="direct-call" href={site.phoneHref}>
            <Phone aria-hidden="true" size={20} />
            Oder direkt telefonisch kontaktieren: {site.phone}
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {submitState.status === 'success' && (
            <div className="success-message" role="status">
              <CheckCircle2 aria-hidden="true" size={21} />
              <span>{submitState.message}</span>
            </div>
          )}

          {submitState.status === 'error' && (
            <div className="error-message" role="alert">
              <AlertCircle aria-hidden="true" size={21} />
              <span>{submitState.message}</span>
            </div>
          )}

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
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && <small id="name-error">{errors.name}</small>}
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
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                required
              />
              {errors.phone && <small id="phone-error">{errors.phone}</small>}
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
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && <small id="email-error">{errors.email}</small>}
          </label>

          <label>
            <span>Gewünschte Behandlung / Interesse</span>
            <select
              name="packageName"
              value={form.packageName}
              onChange={updateField}
              aria-invalid={Boolean(errors.packageName)}
              aria-describedby={errors.packageName ? 'package-error' : undefined}
              required
            >
              <option value="">Bitte auswählen</option>
              {packageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.packageName && <small id="package-error">{errors.packageName}</small>}
          </label>

          <label>
            <span>Nachricht</span>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={updateField}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
            />
            {errors.message && <small id="message-error">{errors.message}</small>}
          </label>

          <button className="button button-primary submit-button" type="submit" disabled={isSending}>
            {isSending ? 'Wird gesendet...' : 'Anfrage senden'}
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
