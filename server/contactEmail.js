import { Resend } from 'resend';

const defaultOwnerEmail = 'info@liftlounge.de';
const defaultOwnerCopyEmail = 'lea.kirfel@web.de';
const defaultFromEmail = 'LiftLounge <info@liftlounge.de>';
const businessPhone = '0175 6529911';
const businessLocation = 'Am Schafanger 12, 30890 Barsinghausen';

const fieldLimits = {
  name: 100,
  phone: 60,
  email: 180,
  packageName: 140,
  message: 2200,
};

const messages = {
  invalidRequest: 'Bitte prüfe deine Angaben und versuche es erneut.',
  serverError:
    'Die Anfrage konnte gerade nicht gesendet werden. Bitte rufe kurz an oder versuche es später erneut.',
};

class RequestError extends Error {
  constructor(status, message, errors = {}) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}

function getEmailConfig() {
  const explicitFromEmail = process.env.RESEND_FROM_EMAIL || process.env.RESEND_FROM;
  const ownerEmail = process.env.CONTACT_TO_EMAIL || process.env.RESEND_TO_EMAIL || defaultOwnerEmail;
  const ownerCopyEmails = parseEmailList(
    process.env.CONTACT_COPY_EMAIL ||
      process.env.CONTACT_BCC_EMAIL ||
      process.env.CONTACT_CC_EMAIL ||
      defaultOwnerCopyEmail,
  ).filter((email) => email.toLowerCase() !== ownerEmail.toLowerCase());

  return {
    apiKey: process.env.RESEND_API_KEY || process.env.RESEND_API,
    fromEmail: explicitFromEmail || defaultFromEmail,
    ownerEmail,
    ownerCopyEmails,
    customerConfirmationEnabled:
      process.env.RESEND_CUSTOMER_CONFIRMATION === 'true' || Boolean(explicitFromEmail),
  };
}

function parseEmailList(value) {
  const seen = new Set();

  return String(value ?? '')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean)
    .filter((email) => {
      const normalizedEmail = email.toLowerCase();

      if (seen.has(normalizedEmail)) {
        return false;
      }

      seen.add(normalizedEmail);
      return true;
    });
}

function normalizeField(value, limit) {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim()
    .slice(0, limit);
}

function normalizeSubmission(body) {
  return {
    name: normalizeField(body.name, fieldLimits.name),
    phone: normalizeField(body.phone, fieldLimits.phone),
    email: normalizeField(body.email, fieldLimits.email).toLowerCase(),
    packageName: normalizeField(body.packageName, fieldLimits.packageName),
    message: normalizeField(body.message, fieldLimits.message),
  };
}

function validateSubmission(form) {
  const errors = {};

  if (!form.name) errors.name = 'Bitte gib deinen Namen ein.';
  if (!form.phone) errors.phone = 'Bitte gib deine Telefonnummer ein.';
  if (!form.email) {
    errors.email = 'Bitte gib deine E-Mail-Adresse ein.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
  }
  if (!form.packageName) errors.packageName = 'Bitte wähle eine Behandlung aus.';
  if (!form.message) errors.message = 'Bitte schreibe kurz, worum es geht.';

  return errors;
}

async function readJsonBody(request) {
  if (request.body && typeof request.body === 'object' && !Buffer.isBuffer(request.body)) {
    return request.body;
  }

  if (typeof request.body === 'string') {
    return parseJson(request.body);
  }

  if (Buffer.isBuffer(request.body)) {
    return parseJson(request.body.toString('utf8'));
  }

  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;

    if (size > 20_000) {
      throw new RequestError(413, 'Die Nachricht ist zu groß.');
    }

    chunks.push(buffer);
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');
  return parseJson(rawBody);
}

function parseJson(rawBody) {
  try {
    return rawBody ? JSON.parse(rawBody) : {};
  } catch {
    throw new RequestError(400, messages.invalidRequest);
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });
}

function formatMultiline(value) {
  return escapeHtml(value).replace(/\n/g, '<br />');
}

function formatDate(date) {
  return new Intl.DateTimeFormat('de-DE', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/Berlin',
  }).format(date);
}

function renderShell(content) {
  return `
    <div style="margin:0;background:#fbf8f5;padding:32px 16px;font-family:Arial,sans-serif;color:#292321;">
      <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e8ded8;border-radius:12px;overflow:hidden;">
        <div style="padding:28px 28px 18px;border-bottom:1px solid #e8ded8;">
          <p style="margin:0 0 8px;color:#a86163;font-size:12px;font-weight:700;text-transform:uppercase;">LiftLounge by Lea Kirfel</p>
          <h1 style="margin:0;font-family:Georgia,serif;font-weight:500;font-size:30px;line-height:1.08;">${content.title}</h1>
        </div>
        <div style="padding:28px;">
          ${content.body}
        </div>
      </div>
    </div>
  `;
}

function renderField(label, value) {
  return `
    <tr>
      <td style="padding:10px 0;color:#716763;font-size:14px;width:150px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;color:#292321;font-size:15px;vertical-align:top;">${value}</td>
    </tr>
  `;
}

function createOwnerEmail(form, receivedAt) {
  const body = `
    <p style="margin:0 0 18px;color:#716763;line-height:1.65;">Über die Website wurde eine neue Anfrage gesendet.</p>
    <table style="width:100%;border-collapse:collapse;border-top:1px solid #e8ded8;border-bottom:1px solid #e8ded8;">
      ${renderField('Name', escapeHtml(form.name))}
      ${renderField('Telefon', `<a href="tel:${escapeHtml(form.phone.replace(/\s/g, ''))}" style="color:#292321;">${escapeHtml(form.phone)}</a>`)}
      ${renderField('E-Mail', `<a href="mailto:${escapeHtml(form.email)}" style="color:#292321;">${escapeHtml(form.email)}</a>`)}
      ${renderField('Interesse', escapeHtml(form.packageName))}
      ${renderField('Eingang', escapeHtml(receivedAt))}
    </table>
    <h2 style="margin:24px 0 10px;font-size:18px;">Nachricht</h2>
    <p style="margin:0;color:#292321;line-height:1.7;">${formatMultiline(form.message)}</p>
  `;

  return renderShell({
    title: 'Neue Anfrage',
    body,
  });
}

function createCustomerEmail(form) {
  const firstName = form.name.split(' ')[0] || form.name;
  const body = `
    <p style="margin:0 0 16px;color:#292321;line-height:1.7;">Hallo ${escapeHtml(firstName)},</p>
    <p style="margin:0 0 16px;color:#716763;line-height:1.7;">
      danke für deine Anfrage bei LiftLounge. Deine Nachricht ist angekommen und Lea meldet sich zeitnah persönlich bei dir.
    </p>
    <table style="width:100%;border-collapse:collapse;border-top:1px solid #e8ded8;border-bottom:1px solid #e8ded8;margin:22px 0;">
      ${renderField('Interesse', escapeHtml(form.packageName))}
      ${renderField('Standort', escapeHtml(businessLocation))}
      ${renderField('Telefon', `<a href="tel:+491756529911" style="color:#292321;">${businessPhone}</a>`)}
    </table>
    <p style="margin:0;color:#716763;line-height:1.7;">
      Falls du kurzfristig einen Termin abstimmen möchtest, kannst du auch direkt telefonisch Kontakt aufnehmen.
    </p>
  `;

  return renderShell({
    title: 'Deine Anfrage ist angekommen',
    body,
  });
}

function createOwnerText(form, receivedAt) {
  return [
    'Neue LiftLounge Anfrage',
    '',
    `Name: ${form.name}`,
    `Telefon: ${form.phone}`,
    `E-Mail: ${form.email}`,
    `Interesse: ${form.packageName}`,
    `Eingang: ${receivedAt}`,
    '',
    'Nachricht:',
    form.message,
  ].join('\n');
}

function createCustomerText(form) {
  const firstName = form.name.split(' ')[0] || form.name;

  return [
    `Hallo ${firstName},`,
    '',
    'danke für deine Anfrage bei LiftLounge. Deine Nachricht ist angekommen und Lea meldet sich zeitnah persönlich bei dir.',
    '',
    `Interesse: ${form.packageName}`,
    `Standort: ${businessLocation}`,
    `Telefon: ${businessPhone}`,
  ].join('\n');
}

async function sendEmail(resend, payload) {
  const { data, error } = await resend.emails.send(payload);

  if (error) {
    throw new Error(error.message || 'Resend konnte die E-Mail nicht senden.');
  }

  return data;
}

async function sendContactEmails(form) {
  const { apiKey, fromEmail, ownerEmail, ownerCopyEmails, customerConfirmationEnabled } =
    getEmailConfig();

  if (!apiKey) {
    throw new RequestError(500, 'Resend API Key fehlt.');
  }

  const resend = new Resend(apiKey);
  const receivedAt = formatDate(new Date());

  const ownerEmailPayload = {
    from: fromEmail,
    to: ownerEmail,
    replyTo: form.email,
    subject: `Neue LiftLounge Anfrage: ${form.name}`,
    html: createOwnerEmail(form, receivedAt),
    text: createOwnerText(form, receivedAt),
  };

  await sendEmail(resend, ownerEmailPayload);

  const ownerCopyResults = await Promise.allSettled(
    ownerCopyEmails.map((copyEmail) =>
      sendEmail(resend, {
        ...ownerEmailPayload,
        to: copyEmail,
      }),
    ),
  );

  ownerCopyResults.forEach((result, index) => {
    if (result.status === 'rejected') {
      console.error('Owner copy email error:', ownerCopyEmails[index], result.reason);
    }
  });

  if (!customerConfirmationEnabled) {
    return { customerEmailSent: false };
  }

  try {
    await sendEmail(resend, {
      from: fromEmail,
      to: form.email,
      replyTo: ownerEmail,
      subject: 'Deine Anfrage bei LiftLounge ist angekommen',
      html: createCustomerEmail(form),
      text: createCustomerText(form),
    });

    return { customerEmailSent: true };
  } catch (error) {
    console.error('Customer confirmation email error:', error);
    return { customerEmailSent: false };
  }
}

export async function createContactResponse(request) {
  try {
    if (request.method !== 'POST') {
      return {
        status: 405,
        headers: { Allow: 'POST' },
        body: { ok: false, message: 'Diese Route akzeptiert nur POST-Anfragen.' },
      };
    }

    const body = await readJsonBody(request);
    const form = normalizeSubmission(body);
    const errors = validateSubmission(form);

    if (Object.keys(errors).length > 0) {
      throw new RequestError(400, messages.invalidRequest, errors);
    }

    const emailResult = await sendContactEmails(form);

    return {
      status: 200,
      body: {
        ok: true,
        message: emailResult.customerEmailSent
          ? 'Danke, deine Anfrage wurde gesendet. Du erhältst gleich eine Bestätigung per E-Mail.'
          : 'Danke, deine Anfrage wurde gesendet. Lea meldet sich zeitnah persönlich bei dir.',
      },
    };
  } catch (error) {
    const status = error instanceof RequestError ? error.status : 500;

    if (status >= 500) {
      console.error('Contact form email error:', error);
    }

    return {
      status,
      body: {
        ok: false,
        message: status >= 500 ? messages.serverError : error.message,
        errors: error instanceof RequestError ? error.errors : undefined,
      },
    };
  }
}
