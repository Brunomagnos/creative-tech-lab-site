
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import AppointmentScheduler from "./AppointmentScheduler";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, send this data to a backend service
      console.log(formData);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const openScheduler = () => {
    setShowScheduler(true);
  };

  const closeScheduler = () => {
    setShowScheduler(false);
  };

  return (
    <section id="contato" className="section-container bg-mk-gray-light">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Entre em <span className="text-mk-orange">Contato</span></h2>
          <p className="section-subtitle">
            Estamos prontos para transformar suas ideias em resultados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange"
                      required
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="audiovisual">Produção Audiovisual</option>
                      <option value="marketing">Marketing & Performance</option>
                      <option value="automacao">Automação</option>
                      <option value="impressao3d">Impressão 3D</option>
                      <option value="pos-producao">Pós-Produção</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Detalhes do Projeto
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-mk-orange text-white py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-mk-black text-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-mk-orange p-3 rounded-full mt-1">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Telefone</h4>
                    <p className="text-gray-300">+55 41 99916-7996</p>
                    <p className="text-sm text-gray-400 mt-1">Disponível em horário comercial</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-mk-orange p-3 rounded-full mt-1">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-gray-300">mkcreativelab@empresa.com.br</p>
                    <p className="text-sm text-gray-400 mt-1">Resposta em até 24 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-mk-orange p-3 rounded-full mt-1">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Localização</h4>
                    <p className="text-gray-300">Curitiba, Paraná, Brasil</p>
                    <p className="text-sm text-gray-400 mt-1">Atendemos em todo o Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-bold text-lg mb-4">Agende uma Consulta</h4>
                <p className="text-gray-300 mb-6">
                  Prefere conversar diretamente conosco? Agende uma consulta online ou presencial.
                </p>
                <button 
                  onClick={openScheduler}
                  className="block w-full bg-white text-mk-black py-3 rounded-md font-medium text-center hover:bg-gray-100 transition-colors"
                >
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showScheduler && <AppointmentScheduler onClose={closeScheduler} />}
    </section>
  );
};

export default Contact;
