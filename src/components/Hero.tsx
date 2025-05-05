
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-mk-black">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Onde <span className="text-mk-orange">Criatividade</span> e <span className="text-mk-orange">Tecnologia</span> Geram Resultados
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl">
              Somos um laboratório criativo que integra arte e tecnologia para entregar soluções de alto impacto para o seu negócio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="btn-primary flex items-center justify-center gap-2">
                Solicite seu Orçamento
                <ArrowRight size={20} />
              </a>
              <a href="#servicos" className="px-6 py-3 border border-white text-white rounded font-medium hover:bg-white hover:text-mk-black transition-colors inline-flex items-center justify-center gap-2 bg-black/30">
                Conheça Nossos Serviços
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-video rounded-lg overflow-hidden bg-mk-black shadow-2xl backdrop-blur-sm bg-black/20">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=450"
                alt="MK Creative Lab - Criatividade e Tecnologia"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
                <span className="text-white text-6xl font-bold opacity-90">MK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
