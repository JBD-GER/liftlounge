import {
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Star,
  Wand2,
} from 'lucide-react';

export const site = {
  name: 'LiftLounge',
  owner: 'Lea Kirfel',
  phone: '0175 6529911',
  phoneHref: 'tel:+491756529911',
  email: 'info@liftlounge.de',
  emailHref: 'mailto:info@liftlounge.de',
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
  'Schulungen',
];

export const benefits = [
  {
    title: 'Wimpern und Augenbrauen',
    text: 'Lash Lifting und Brow Lifting mit natürlichem Finish.',
    icon: Wand2,
  },
  {
    title: 'Ohne Extensions',
    text: 'Mehr Ausdruck ohne künstliche Wimpern.',
    icon: CheckCircle2,
  },
  {
    title: 'Farbe & Pflege',
    text: 'Sauber vorbereitet, gefärbt und gepflegt.',
    icon: Star,
  },
  {
    title: 'Bei Hannover',
    text: 'Ruhiger Standort in Barsinghausen, gut erreichbar aus Hannover.',
    icon: MapPin,
  },
];

export const services = [
  {
    name: 'Lash Lifting',
    eyebrow: 'Wimpern',
    price: '65 €',
    duration: 'ca. 60-90 Min.',
    image: '/images/model-2.jpg',
    alt: 'Natürliches Lash Lifting Ergebnis mit gepflegten Wimpern',
    description:
      'Für geliftete, dunklere Naturwimpern ohne Extensions. Frisch, sauber und alltagstauglich.',
    features: ['inkl. Färben', 'inkl. Pflegefinish', 'ohne künstliche Wimpern'],
  },
  {
    name: 'Brow Lifting',
    eyebrow: 'Augenbrauen',
    price: '65 €',
    duration: 'ca. 45-60 Min.',
    image: '/images/model-3.jpg',
    alt: 'Natürlich gepflegte Augenpartie für Brow Lifting',
    description:
      'Für definierte, voller wirkende Augenbrauen mit sauberem Finish inklusive Färben.',
    features: ['inkl. Färben', 'Form wird abgestimmt', 'natürlicher Look'],
  },
  {
    name: 'Augenbrauenkorrektur mit Heißwachs',
    eyebrow: 'Augenbrauen',
    price: '15 €',
    duration: 'ca. 15-20 Min.',
    image: '/images/model-3.jpg',
    alt: 'Gepflegte Augenbrauen nach einer präzisen Augenbrauenkorrektur',
    description:
      'Für eine saubere Augenbrauenform mit warmem Wachs, fein abgestimmt auf deine natürliche Form.',
    features: ['mit Heißwachs', 'präzise Formkorrektur', 'kurzer Zusatztermin'],
  },
];

export const audience = [
  'Du möchtest einen offenen Blick ohne künstlichen Look.',
  'Wimpern oder Augenbrauen sollen gepflegter und definierter wirken.',
  'Du suchst Lash Lifting oder Brow Lifting bei Hannover.',
  'Du willst morgens schneller fertig sein.',
];

export const processSteps = [
  {
    title: 'Termin anfragen',
    text: 'Du meldest dich telefonisch oder über das Formular.',
    icon: MessageCircle,
  },
  {
    title: 'Kurz beraten',
    text: 'Vor Ort werden Wunsch, Ausgangslage und Form abgestimmt.',
    icon: HeartHandshake,
  },
  {
    title: 'Vorbereitung',
    text: 'Wimpern oder Augenbrauen werden gereinigt und präzise vorbereitet.',
    icon: ClipboardList,
  },
  {
    title: 'Lifting & Finish',
    text: 'Das Lifting wird ruhig umgesetzt und gepflegt abgeschlossen.',
    icon: Wand2,
  },
];

export const pricingPackages = [
  {
    name: 'Lash Lifting',
    eyebrow: 'Wimpern',
    price: '65 €',
    description:
      'Natürlich geliftete und gefärbte Wimpern mit gepflegtem Finish.',
    features: ['inkl. Färben', 'inkl. Pflege', 'ca. 60-90 Minuten'],
  },
  {
    name: 'Brow Lifting',
    eyebrow: 'Augenbrauen',
    price: '65 €',
    description:
      'Definierte Augenbrauen mit sauberer Form, natürlichem Ausdruck und Färben.',
    features: ['inkl. Färben', 'typgerechte Form', 'ca. 45-60 Minuten'],
  },
  {
    name: 'Lash & Brow Lifting',
    eyebrow: 'Kombi-Behandlung',
    price: '120 €',
    description:
      'Lash Lifting und Brow Lifting zusammen in einem Termin zum Kombipreis.',
    features: ['inkl. Färben', 'beide Liftings kombiniert', 'ein Termin'],
  },
  {
    name: 'Augenbrauenkorrektur mit Heißwachs',
    eyebrow: 'Augenbrauen',
    price: '15 €',
    description:
      'Saubere Augenbrauenkorrektur mit warmem Wachs für eine gepflegte, natürliche Form.',
    features: ['mit Heißwachs', 'präzise Form', 'ca. 15-20 Minuten'],
  },
];

export const trainingOffers = [
  {
    name: 'Lash Lifting Schulung',
    format: '1:1 Einzelschulung',
    duration: 'Dauer: 1 Tag',
    price: '649 €',
  },
  {
    name: 'Brow Lifting Schulung',
    format: '1:1 Einzelschulung',
    duration: 'Dauer: 1 Tag',
    price: '649 €',
  },
  {
    name: 'Lash- & Brow Lifting Kombi Schulung',
    format: '1:1 Einzelschulung',
    duration: 'Dauer: 2 Tage',
    price: '1.200 €',
  },
];

export const gallery = [
  {
    src: '/images/model-1.jpg',
    alt: 'Kosmetikerin führt eine Lash Lifting Behandlung in einem hellen Studio aus',
  },
  {
    src: '/images/model-2.jpg',
    alt: 'Natürliches Lash Lifting Ergebnis mit gepflegtem Augenaufschlag',
  },
  {
    src: '/images/model-3.jpg',
    alt: 'Beauty-Behandlung mit Fokus auf gepflegte Wimpern in heller Studioatmosphäre',
  },
];

export const faqs = [
  {
    question: 'Was ist ein Lash Lifting?',
    answer:
      'Beim Lash Lifting werden die eigenen Naturwimpern vom Ansatz aus angehoben, gefärbt und gepflegt. Es werden keine künstlichen Wimpern aufgeklebt.',
  },
  {
    question: 'Wie lange hält das Ergebnis?',
    answer:
      'Ein Lash Lifting hält je nach Wimpernwachstum häufig etwa 6 bis 8 Wochen. Das Ergebnis wird mit dem natürlichen Wimpernwechsel nach und nach weicher.',
  },
  {
    question: 'Wie lange dauert eine Behandlung?',
    answer:
      'Für Lash Lifting solltest du etwa 60 bis 90 Minuten einplanen. So bleibt genug Zeit für Vorbereitung, Lifting, Farbe und Pflegefinish.',
  },
  {
    question: 'Sind Färben und Keratin inklusive?',
    answer:
      'Ja, das Lash Lifting ist mit Färben und pflegender Keratin-Komponente aufgebaut, sofern individuell nichts dagegen spricht.',
  },
  {
    question: 'Was muss ich vor dem Termin beachten?',
    answer:
      'Bitte komme möglichst ungeschminkt zum Termin. Die Wimpern sollten sauber sein, damit die Behandlung direkt und ohne unnötige Wartezeit starten kann.',
  },
  {
    question: 'Was muss ich nach der Behandlung beachten?',
    answer:
      'In den ersten 24 Stunden solltest du Wasser, Wasserdampf, Waschgel und Abschminkprodukte im behandelten Bereich vermeiden, damit das Ergebnis optimal hält.',
  },
  {
    question: 'Wo findet die Behandlung statt?',
    answer:
      'Die Behandlungen finden am Standort Am Schafanger 12, 30890 Barsinghausen statt. LiftLounge ist gut erreichbar aus Hannover, Wunstorf, Gehrden, Wennigsen, Neustadt am Rübenberge, Seelze und der Region Hannover.',
  },
  {
    question: 'Wo kann ich parken?',
    answer:
      'Du kannst direkt am Schafanger parken. Der Eingang liegt gegenüber der markierten Parkfläche.',
    image: {
      src: '/images/parken.png',
      alt: 'Parkhinweis für LiftLounge mit markierter Parkfläche und Eingang am Schafanger',
      width: 1126,
      height: 1081,
    },
  },
  {
    question: 'Bietest du auch Brow Lifting und Schulungen an?',
    answer:
      'Ja, Brow Lifting ist als Einzelbehandlung oder als Kombi mit Lash Lifting möglich. Zusätzlich gibt es eine Augenbrauenkorrektur mit Heißwachs. Schulungen werden nach persönlicher Anfrage angeboten.',
  },
];

function numericPrice(price) {
  const match = price.match(/\d+/);
  return match ? match[0] : undefined;
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'BeautySalon'],
  name: 'LiftLounge',
  founder: 'Lea Kirfel',
  telephone: '+491756529911',
  email: 'info@liftlounge.de',
  priceRange: '15-120 EUR',
  image: '/images/model-1.jpg',
  description:
    'LiftLounge bietet Lash Lifting und Brow Lifting am Standort Barsinghausen bei Hannover.',
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
  makesOffer: pricingPackages.map((item) => {
    const price = numericPrice(item.price);

    return {
      '@type': 'Offer',
      name: item.name,
      category: 'Kosmetische Behandlung',
      ...(price ? { priceCurrency: 'EUR', price } : {}),
      availability: 'https://schema.org/InStock',
    };
  }),
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lash und Brow Lifting Hannover',
  description:
    'Kosmetische Lash Lifting und Brow Lifting Behandlung bei LiftLounge am Standort Barsinghausen bei Hannover.',
  provider: {
    '@type': 'BeautySalon',
    name: 'LiftLounge',
    telephone: '+491756529911',
  },
  areaServed: 'Hannover, Barsinghausen und Region Hannover',
  serviceType: [
    'Lash Lifting',
    'Brow Lifting',
    'Lash & Brow Lifting',
    'Augenbrauenkorrektur mit Heißwachs',
  ],
};
