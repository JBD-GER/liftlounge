# LiftLounge

Moderne Onepager-Website für LiftLounge, gebaut mit React und Vite. Der Hauptfokus liegt auf Lash Lifting Hannover am Standort Barsinghausen. Schulungen sind als sekundärer Bereich vorbereitet.

## Lokal starten

```bash
npm install
npm run dev
```

## Build prüfen

```bash
npm run build
npm run preview
```

## Kontaktformular mit Resend

Das Kontaktformular sendet über die serverseitige Route `/api/contact` eine Bestätigung an die Kundin und eine Anfrage-Mail an `info@liftlounge.de`. Eine direkt adressierte Kopie der Anfrage geht zusätzlich an `lea.kirfel@web.de`.

Benötigte Environment Variable:

```bash
RESEND_API=...
CONTACT_TO_EMAIL="info@liftlounge.de"
CONTACT_COPY_EMAIL="lea.kirfel@web.de"
```

Mit nur `RESEND_API` wird die Anfrage-Mail an `CONTACT_TO_EMAIL` gesendet. Eine
Kundenbestätigung wird erst verschickt, sobald eine verifizierte
Absenderadresse gesetzt ist:

```bash
RESEND_FROM_EMAIL="LiftLounge <info@liftlounge.de>"
```

Lokal funktioniert die API mit `npm run dev`, weil Vite die Route als Dev-Middleware bereitstellt. In Vercel müssen die Variablen zusätzlich im Projekt unter Environment Variables hinterlegt werden.

## Vercel Deployment

Das Projekt ist Vercel-ready. In Vercel einfach das GitHub-Repository verbinden und als Framework `Vite` erkennen lassen. Der Build Command ist `npm run build`, das Output Directory ist `dist`.

## Bilder austauschen

Die verwendeten Bilddateien liegen unter:

- `public/images/model-1.jpg`
- `public/images/model-2.jpg`
- `public/images/model-3.jpg`

Sie können später durch eigene Bilder mit denselben Dateinamen ersetzt werden.

## Inhalte pflegen

Preise, Leistungen, FAQs, Schulungsangebote und Stammdaten sind zentral in `src/data/siteData.js` gepflegt. Impressum, Datenschutz und AGB liegen in `src/components/LegalPage.jsx`.
