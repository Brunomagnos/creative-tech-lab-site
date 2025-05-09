
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
import Logo3D from "../components/Logo3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <MetaTags />
      <Header />
      <Hero />
      <div className="container py-16">
        <h2 className="text-center text-3xl font-bold mb-8 text-black dark:text-white">Nossa Marca</h2>
        <Logo3D className="w-full max-w-md mx-auto my-8" />
        <p className="text-center text-lg text-black dark:text-white max-w-2xl mx-auto">
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
