import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KeyValue from "./components/KeyValue";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import VeneerJourney from "./components/VeneerJourney";
import TrustBuilders from "./components/TrustBuilders";
import FinalCTA from "./components/FinalCTA";
import ThankYouPage from "./components/ThankYouPage";
import BeforeAfter from "./components/BeforeAfter";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <KeyValue />
      <TrustBuilders />
      <VeneerJourney />
      <BeforeAfter />
      {/* <Services /> */}
      {/* <WhyChoose /> */}
      {/* <Testimonials /> */}
      <FAQSection />
      {/* <FinalCTA /> */}
      <CTASection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;
