import {
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Wand2,
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
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Preise', href: '#preise' },
  { label: 'Ratgeber', href: '/ratgeber' },
  { label: 'Schulungen', href: '#schulungen' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const heroHighlights = [
  'Lash Lifting',
  'Brow Lifting',
  'Kombi-Behandlung',
];

export const benefits = [
  {
    title: 'Natürlicher Schwung',
    text: 'Deine eigenen Wimpern werden sichtbar angehoben, gefärbt und gepflegt.',
    icon: Wand2,
  },
  {
    title: 'Ausdrucksstarke Brows',
    text: 'Brow Lifting bringt deine Augenbrauen in Form und sorgt für einen offenen Blick.',
    icon: Sparkles,
  },
  {
    title: 'Färben & Pflege',
    text: 'Die Behandlungen sind mit Färben und pflegender Keratin-Komponente aufgebaut.',
    icon: Star,
  },
  {
    title: 'Studio in Barsinghausen',
    text: 'Ruhiger Standort bei Hannover: Am Schafanger 12 in 30890 Barsinghausen.',
    icon: MapPin,
  },
  {
    title: 'Kombi möglich',
    text: 'Lash Lifting und Brow Lifting können in einem abgestimmten Termin kombiniert werden.',
    icon: CheckCircle2,
  },
];

export const services = [
  {
    name: 'Lash Lifting',
    eyebrow: 'Wimpern',
    price: 'ab 65 €',
    duration: 'ca. 60-90 Min.',
    image: '/images/model-2.jpg',
    alt: 'Natürliches Lash Lifting Ergebnis mit gepflegten Wimpern und Augenbrauen',
    description:
      'Für sichtbar geliftete, dunklere und gepflegte Naturwimpern ohne Extensions. Ideal, wenn du dir einen wachen Blick und einen Mascara-Look ohne tägliches Tuschen wünschst.',
    features: ['Classic Lash Lifting', 'Korean Lash Lifting', 'inkl. Färben & Keratin', 'Effekt bis zu 6-8 Wochen'],
  },
  {
    name: 'Brow Lifting',
    eyebrow: 'Augenbrauen',
    price: '65 €',
    duration: 'ca. 60 Min.',
    image: '/images/model-3.jpg',
    alt: 'Brow Lifting Behandlung mit Bürstchen in einem hellen Beauty-Studio',
    description:
      'Für vollere, definierte und sauber gestylte Brauen. Die Härchen werden geordnet, gefärbt, gezupft und mit pflegenden Wirkstoffen versorgt.',
    features: ['Brow Lamination Effekt', 'inkl. Färben & Keratin', 'Zupfen & Styling', 'Haltbarkeit ca. 4-8 Wochen'],
  },
  {
    name: 'Lash & Brow Kombi',
    eyebrow: 'Kombi',
    price: 'ab 120 €',
    duration: 'ca. 90 Min.',
    image: '/images/model-1.jpg',
    alt: 'Kosmetische Lash und Brow Behandlung auf einer Behandlungsliege',
    description:
      'Die passende Behandlung, wenn Wimpern und Brauen zusammen harmonisch wirken sollen. Praktisch, ruhig und mit einem sichtbaren Vorher-Nachher-Gefühl.',
    features: ['Lash Lifting + Brow Lifting', 'Classic oder Korean möglich', 'inkl. Färben & Pflege', 'ein Termin für den kompletten Look'],
  },
];

export const audience = [
  'Du möchtest einen offenen Blick ohne Wimpernextensions',
  'Deine Naturwimpern sollen geschwungener und dunkler wirken',
  'Deine Augenbrauen sollen voller, geordneter und definierter aussehen',
  'Du suchst Lash Lifting Hannover mit Standort in Barsinghausen',
  'Du möchtest eine ruhige Behandlung mit sauberem, natürlichem Ergebnis',
];

export const processSteps = [
  {
    title: 'Termin anfragen',
    text: 'Du meldest dich telefonisch oder über das Formular und nennst deine Wunschbehandlung.',
    icon: MessageCircle,
  },
  {
    title: 'Termin abstimmen',
    text: 'Gemeinsam wird ein passender Termin am Standort Barsinghausen vereinbart.',
    icon: CalendarCheck,
  },
  {
    title: 'Kurze Beratung',
    text: 'Vor Ort werden Wunsch, Naturwimpern, Brauenform und mögliche Hinweise besprochen.',
    icon: HeartHandshake,
  },
  {
    title: 'Vorbereitung',
    text: 'Wimpern oder Brauen werden gereinigt, vorbereitet und typgerecht positioniert.',
    icon: ClipboardList,
  },
  {
    title: 'Lifting & Farbe',
    text: 'Die Lifting-Lotionen, Farbe und Pflege werden sorgfältig und ruhig angewendet.',
    icon: Wand2,
  },
  {
    title: 'Pflegefinish',
    text: 'Zum Abschluss erhältst du dein Ergebnis und klare Pflegehinweise für die ersten 24 Stunden.',
    icon: ShieldCheck,
  },
];

export const pricingPackages = [
  {
    name: 'Classic Lash Lifting',
    eyebrow: 'Wimpern',
    price: '65 €',
    description:
      'Für natürlich geschwungene, gefärbte Wimpern mit gepflegtem Mascara-Effekt.',
    features: ['inkl. Färben', 'inkl. Keratin-Pflege', 'ca. 60-90 Minuten', 'ohne künstliche Wimpern'],
  },
  {
    name: 'Korean Lash Lifting',
    eyebrow: 'Premium Lash',
    price: '75 €',
    description:
      'Intensiveres Lash Lifting mit präzisem Ansatzlift und besonders pflegendem Finish.',
    features: ['inkl. Färben', 'inkl. Keratin-Pflege', 'präziser Lifting-Effekt', 'Effekt bis zu 6-8 Wochen'],
    featured: true,
  },
  {
    name: 'Brow Lifting',
    eyebrow: 'Brows',
    price: '65 €',
    description:
      'Für vollere, ausdrucksstarke Augenbrauen mit Farbe, Form und natürlichem Styling.',
    features: ['inkl. Färben', 'inkl. Keratin-Pflege', 'Zupfen & Styling', 'ca. 60 Minuten'],
  },
  {
    name: 'Lash & Brow Kombi',
    eyebrow: 'Kombi',
    price: '120 €',
    description:
      'Classic Lash Lifting und Brow Lifting in einem abgestimmten Behandlungstermin.',
    features: ['Lash + Brow', 'inkl. Färben', 'inkl. Keratin-Pflege', 'harmonischer Gesamtlook'],
  },
  {
    name: 'Korean Lash & Brow Kombi',
    eyebrow: 'Premium Kombi',
    price: '130 €',
    description:
      'Korean Lash Lifting kombiniert mit Brow Lifting für ein besonders gepflegtes Ergebnis.',
    features: ['Korean Lash Lifting', 'Brow Lifting', 'inkl. Färben & Keratin', 'Premium Pflegefinish'],
  },
];

export const trainingOffers = [
  {
    name: 'Lash Lifting Schulung',
    price: '649 €',
    text: 'Ergänzendes Schulungsangebot nach persönlicher Anfrage und Terminabstimmung.',
  },
  {
    name: 'Brow Lifting Schulung',
    price: '649 €',
    text: 'Für Beauty-Interessierte, die Brow Lifting professionell erlernen möchten.',
  },
  {
    name: 'Lash & Brow Kombi-Schulung',
    price: '1.200 €',
    text: 'Kombi-Angebot über zwei Behandlungsschwerpunkte, nur nach vorheriger Rücksprache.',
  },
];

export const gallery = [
  {
    src: '/images/model-1.jpg',
    alt: 'Kosmetikerin führt eine Lash und Brow Behandlung in einem hellen Studio aus',
    title: 'Behandlung',
    text: 'Ruhig, präzise und typgerecht.',
  },
  {
    src: '/images/model-2.jpg',
    alt: 'Natürliches Lash Lifting Ergebnis mit gepflegtem Augenaufschlag',
    title: 'Lash Lifting',
    text: 'Natürlich geliftete Wimpern.',
  },
  {
    src: '/images/model-3.jpg',
    alt: 'Brow Lifting Behandlung mit Augenbrauenbürste und Beauty-Tools',
    title: 'Brow Lifting',
    text: 'Definierte, gepflegte Brauen.',
  },
];

export const whyLiftLounge = [
  'Fokus auf natürliche Ergebnisse statt überzeichnetem Look',
  'Lash Lifting und Brow Lifting als klare Kernleistungen',
  'Ruhige Behandlungssituation mit persönlicher Abstimmung',
  'Färben, Form und Pflege werden passend kombiniert',
  'Schulungen bleiben bewusst ergänzend und werden separat angefragt',
];

export const faqs = [
  {
    question: 'Was ist ein Lash Lifting?',
    answer:
      'Beim Lash Lifting werden die eigenen Naturwimpern vom Ansatz aus sichtbar angehoben, gefärbt und gepflegt. Es werden keine künstlichen Wimpern aufgeklebt.',
  },
  {
    question: 'Was ist ein Brow Lifting?',
    answer:
      'Beim Brow Lifting werden die Augenbrauenhärchen in Form gebracht, gefärbt, gezupft und gestylt. Das Ergebnis wirkt voller, geordneter und öffnet den Blick.',
  },
  {
    question: 'Wie lange hält das Ergebnis?',
    answer:
      'Ein Lash Lifting hält je nach Wimpernwachstum häufig etwa 6 bis 8 Wochen. Brow Lifting kann je nach Haarstruktur und Pflege etwa 4 bis 8 Wochen sichtbar bleiben.',
  },
  {
    question: 'Wie lange dauert eine Behandlung?',
    answer:
      'Für Lash Lifting solltest du etwa 60 bis 90 Minuten einplanen. Brow Lifting dauert etwa 60 Minuten. Eine Kombi-Behandlung kann entsprechend etwas länger dauern.',
  },
  {
    question: 'Sind Färben und Keratin inklusive?',
    answer:
      'Ja, die Lash- und Brow-Angebote sind mit Färben und pflegender Keratin-Komponente aufgebaut, sofern individuell nichts dagegen spricht.',
  },
  {
    question: 'Was muss ich vor dem Termin beachten?',
    answer:
      'Bitte komme möglichst ungeschminkt zum Termin. Wimpern und Augenbrauen sollten sauber sein, damit die Behandlung direkt und ohne unnötige Wartezeit starten kann.',
  },
  {
    question: 'Was muss ich nach der Behandlung beachten?',
    answer:
      'In den ersten 24 Stunden solltest du Wasser, Wasserdampf, Waschgel und Abschminkprodukte im behandelten Bereich vermeiden, damit das Ergebnis optimal hält.',
  },
  {
    question: 'Kann ich Lash Lifting und Brow Lifting kombinieren?',
    answer:
      'Ja. Die Kombi-Behandlung ist ideal, wenn Wimpern und Brauen zusammen frisch, gepflegt und harmonisch wirken sollen.',
  },
  {
    question: 'Wo findet die Behandlung statt?',
    answer:
      'Die Behandlungen finden am Standort Am Schafanger 12, 30890 Barsinghausen statt. LiftLounge ist gut erreichbar aus Hannover, Wunstorf, Gehrden, Wennigsen, Neustadt am Rübenberge, Seelze und der Region Hannover.',
  },
  {
    question: 'Bietest du auch Schulungen an?',
    answer:
      'Ja, Schulungen für Lash Lifting und Brow Lifting werden ergänzend und nach persönlicher Anfrage angeboten. Der Hauptfokus der Website liegt jedoch auf den kosmetischen Behandlungen.',
  },
];

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'BeautySalon'],
  name: 'LiftLounge',
  founder: 'Lea Kirfel',
  telephone: '+491756529911',
  priceRange: '65-130 EUR',
  image: '/images/model-1.jpg',
  description:
    'LiftLounge bietet Lash Lifting Hannover, Brow Lifting und Kombi-Behandlungen am Standort Barsinghausen.',
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
  makesOffer: pricingPackages.map((item) => ({
    '@type': 'Offer',
    name: item.name,
    category: 'Kosmetische Behandlung',
    priceCurrency: 'EUR',
    price: item.price.replace(' €', '').replace('.', ''),
    availability: 'https://schema.org/InStock',
  })),
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lash Lifting Hannover',
  description:
    'Kosmetische Lash Lifting, Korean Lash Lifting, Brow Lifting und Kombi-Behandlungen bei LiftLounge am Standort Barsinghausen bei Hannover.',
  provider: {
    '@type': 'BeautySalon',
    name: 'LiftLounge',
    telephone: '+491756529911',
  },
  areaServed: 'Hannover, Barsinghausen und Region Hannover',
  serviceType: ['Lash Lifting', 'Brow Lifting', 'Korean Lash Lifting'],
};
