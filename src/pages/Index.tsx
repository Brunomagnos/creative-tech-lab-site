
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
    <div className="min-h-screen bg-background text-foreground">
      <MetaTags />
      <Header />
      <Hero />
      <div className="container py-16 bg-secondary">
        <h2 className="text-center text-3xl font-bold mb-8">Nossa Marca</h2>
        <p className="text-center text-lg max-w-2xl mx-auto">
          Nossa marca representa a fusão entre criatividade e tecnologia. 
          Como uma impressora 3D que dá forma às ideias mais inovadoras, 
          transformamos conceitos em realidade para o seu negócio.
        </p>
      </div>
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
