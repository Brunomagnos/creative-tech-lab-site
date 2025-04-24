
const About = () => {
  return (
    <section id="sobre" className="section-container bg-mk-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="section-title">Sobre a <span className="text-mk-orange">MK Creative Lab</span></h2>
            
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
                <p className="text-gray-300">
                  Transformar ideias em resultados visíveis e mensuráveis através da perfeita integração entre arte e tecnologia.
                </p>
              </div>
              
              <div className="border-l-4 border-mk-orange pl-4">
                <h3 className="text-xl font-bold">Visão</h3>
                <p className="text-gray-300">
                  Ser referência em soluções criativas e tecnológicas que realmente impulsionam negócios e causam impacto positivo.
                </p>
              </div>
              
              <div className="border-l-4 border-mk-orange pl-4">
                <h3 className="text-xl font-bold">Valores</h3>
                <p className="text-gray-300">
                  Excelência, inovação, compromisso com resultados, transparência e aprendizado contínuo.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative h-full animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square bg-mk-gray-dark rounded-lg overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                alt="MK Creative Lab Team"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-3/5 aspect-video bg-mk-orange rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80" 
                alt="MK Creative Technology"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
