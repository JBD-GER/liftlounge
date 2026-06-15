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
  'Braulifting',
  'Wimpernlifting',
  'Schulungen',
];

export const benefits = [
  {
    title: 'Wimpern & Brauen',
    text: 'Lash Lifting und Braulifting mit natürlichem Finish.',
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
    price: 'ab 65 €',
    duration: 'ca. 60-90 Min.',
    image: '/images/model-2.jpg',
    alt: 'Natürliches Lash Lifting Ergebnis mit gepflegten Wimpern',
    description:
      'Für geliftete, dunklere Naturwimpern ohne Extensions. Frisch, sauber und alltagstauglich.',
    features: ['inkl. Färben', 'inkl. Pflegefinish', 'ohne künstliche Wimpern'],
  },
  {
    name: 'Braulifting',
    eyebrow: 'Augenbrauen',
    price: 'auf Anfrage',
    duration: 'ca. 45-60 Min.',
    image: '/images/model-3.jpg',
    alt: 'Natürlich gepflegte Augenpartie für Brow Lifting und Braulifting',
    description:
      'Für definierte, voller wirkende Brauen mit sauberem Finish.',
    features: ['Form wird abgestimmt', 'gepflegtes Styling', 'natürlicher Look'],
  },
];

export const audience = [
  'Du möchtest einen offenen Blick ohne künstlichen Look.',
  'Wimpern oder Brauen sollen gepflegter und definierter wirken.',
  'Du suchst Lash Lifting oder Braulifting bei Hannover.',
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
    text: 'Wimpern oder Brauen werden gereinigt und präzise vorbereitet.',
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
    name: 'Braulifting',
    eyebrow: 'Augenbrauen',
    price: 'auf Anfrage',
    description:
      'Definierte Brauen mit sauberer Form und natürlichem Ausdruck.',
    features: ['typgerechte Form', 'gepflegtes Finish', 'Termin nach Absprache'],
  },
];

export const trainingOffers = [
  {
    name: 'Lash Lifting Schulung',
    price: '649 €',
    text: 'Praxisnah, persönlich und nach Terminabstimmung.',
  },
  {
    name: 'Braulifting Schulung',
    price: 'auf Anfrage',
    text: 'Als eigenständige oder ergänzende Schulung möglich.',
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

export const whyLiftLounge = [
  'Klarer Fokus auf Lash Lifting und Braulifting statt überladener Beauty-Menüs.',
  'Persönliche Abstimmung, damit Form und Ergebnis zu dir passen.',
  'Ruhige Studioatmosphäre mit sauberem, gepflegtem Finish.',
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
    question: 'Bietest du auch Braulifting und Schulungen an?',
    answer:
      'Ja, Braulifting sowie Lash Lifting und Braulifting Schulungen werden nach persönlicher Anfrage angeboten.',
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
  priceRange: '65 EUR',
  image: '/images/model-1.jpg',
  description:
    'LiftLounge bietet Lash Lifting und Braulifting am Standort Barsinghausen bei Hannover.',
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
    'Kosmetische Lash Lifting und Braulifting Behandlung bei LiftLounge am Standort Barsinghausen bei Hannover.',
  provider: {
    '@type': 'BeautySalon',
    name: 'LiftLounge',
    telephone: '+491756529911',
  },
  areaServed: 'Hannover, Barsinghausen und Region Hannover',
  serviceType: ['Lash Lifting', 'Wimpernlifting', 'Brow Lifting', 'Braulifting'],
};
