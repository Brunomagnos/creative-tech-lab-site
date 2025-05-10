
import { ArrowRight, Video, Wand2, Film, Headphones, Clapperboard, Palette } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import MetaTags from "../components/MetaTags";

const PostProduction = () => {
  const services = [
    {
      icon: <Clapperboard className="h-10 w-10 text-mk-orange" />,
      title: "Edição Profissional",
      description: "Montagem e edição de alto nível para filmes institucionais, vídeos corporativos e conteúdo para redes sociais."
    },
    {
      icon: <Headphones className="h-10 w-10 text-mk-orange" />,
      title: "Design de Áudio",
      description: "Seleção musical, sound design, mixagem e masterização para uma experiência sonora imersiva."
    },
    {
      icon: <Palette className="h-10 w-10 text-mk-orange" />,
      title: "Correção de Cor",
      description: "Color grading profissional para garantir consistência visual e identidade cinematográfica ao seu projeto."
    },
    {
      icon: <Video className="h-10 w-10 text-mk-orange" />,
      title: "Motion Graphics",
      description: "Animações, títulos, infográficos e recursos visuais dinâmicos para enriquecer suas produções."
    },
    {
      icon: <Wand2 className="h-10 w-10 text-mk-orange" />,
      title: "VFX & Composição",
      description: "Efeitos visuais e composição digital para criar cenas impossíveis e corrigir problemas de produção."
    },
    {
      icon: <Film className="h-10 w-10 text-mk-orange" />,
      title: "Finalização & Entrega",
      description: "Preparação de arquivos para diferentes plataformas, desde cinema e TV até redes sociais e streaming."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Pós-Produção | MK Creative Lab"
        description="Serviços profissionais de pós-produção: edição, color grading, motion graphics e design de áudio para projetos audiovisuais de alta qualidade."
        keywords="pós-produção, edição de vídeo, color grading, motion graphics, design de áudio"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-mk-black">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source 
              src="https://vod-progressive.akamaized.net/exp=1714059668~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3531%2F14%2F368950170%2F1538457308.mp4~hmac=05b9e49745d5d0242be6544b5492d96a377fe56bbbbc5c9ceb7aa43bd71515cb/vimeo-prod-skyfire-std-us/01/3531/14/368950170/1538457308.mp4" 
              type="video/mp4" 
            />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white animate-fade-in">
              Serviços de <span className="text-mk-orange">Pós-Produção</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Transformamos material bruto em obras-primas através de técnicas avançadas de 
              edição, color grading, motion graphics e design de áudio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <a href="#contato" className="btn-primary flex items-center justify-center gap-2">
                Solicite um Orçamento
                <ArrowRight size={20} />
              </a>
              <a href="#servicos-pos" className="px-6 py-3 border border-white text-white rounded font-medium hover:bg-white hover:text-mk-black transition-colors inline-flex items-center justify-center gap-2 bg-black/30">
                Conheça Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos-pos" className="section-container bg-white">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">Nossos Serviços de <span className="text-mk-orange">Pós-Produção</span></h2>
            <p className="section-subtitle text-gray-700">
              Oferecemos soluções completas para finalizar seu projeto audiovisual com excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 animate-fade-in hover:shadow-xl transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-container bg-mk-gray-light">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">Nosso <span className="text-mk-orange">Portfólio</span></h2>
            <p className="section-subtitle text-gray-700">
              Confira alguns dos projetos de pós-produção que realizamos recentemente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-fade-in">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#contato" className="btn-primary inline-flex items-center gap-2">
              Solicite um Orçamento
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-mk-black to-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para elevar seus vídeos ao próximo nível?</h2>
            <p className="text-xl text-white mb-8">
              Entre em contato conosco hoje mesmo para discutir seu próximo projeto de pós-produção.
            </p>
            <a href="#contato" className="btn-primary inline-flex items-center gap-2">
              Fale Conosco
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PostProduction;
