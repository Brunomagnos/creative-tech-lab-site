
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Solutions from "../components/Solutions";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import MetaTags from "../components/MetaTags";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags />
      <Header />
      <Hero />
      <Services />
      <Solutions />
      <Portfolio />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
