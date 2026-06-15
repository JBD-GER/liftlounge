import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import Audience from './components/Audience.jsx';
import BenefitsBar from './components/BenefitsBar.jsx';
import ContactForm from './components/ContactForm.jsx';
import CookieConsent, {
  cookieConsentStorageKey,
  cookieConsentUpdatedEvent,
} from './components/CookieConsent.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import GuideIndex from './components/GuideIndex.jsx';
import GuidePost from './components/GuidePost.jsx';
import GuideTeaser from './components/GuideTeaser.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import LegalPage from './components/LegalPage.jsx';
import Location from './components/Location.jsx';
import MobileCTA from './components/MobileCTA.jsx';
import NotFound from './components/NotFound.jsx';
import Pricing from './components/Pricing.jsx';
import Process from './components/Process.jsx';
import SEO from './components/SEO.jsx';
import Services from './components/Services.jsx';
import TrainingIntro from './components/TrainingIntro.jsx';
import TrainingSection from './components/TrainingSection.jsx';
import { getGuidePost } from './data/guideData.js';
import { faqs, localBusinessSchema, serviceSchema } from './data/siteData.js';

const legalPaths = ['/impressum', '/datenschutz', '/agb'];

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return pathname;
}

function readAnalyticsConsent() {
  let stored;

  try {
    stored = window.localStorage.getItem(cookieConsentStorageKey);
  } catch {
    return false;
  }

  if (!stored) return false;

  try {
    return Boolean(JSON.parse(stored).analytics);
  } catch {
    return false;
  }
}

function useAnalyticsConsent() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(readAnalyticsConsent);

  useEffect(() => {
    function onConsentUpdated(event) {
      setAnalyticsEnabled(Boolean(event.detail?.analytics));
    }

    window.addEventListener(cookieConsentUpdatedEvent, onConsentUpdated);
    return () => window.removeEventListener(cookieConsentUpdatedEvent, onConsentUpdated);
  }, []);

  return analyticsEnabled;
}

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

function HomePage() {
  return (
    <>
      <SEO
        title="LiftLounge | Lash Lifting & Brow Lifting Hannover"
        description="Lash Lifting und Brow Lifting bei LiftLounge: natürlich gepflegte Wimpern und Augenbrauen am Standort Barsinghausen bei Hannover."
        path="/"
        schema={[localBusinessSchema, serviceSchema, faqSchema()]}
      />
      <main>
        <Hero />
        <BenefitsBar />
        <TrainingIntro />
        <Services />
        <Audience />
        <Process />
        <Pricing />
        <Gallery />
        <TrainingSection />
        <Location />
        <GuideTeaser />
        <ContactForm />
        <FAQ />
      </main>
      <MobileCTA />
    </>
  );
}

export default function App() {
  const pathname = usePathname();
  const analyticsEnabled = useAnalyticsConsent();
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const isLegalPage = legalPaths.includes(normalizedPath);
  const guideMatch = normalizedPath.match(/^\/ratgeber\/(.+)$/);
  const guidePost = guideMatch ? getGuidePost(guideMatch[1]) : null;
  const isHome = normalizedPath === '/';

  let page = <NotFound />;

  if (isHome) {
    page = <HomePage />;
  } else if (isLegalPage) {
    page = <LegalPage path={normalizedPath} />;
  } else if (normalizedPath === '/ratgeber') {
    page = <GuideIndex />;
  } else if (guidePost) {
    page = <GuidePost post={guidePost} />;
  }

  return (
    <>
      <Header isHome={isHome} />
      {page}
      <Footer />
      <CookieConsent />
      {analyticsEnabled && <Analytics />}
    </>
  );
}
