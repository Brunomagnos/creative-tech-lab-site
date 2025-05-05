
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Todos" },
    { id: "audiovisual", label: "Audiovisual" },
    { id: "marketing", label: "Marketing" },
    { id: "automacao", label: "Automação" },
    { id: "impressao3d", label: "Impressão 3D" }
  ];

  // Portfolio items with optimized images
  const portfolioItems = [
    {
      id: 1,
      title: "Campanha Imobiliária Premium",
      category: "audiovisual",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600&h=400",
      client: "Imobiliária Curitiba",
      description: "Vídeos e fotos de alta qualidade para imóveis de luxo."
    },
    {
      id: 2,
      title: "Estratégia de Performance Digital",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400", 
      client: "E-commerce Paranaense",
      description: "Aumento de 150% nas conversões com campanhas otimizadas."
    },
    {
      id: 3,
      title: "Sistema de Automação para E-commerce",
      category: "automacao",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600&h=400",
      client: "Loja Virtual Nacional",
      description: "Automatização completa do fluxo de vendas e marketing."
    },
    {
      id: 4,
      title: "Prototipagem 3D para Startup",
      category: "impressao3d",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600&h=400",
      client: "Tech Startup",
      description: "Protótipos funcionais que aceleraram o desenvolvimento."
    },
    {
      id: 5,
      title: "Cobertura de Evento Corporativo",
      category: "audiovisual",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600&h=400",
      client: "Multinacional",
      description: "Filmagem profissional de evento com 500 participantes."
    },
    {
      id: 6,
      title: "Campanha Integrada de Marketing",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=600&h=400",
      client: "Rede de Varejo",
      description: "Estratégia omnichannel com ROI de 380%."
    }
  ];

  // Featured projects for carousel
  const featuredProjects = [
    {
      id: 101,
      title: "Filmagem Aérea - Propriedade de Luxo",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200&h=600",
      client: "Construtora Paraná",
      category: "audiovisual"
    },
    {
      id: 102,
      title: "Transformação Digital - Indústria",
      image: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?auto=format&fit=crop&q=80&w=1200&h=600",
      client: "Indústria de Transformação",
      category: "automacao"
    },
    {
      id: 103,
      title: "Clipe Musical - Banda Local",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1200&h=600",
      client: "Banda Curitibana",
      category: "audiovisual"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-container bg-mk-gray-light">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Nosso <span className="text-mk-orange">Portfólio</span></h2>
          <p className="section-subtitle">
            Conheça o impacto do nosso trabalho através de projetos selecionados
          </p>
        </div>

        {/* Featured Projects Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Projetos em Destaque</h3>
          <Carousel className="w-full">
            <CarouselContent>
              {featuredProjects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-2/3 lg:basis-1/2">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                      <div className="text-white">
                        <h4 className="text-xl md:text-2xl font-bold">{project.title}</h4>
                        <p className="mt-2 text-white/80">{project.client}</p>
                        <a 
                          href="#" 
                          className="mt-4 inline-flex items-center bg-mk-orange text-white px-4 py-2 rounded"
                        >
                          Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-1" />
              <CarouselNext className="right-1" />
            </div>
          </Carousel>
        </div>
          
        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-mk-orange text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] bg-mk-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-white/80 text-sm mt-1">{item.client}</p>
                <p className="text-white/80 text-sm mt-2">
                  {item.description}
                </p>
                <a 
                  href="#" 
                  className="mt-4 bg-mk-orange text-white px-4 py-2 rounded text-sm font-medium inline-block self-start opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 italic mb-6">
            [Em Breve: Mais Projetos Recentes]
          </p>
          <a href="#contato" className="btn-primary">
            Quero um Projeto Como Esses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
