
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-mk-gray-light">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Onde <span className="text-mk-orange">Criatividade</span> e <span className="text-mk-orange">Tecnologia</span> Geram Resultados
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
              Somos um laboratório criativo que integra arte e tecnologia para entregar soluções de alto impacto para o seu negócio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="btn-primary flex items-center justify-center gap-2">
                Solicite seu Orçamento
                <ArrowRight size={20} />
              </a>
              <a href="#servicos" className="px-6 py-3 border border-mk-black text-mk-black rounded font-medium hover:bg-mk-black hover:text-white transition-colors inline-flex items-center justify-center gap-2">
                Conheça Nossos Serviços
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-video rounded-lg overflow-hidden bg-mk-black shadow-2xl">
              {/* Placeholder for hero video/image */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
                  alt="MK Creative Lab - Criatividade e Tecnologia"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-90">MK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
