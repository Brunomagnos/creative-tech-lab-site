
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Todos" },
    { id: "audiovisual", label: "Audiovisual" },
    { id: "marketing", label: "Marketing" },
    { id: "automacao", label: "Automação" },
    { id: "impressao3d", label: "Impressão 3D" }
  ];

  // Placeholder projects
  const portfolioItems = [
    {
      id: 1,
      title: "Campanha Imobiliária Premium",
      category: "audiovisual",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Estratégia de Performance Digital",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Sistema de Automação para E-commerce",
      category: "automacao",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Prototipagem 3D para Startup",
      category: "impressao3d",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80" 
    },
    {
      id: 5,
      title: "Cobertura de Evento Corporativo",
      category: "audiovisual",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      title: "Campanha Integrada de Marketing",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-container bg-mk-gray-light">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Nosso <span className="text-mk-orange">Portfólio</span></h2>
          <p className="section-subtitle">
            Conheça o impacto do nosso trabalho através de projetos selecionados
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg animate-fade-in"
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
                <p className="text-white/80 text-sm mt-2">
                  {filters.find(f => f.id === item.category)?.label}
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
