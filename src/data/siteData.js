import {
  Award,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react';

export const site = {
  name: 'LiftLounge',
  owner: 'Lea Kirfel',
  phone: '0175 6529911',
  phoneHref: 'tel:+491756529911',
  email: '',
  legalAddress: {
    street: 'Großer Kamp 5a',
    postalCity: '31633 Leese',
  },
  trainingAddress: {
    street: 'Am Schafanger 12',
    postalCity: '30890 Barsinghausen',
  },
};

export const navigation = [
  { label: 'Schulung', href: '#schulung' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Preise', href: '#preise' },
  { label: 'Standort', href: '#standort' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const heroHighlights = [
  'Persönliche 1:1 Betreuung',
  'Praxis am Modell',
  'Zertifikat inklusive',
];

export const benefits = [
  {
    title: '1:1 Betreuung',
    text: 'Du lernst in ruhiger Atmosphäre mit direktem Feedback und genügend Raum für Fragen.',
    icon: HeartHandshake,
  },
  {
    title: 'Praxisnah am Modell',
    text: 'Die Anwendung wird Schritt für Schritt erklärt und unter Anleitung praktisch geübt.',
    icon: UserCheck,
  },
  {
    title: 'Zertifikat inklusive',
    text: 'Nach erfolgreicher Teilnahme erhältst du ein Zertifikat für deine Unterlagen.',
    icon: Award,
  },
  {
    title: 'Standort Barsinghausen',
    text: 'Die Schulung findet vor Ort in Barsinghausen in der Region Hannover statt.',
    icon: MapPin,
  },
  {
    title: 'Für Anfängerinnen',
    text: 'Der Kurs ist so aufgebaut, dass du auch ohne Vorerfahrung sicher starten kannst.',
    icon: Sparkles,
  },
];

export const audience = [
  'Anfängerinnen, die Wimpernlifting lernen möchten',
  'Beauty-Dienstleisterinnen mit Wunsch nach einem neuen Angebot',
  'Kosmetikerinnen, die ihre Behandlungen erweitern wollen',
  'Gründerinnen auf dem Weg in die Selbstständigkeit',
  'Personen, die eine Beauty Schulung vor Ort mit Zertifikat suchen',
];

export const processSteps = [
  {
    title: 'Anfrage stellen',
    text: 'Du sendest eine kurze Anfrage mit deinen Wünschen und deiner aktuellen Erfahrung.',
    icon: MessageCircle,
  },
  {
    title: 'Termin abstimmen',
    text: 'Gemeinsam wird ein passender Schulungstermin in Barsinghausen abgestimmt.',
    icon: CalendarCheck,
  },
  {
    title: 'Vorbereitung & Theorie',
    text: 'Du erhältst die wichtigsten Grundlagen zu Hygiene, Produkten, Indikationen und Ablauf.',
    icon: BookOpenCheck,
  },
  {
    title: 'Praxistag vor Ort',
    text: 'Am Schulungstag werden Technik, Beratung und sichere Anwendung detailliert besprochen.',
    icon: ClipboardList,
  },
  {
    title: 'Übung am Modell',
    text: 'Du setzt das Gelernte praktisch um und bekommst direktes, ruhiges Feedback.',
    icon: CheckCircle2,
  },
  {
    title: 'Zertifikat erhalten',
    text: 'Nach der Schulung nimmst du dein Zertifikat und klare nächste Schritte mit.',
    icon: GraduationCap,
  },
  {
    title: 'Weitere Betreuung',
    text: 'Auf Wunsch kann eine spätere Begleitung oder ein Lernbereich ergänzt werden.',
    icon: ShieldCheck,
  },
];

export const pricingPackages = [
  {
    name: '1:1 Lashlifting Schulung',
    eyebrow: 'Einzeltraining',
    price: 'Preis auf Anfrage',
    description:
      'Persönliche Wimpernschulung für einen sicheren Start in die professionelle Lashlifting-Anwendung.',
    features: [
      'Theorie, Hygiene und Produktkunde',
      'Schritt-für-Schritt Ablauf der Behandlung',
      'Praxis am Modell vor Ort',
      'Persönliches Feedback während der Anwendung',
      'Zertifikat nach erfolgreicher Teilnahme',
    ],
  },
  {
    name: '1:1 Intensiv Schulung',
    eyebrow: 'Beliebt',
    price: 'Preis auf Anfrage',
    description:
      'Für Teilnehmerinnen, die besonders viel Praxis, Korrektur und Sicherheit für den Start wünschen.',
    features: [
      'Alle Inhalte der 1:1 Lashlifting Schulung',
      'Vertiefung zu Analyse, Timing und Ergebnisqualität',
      'Mehr Raum für individuelle Fragen',
      'Fehlerquellen erkennen und vermeiden',
      'Optionale Nachbetreuung nach dem Kurstag',
    ],
    featured: true,
  },
  {
    name: 'Premium Begleitung',
    eyebrow: 'Mehr Support',
    price: 'Preis auf Anfrage',
    description:
      'Für angehende Beauty-Dienstleisterinnen, die neben der Technik auch Struktur und Startklarheit suchen.',
    features: [
      'Individuelle Vorbereitung auf deinen Einstieg',
      'Praxisorientierter Schulungstag in Barsinghausen',
      'Behandlungsablauf, Kundinnenkommunikation und Sicherheit',
      'Zertifikat inklusive',
      'Vorbereitet für späteren Lernbereich oder Zusatzsupport',
    ],
  },
];

export const gallery = [
  {
    src: '/images/model-1.jpg',
    alt: 'Trainerin begleitet eine Teilnehmerin bei einer Lashlifting Schulung in einem hellen Beauty-Studio',
    title: 'Ruhig lernen',
    text: 'Persönliche Anleitung statt Massenkurs.',
  },
  {
    src: '/images/model-2.jpg',
    alt: 'Beauty-Portrait mit natürlichen Wimpern als Beispiel für ein gepflegtes Lashlifting-Ergebnis',
    title: 'Feine Ergebnisse',
    text: 'Natürlich, sauber und typgerecht arbeiten.',
  },
  {
    src: '/images/model-3.jpg',
    alt: 'Lashlifting Tools und Zertifikatsmappe auf einem hochwertigen Schulungstisch',
    title: 'Klarer Ablauf',
    text: 'Struktur, Materialkunde und Praxis greifen ineinander.',
  },
];

export const whyLiftLounge = [
  'Kleine Schulungsgröße mit voller Aufmerksamkeit für deine Fragen',
  'Verständliche Erklärungen statt überladener Theorie',
  'Hochwertige, ruhige Lernatmosphäre für konzentriertes Arbeiten',
  'Praxisnaher Aufbau mit direktem Feedback',
  'Ideal als Einstieg in professionelle Lash- und Beauty-Dienstleistungen',
];

export const faqs = [
  {
    question: 'Ist die Schulung für Anfängerinnen geeignet?',
    answer:
      'Ja. Die 1:1 Wimpernschulung ist so aufgebaut, dass auch Anfängerinnen Schritt für Schritt Wimpernlifting lernen können. Vorerfahrung im Beauty-Bereich ist hilfreich, aber nicht zwingend erforderlich.',
  },
  {
    question: 'Bekomme ich ein Zertifikat?',
    answer:
      'Ja. Nach erfolgreicher Teilnahme erhältst du ein Zertifikat. Damit kannst du dokumentieren, dass du eine Lash Schulung mit Zertifikat bei LiftLounge absolviert hast.',
  },
  {
    question: 'Findet die Schulung vor Ort statt?',
    answer:
      'Ja. Die Beauty Schulung vor Ort findet am Schulungsstandort Am Schafanger 12, 30890 Barsinghausen statt.',
  },
  {
    question: 'Muss ich ein Modell mitbringen?',
    answer:
      'Das wird individuell bei der Terminabstimmung geklärt. Falls ein Modell benötigt wird, erhältst du rechtzeitig klare Hinweise zur Vorbereitung.',
  },
  {
    question: 'Wie lange dauert die Schulung?',
    answer:
      'Die genaue Dauer hängt vom gewählten Paket und deinem Kenntnisstand ab. Geplant wird mit ausreichend Zeit für Theorie, Vorbereitung, Praxis und Fragen.',
  },
  {
    question: 'Kann ich danach direkt starten?',
    answer:
      'Die Schulung gibt dir eine fundierte Basis, um sicher weiterzuüben und dein Angebot professionell aufzubauen. Ob du direkt startest, hängt auch von Übung, Sicherheit und deinen lokalen Anforderungen ab.',
  },
  {
    question: 'Gibt es spätere Unterstützung?',
    answer:
      'Auf Wunsch kann eine weitere Betreuung abgestimmt werden. Ein optionaler Vorbereitungs- oder Lernbereich ist für die Zukunft bereits mitgedacht.',
  },
  {
    question: 'Wo findet die Schulung statt?',
    answer:
      'Die Lashlifting Schulung findet in Barsinghausen statt und ist gut erreichbar aus Hannover, Wunstorf, Gehrden, Wennigsen, Neustadt am Rübenberge, Seelze und der Region Hannover.',
  },
];

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'BeautySalon'],
  name: 'LiftLounge',
  founder: 'Lea Kirfel',
  telephone: '+491756529911',
  priceRange: 'Auf Anfrage',
  image: '/images/model-1.jpg',
  description:
    'LiftLounge bietet persönliche 1:1 Lashlifting Schulungen in Barsinghausen bei Hannover mit Praxis am Modell und Zertifikat.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Am Schafanger 12',
    postalCode: '30890',
    addressLocality: 'Barsinghausen',
    addressRegion: 'Region Hannover',
    addressCountry: 'DE',
  },
  areaServed: [
    'Barsinghausen',
    'Hannover',
    'Region Hannover',
    'Leese',
    'Wunstorf',
    'Gehrden',
    'Wennigsen',
    'Neustadt am Rübenberge',
    'Seelze',
  ],
  makesOffer: {
    '@type': 'Offer',
    name: '1:1 Lashlifting Schulung mit Zertifikat',
    category: 'Beauty Schulung',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'EUR',
      description: 'Preis auf Anfrage',
    },
  },
};

export const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Lashlifting Schulung Barsinghausen',
  description:
    'Praxisnahe 1:1 Wimpernschulung in Barsinghausen bei Hannover mit persönlicher Betreuung, Modellarbeit und Zertifikat.',
  provider: {
    '@type': 'Organization',
    name: 'LiftLounge',
    telephone: '+491756529911',
  },
  courseMode: 'In-person',
  educationalCredentialAwarded: 'Zertifikat',
  inLanguage: 'de',
  areaServed: 'Region Hannover',
};
