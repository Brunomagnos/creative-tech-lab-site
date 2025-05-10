
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Para Casamentos e Eventos",
      description: "Memorialize seus momentos especiais com qualidade cinematográfica",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
      features: ["Filmagem em 4K", "Drone para tomadas aéreas", "Edição premium", "Highlight para redes sociais"]
    },
    {
      id: 2,
      title: "Para Empresas e Lojas",
      description: "Aumente suas vendas e eficiência com nossas soluções integradas",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=600",
      features: ["Marketing de performance", "Automação de processos", "Conteúdo para redes", "Análise de dados"]
    },
    {
      id: 3,
      title: "Para Artistas e Criadores",
      description: "Desenvolva seu portfólio visual com qualidade profissional",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=600",
      features: ["Clipes musicais", "Books fotográficos", "Material promocional", "Identidade visual"]
    },
    {
      id: 4,
      title: "Para Imobiliárias",
      description: "Destaque seus imóveis com produções audiovisuais exclusivas",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
      features: ["Tour virtual 360°", "Vídeos cinematográficos", "Fotos profissionais", "Drone para vistas aéreas"]
    },
  ];

  return (
    <section id="solucoes" className="section-container bg-gradient-to-b from-mk-black to-black">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-white">Soluções <span className="text-mk-orange">Para Você</span></h2>
          <p className="section-subtitle text-white">
            Serviços personalizados para atender as necessidades específicas do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.id} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all animate-fade-in bg-black/80 text-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-white/90 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-mk-orange flex-shrink-0"></div>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contato" 
                  className="inline-flex items-center text-mk-orange font-medium hover:underline"
                >
                  Solicitar orçamento
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
