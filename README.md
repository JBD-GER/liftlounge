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

Das Kontaktformular sendet über die serverseitige Route `/api/contact` eine Bestätigung an die Kundin und eine Anfrage-Mail an `lea.kirfel@web.de`.

Benötigte Environment Variable:

```bash
RESEND_API=...
```

Optional kann für Produktion eine verifizierte Absenderadresse gesetzt werden:

```bash
RESEND_FROM_EMAIL="LiftLounge <kontakt@deine-domain.de>"
CONTACT_TO_EMAIL="lea.kirfel@web.de"
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

## Wichtiger Hinweis zu Rechtstexten

Preise, Leistungen, FAQs und Schulungsangebote sind zentral in `src/data/siteData.js` gepflegt. Impressum, Datenschutz und AGB sind bewusst als Platzhalter gekennzeichnet und müssen vor Veröffentlichung rechtlich geprüft und ergänzt werden.
