import { useEffect, useState } from 'react';
import Audience from './components/Audience.jsx';
import BenefitsBar from './components/BenefitsBar.jsx';
import ContactForm from './components/ContactForm.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import LegalPage from './components/LegalPage.jsx';
import Location from './components/Location.jsx';
import MobileCTA from './components/MobileCTA.jsx';
import Pricing from './components/Pricing.jsx';
import Process from './components/Process.jsx';
import SEO from './components/SEO.jsx';
import TrainingIntro from './components/TrainingIntro.jsx';
import WhyLiftLounge from './components/WhyLiftLounge.jsx';
import { courseSchema, faqs, localBusinessSchema } from './data/siteData.js';

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
        title="LiftLounge | Lashlifting Schulung Barsinghausen & Hannover"
        description="Hochwertige 1:1 Wimpernschulung in Barsinghausen bei Hannover. Lashlifting lernen mit Praxis am Modell, Zertifikat und persönlicher Betreuung."
        path="/"
        schema={[localBusinessSchema, courseSchema, faqSchema()]}
      />
      <main>
        <Hero />
        <BenefitsBar />
        <TrainingIntro />
        <Audience />
        <Process />
        <Pricing />
        <Gallery />
        <WhyLiftLounge />
        <Location />
        <ContactForm />
        <FAQ />
      </main>
      <MobileCTA />
    </>
  );
}

export default function App() {
  const pathname = usePathname();
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const isLegalPage = legalPaths.includes(normalizedPath);

  return (
    <>
      <Header isHome={!isLegalPage} />
      {isLegalPage ? <LegalPage path={normalizedPath} /> : <HomePage />}
      <Footer />
      <CookieConsent />
    </>
  );
}
