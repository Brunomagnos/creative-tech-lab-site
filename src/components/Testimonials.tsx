
import { Star, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      company: "Silva Imóveis",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      text: "A MK Creative Lab transformou completamente nossa presença online. Os vídeos imobiliários que produziram geraram um aumento de 40% nas vendas em apenas três meses.",
      rating: 5,
      position: "Diretor de Marketing"
    },
    {
      id: 2,
      name: "Fernanda Oliveira",
      company: "Oliveira Eventos",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      text: "A cobertura do nosso evento corporativo superou todas as expectativas. O material produzido foi fundamental para nossa estratégia de marketing pós-evento.",
      rating: 5,
      position: "Coordenadora de Eventos"
    },
    {
      id: 3,
      name: "Roberto Mendes",
      company: "Tech Inovação",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      text: "O sistema de automação implementado pela MK aumentou nossa eficiência operacional em 60% e reduziu custos significativamente. Trabalho excepcional!",
      rating: 5,
      position: "CEO"
    }
  ];

  return (
    <section id="depoimentos" className="section-container bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">O Que Nossos <span className="text-mk-orange">Clientes Dizem</span></h2>
          <p className="section-subtitle">
            Histórias reais de sucesso e transformação com a MK Creative Lab
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 animate-fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-mk-orange rounded-full flex items-center justify-center shadow-md text-white">
                <User size={24} />
              </div>
              
              <div className="flex items-center mb-4 mt-6">
                <div className="flex flex-col">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < testimonial.rating ? "#FF5A00" : "none"} 
                        color={i < testimonial.rating ? "#FF5A00" : "#D1D5DB"} 
                      />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
