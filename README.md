# LiftLounge

Moderne Onepager-Website für LiftLounge, gebaut mit React und Vite. Die Seite ist auf Performance, mobile Nutzung, lokale SEO-Signale und eine spätere Erweiterung um Schulungsportal- oder Web-App-Funktionen vorbereitet.

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

## Vercel Deployment

Das Projekt ist Vercel-ready. In Vercel einfach das GitHub-Repository verbinden und als Framework `Vite` erkennen lassen. Der Build Command ist `npm run build`, das Output Directory ist `dist`.

## Bilder austauschen

Die verwendeten Bilddateien liegen unter:

- `public/images/model-1.jpg`
- `public/images/model-2.jpg`
- `public/images/model-3.jpg`

Sie können später 1:1 durch eigene Bilder mit denselben Dateinamen ersetzt werden.

## Wichtiger Hinweis zu Preisen und Rechtstexten

Der Referenzlink für die exakt zu übernehmende Preisstruktur wurde im Briefing nicht mitgeliefert. Deshalb sind die Pakete zentral in `src/data/siteData.js` vorbereitet und aktuell auf `Preis auf Anfrage` gesetzt. Sobald die Referenzpreise vorliegen, müssen nur diese Daten angepasst werden.

Impressum, Datenschutz und AGB sind bewusst als Platzhalter gekennzeichnet und müssen vor Veröffentlichung rechtlich geprüft und ergänzt werden.
