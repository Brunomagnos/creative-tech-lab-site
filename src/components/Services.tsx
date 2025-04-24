
import { Film, BarChart, Settings, Cube } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Film className="h-10 w-10 text-mk-orange" />,
      title: "Produção Audiovisual",
      description: "Criamos filmes e fotografias que contam sua história de forma impactante.",
      items: [
        "Filmmaking para Eventos",
        "Vídeos Institucionais",
        "Cobertura de Casamentos",
        "Ensaios Fotográficos",
        "Vídeos para Imobiliárias",
        "Clipes Musicais"
      ]
    },
    {
      id: 2,
      icon: <BarChart className="h-10 w-10 text-mk-orange" />,
      title: "Marketing & Performance",
      description: "Estratégias focadas em resultados que impulsionam seu negócio.",
      items: [
        "Gestão de Tráfego Pago",
        "Google Ads",
        "Meta Ads",
        "Marketing Digital",
        "Análise de Desempenho",
        "Otimização de Campanhas"
      ]
    },
    {
      id: 3,
      icon: <Settings className="h-10 w-10 text-mk-orange" />,
      title: "Automação",
      description: "Soluções que aumentam a eficiência do seu negócio.",
      items: [
        "Automação de Marketing",
        "Automação de Vendas",
        "Otimização de Processos",
        "Integração de Sistemas",
        "Implantação de CRM",
        "Fluxos de Trabalho"
      ]
    },
    {
      id: 4,
      icon: <Cube className="h-10 w-10 text-mk-orange" />,
      title: "Impressão 3D",
      description: "Transforme ideias em objetos reais com nossa tecnologia de ponta.",
      items: [
        "Prototipagem Rápida",
        "Peças Personalizadas",
        "Modelos Funcionais",
        "Brindes Corporativos",
        "Maquetes Arquitetônicas",
        "Peças Decorativas"
      ]
    }
  ];

  return (
    <section id="servicos" className="section-container bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Nossos <span className="text-mk-orange">Pilares</span></h2>
          <p className="section-subtitle">
            Combinamos arte e tecnologia para criar soluções completas e integradas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mk-orange"></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contato" 
                className="mt-6 inline-flex items-center text-mk-orange font-medium hover:underline"
              >
                Saiba mais
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contato" className="btn-primary">
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
