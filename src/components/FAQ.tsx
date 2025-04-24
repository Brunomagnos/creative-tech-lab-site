
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Quais tipos de projetos audiovisuais vocês realizam?",
      answer: "Realizamos uma ampla gama de projetos audiovisuais, incluindo vídeos institucionais, clipes musicais, cobertura de casamentos e eventos, vídeos para imobiliárias, ensaios fotográficos corporativos e de produtos, entre outros. Nossa equipe utiliza equipamentos de última geração para garantir a máxima qualidade em cada produção."
    },
    {
      question: "Como funciona o processo de automação de marketing e vendas?",
      answer: "Nosso processo de automação começa com uma análise detalhada dos seus processos atuais para identificar gargalos e oportunidades. Em seguida, desenvolvemos e implementamos soluções personalizadas que integram seus sistemas, automatizam tarefas repetitivas e otimizam seus fluxos de trabalho, permitindo que sua equipe foque em atividades estratégicas e geradoras de valor."
    },
    {
      question: "Quais plataformas de tráfego pago vocês gerenciam?",
      answer: "Gerenciamos campanhas nas principais plataformas de mídia paga, incluindo Google Ads, Meta Ads (Facebook e Instagram), LinkedIn Ads, TikTok Ads, e YouTube. Nossa abordagem estratégica garante a otimização do seu investimento para maximizar o retorno (ROI) e alcançar seus objetivos de negócio."
    },
    {
      question: "Qual é o prazo médio para entrega de uma produção audiovisual?",
      answer: "O prazo varia conforme a complexidade do projeto, mas geralmente entregamos vídeos corporativos em 2-3 semanas após a filmagem, enquanto projetos mais simples podem ser concluídos em 7-10 dias. Para projetos especiais, como casamentos e eventos, estabelecemos prazos personalizados. Em todos os casos, garantimos qualidade e atenção aos detalhes sem comprometer os prazos acordados."
    },
    {
      question: "Como funciona o processo de impressão 3D e quais materiais vocês utilizam?",
      answer: "Nosso processo de impressão 3D envolve o desenvolvimento do conceito, modelagem digital, preparação do arquivo para impressão, e finalmente a impressão e acabamento. Trabalhamos com diversos materiais como PLA, PETG, ABS, TPU (flexível), e resinas, cada um com propriedades específicas. A escolha do material dependerá da finalidade do objeto, seja para protótipos funcionais, peças decorativas ou produtos finais."
    },
    {
      question: "Como é feito o orçamento para os projetos?",
      answer: "Desenvolvemos orçamentos personalizados baseados nas necessidades específicas de cada projeto. Consideramos fatores como escopo, prazos, complexidade técnica e recursos necessários. Após uma consulta inicial para entender suas necessidades, apresentamos uma proposta detalhada e transparente sem compromisso. Valorizamos orçamentos precisos para evitar surpresas ao longo do projeto."
    }
  ];

  return (
    <section id="faq" className="section-container bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Perguntas <span className="text-mk-orange">Frequentes</span></h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="flex justify-between items-center w-full py-5 text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-mk-orange transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="pb-5 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Não encontrou o que procurava? Entre em contato conosco.
          </p>
          <a href="#contato" className="btn-primary">
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
