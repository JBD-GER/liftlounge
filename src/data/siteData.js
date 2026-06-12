import {
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
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
  'Wimpernlifting',
  'Standort Barsinghausen',
];

export const benefits = [
  {
    title: 'Natürlicher Schwung',
    text: 'Deine eigenen Wimpern werden sichtbar angehoben, gefärbt und gepflegt.',
    icon: Wand2,
  },
  {
    title: 'Ohne Extensions',
    text: 'Deine Naturwimpern werden betont, ohne künstliche Wimpern anzubringen.',
    icon: CheckCircle2,
  },
  {
    title: 'Färben & Pflege',
    text: 'Lash Lifting wird mit Färben und pflegender Keratin-Komponente angeboten.',
    icon: Star,
  },
  {
    title: 'Studio in Barsinghausen',
    text: 'Ruhiger Standort bei Hannover: Am Schafanger 12 in 30890 Barsinghausen.',
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
      'Für sichtbar geliftete, dunklere und gepflegte Naturwimpern ohne Extensions. Ideal, wenn du dir einen wachen Blick und einen Mascara-Look ohne tägliches Tuschen wünschst.',
    features: ['Naturwimpern-Lifting', 'inkl. Färben', 'inkl. Keratin-Pflege', 'Effekt bis zu 6-8 Wochen'],
  },
];

export const audience = [
  'Du möchtest einen offenen Blick ohne Wimpernextensions',
  'Deine Naturwimpern sollen geschwungener und dunkler wirken',
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
    text: 'Vor Ort werden Wunsch, Naturwimpern und mögliche Hinweise besprochen.',
    icon: HeartHandshake,
  },
  {
    title: 'Vorbereitung',
    text: 'Die Wimpern werden gereinigt, vorbereitet und typgerecht positioniert.',
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
    name: 'Lash Lifting',
    eyebrow: 'Wimpern',
    price: '65 €',
    description:
      'Für natürlich geschwungene, gefärbte Wimpern mit gepflegtem Mascara-Effekt.',
    features: ['inkl. Färben', 'inkl. Keratin-Pflege', 'ca. 60-90 Minuten', 'ohne künstliche Wimpern'],
  },
];

export const trainingOffers = [
  {
    name: 'Lash Lifting Schulung',
    price: '649 €',
    text: 'Ergänzendes Schulungsangebot nach persönlicher Anfrage und Terminabstimmung.',
  },
];

export const gallery = [
  {
    src: '/images/model-1.jpg',
    alt: 'Kosmetikerin führt eine Lash Lifting Behandlung in einem hellen Studio aus',
    title: 'Behandlung',
    text: 'Ruhig, präzise und typgerecht.',
  },
  {
    src: '/images/model-2.jpg',
    alt: 'Natürliches Lash Lifting Ergebnis mit gepflegtem Augenaufschlag',
    title: 'Lash Lifting',
    text: 'Natürlich geliftete Wimpern.',
  },
];

export const whyLiftLounge = [
  'Fokus auf natürliche Ergebnisse statt überzeichnetem Look',
  'Lash Lifting als klare Kernleistung',
  'Ruhige Behandlungssituation mit persönlicher Abstimmung',
  'Färben und Pflege werden passend kombiniert',
  'Schulungen bleiben bewusst ergänzend und werden separat angefragt',
];

export const faqs = [
  {
    question: 'Was ist ein Lash Lifting?',
    answer:
      'Beim Lash Lifting werden die eigenen Naturwimpern vom Ansatz aus sichtbar angehoben, gefärbt und gepflegt. Es werden keine künstlichen Wimpern aufgeklebt.',
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
    question: 'Bietest du auch Schulungen an?',
    answer:
      'Ja, Lash Lifting Schulungen werden ergänzend und nach persönlicher Anfrage angeboten. Der Hauptfokus der Website liegt jedoch auf der kosmetischen Behandlung.',
  },
];

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'BeautySalon'],
  name: 'LiftLounge',
  founder: 'Lea Kirfel',
  telephone: '+491756529911',
  priceRange: '65 EUR',
  image: '/images/model-1.jpg',
  description:
    'LiftLounge bietet Lash Lifting Hannover am Standort Barsinghausen.',
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
    'Kosmetische Lash Lifting Behandlung bei LiftLounge am Standort Barsinghausen bei Hannover.',
  provider: {
    '@type': 'BeautySalon',
    name: 'LiftLounge',
    telephone: '+491756529911',
  },
  areaServed: 'Hannover, Barsinghausen und Region Hannover',
  serviceType: ['Lash Lifting', 'Wimpernlifting'],
};
