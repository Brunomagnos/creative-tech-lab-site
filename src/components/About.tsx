
import { AspectRatio } from "./ui/aspect-ratio";

const About = () => {
  return (
    <section id="sobre" className="section-container bg-mk-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="section-title">
              <span className="text-white font-bold">Sobre a</span> <span className="text-mk-orange">MK Creative Lab</span>
            </h2>
            
            <p className="text-lg mb-6">
              Somos um laboratório criativo que integra arte e tecnologia para entregar soluções de alto impacto. 
              Nossa abordagem única combina excelência criativa com profundo conhecimento técnico e estratégico.
            </p>
            
            <p className="text-lg mb-6">
              Utilizamos um arsenal tecnológico de ponta, incluindo câmeras mirrorless de alta resolução, 
              drones avançados para imagens aéreas cinematográficas, estabilizadores gimbal profissionais 
              para movimentos fluidos, câmeras 360º para experiências imersivas e as últimas gerações de 
              equipamentos digitais. Nossas lentes prime oferecem nitidez e estética excepcionais. 
            </p>

            <p className="text-lg mb-8">
              Localizada em Curitiba, Paraná, a MK Creative Lab nasceu da paixão por unir criatividade 
              e tecnologia para gerar resultados verdadeiramente transformadores.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-mk-orange pl-4">
                <h3 className="text-xl font-bold">Missão</h3>
                <p className="text-white/90">
                  Transformar ideias em resultados visíveis e mensuráveis através da perfeita integração entre arte e tecnologia.
                </p>
              </div>
              
              <div className="border-l-4 border-mk-orange pl-4 mt-6">
                <h3 className="text-xl font-bold">Visão</h3>
                <p className="text-white/90">
                  Ser referência em soluções criativas e tecnológicas que realmente impulsionam negócios e causam impacto positivo.
                </p>
              </div>
              
              <div className="border-l-4 border-mk-orange pl-4 mt-6">
                <h3 className="text-xl font-bold">Valores</h3>
                <p className="text-white/90">
                  Excelência, inovação, compromisso com resultados, transparência e aprendizado contínuo.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative h-full animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <AspectRatio ratio={16/9} className="bg-mk-gray-dark rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" 
                    alt="Equipamento de tecnologia MK Creative Lab"
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              
              <div>
                <AspectRatio ratio={1/1} className="bg-mk-gray-dark rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&q=80&w=400" 
                    alt="Filmagem profissional"
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              
              <div>
                <AspectRatio ratio={1/1} className="bg-mk-orange rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400" 
                    alt="Tecnologia de impressão 3D"
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                </AspectRatio>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-mk-orange rounded-full flex items-center justify-center shadow-lg z-10">
              <span className="text-white text-xl font-bold">MK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
