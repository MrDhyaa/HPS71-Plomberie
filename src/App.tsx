import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Forfaits from './components/Forfaits';
import EmergencyCTA from './components/EmergencyCTA';
import Zones from './components/Zones';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import QuoteSection from './components/QuoteSection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Forfaits />
        <EmergencyCTA />
        <Zones />
        <Testimonials />
        <Gallery />
        <QuoteSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <WhatsAppFloat />
    </>
  );
}
