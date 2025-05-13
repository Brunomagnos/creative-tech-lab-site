
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactInfoProps {
  onScheduleClick: () => void;
}

const ContactInfoSection = ({ onScheduleClick }: ContactInfoProps) => {
  return (
    <div className="bg-mk-black text-white rounded-lg shadow-lg p-8 h-full">
      <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-mk-orange p-3 rounded-full mt-1">
            <Phone size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-bold text-lg">Telefone</h4>
            <p className="text-white/80">+55 41 99916-7996</p>
            <p className="text-sm text-white/60 mt-1">Disponível em horário comercial</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-mk-orange p-3 rounded-full mt-1">
            <Mail size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-bold text-lg">Email</h4>
            <p className="text-white/80">mkcreativelab@empresa.com.br</p>
            <p className="text-sm text-white/60 mt-1">Resposta em até 24 horas</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-mk-orange p-3 rounded-full mt-1">
            <MapPin size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-bold text-lg">Localização</h4>
            <p className="text-white/80">Curitiba, Paraná, Brasil</p>
            <p className="text-sm text-white/60 mt-1">Atendemos em todo o Brasil</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h4 className="font-bold text-lg mb-4">Agende uma Consulta</h4>
        <p className="text-white/80 mb-6">
          Prefere conversar diretamente conosco? Agende uma consulta online ou presencial.
        </p>
        <button 
          onClick={onScheduleClick}
          className="block w-full bg-white text-mk-black py-3 rounded-md font-medium text-center hover:bg-white/90 transition-colors"
        >
          Agendar Consulta
        </button>
      </div>
    </div>
  );
};

export default ContactInfoSection;
