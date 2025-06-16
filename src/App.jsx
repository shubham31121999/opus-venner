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
import FloatingButtons from "./components/FloatingButtons";
import FormSection from "./components/FormSection";

import TestimonialCarousel from "./components/TestimonialCarousal";
import Gallery from "./components/Gallery";
function HomePage() {
  return (
    <>
     <FloatingButtons />
      <Navbar />
      <Banner />
      <Hero />
      <KeyValue />
      <BeforeAfter />
      <TrustBuilders />
      <VeneerJourney />
      <FormSection />
      {/* <Services /> */}
      {/* <WhyChoose /> */}
      {/* <Testimonials /> */}
      <FAQSection />
      < Gallery />
      <TestimonialCarousel />
      {/* <FinalCTA /> */}
      < CTASection />
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
