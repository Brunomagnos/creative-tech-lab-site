
import { Phone } from "lucide-react";
import { formatRequestMessage, generateRequestCode } from "../utils/serviceUtils";
import { FormDataType } from "./Contact/index";

const WhatsAppButton = () => {
  const whatsappNumber = "5541999167996"; // Format: country code + number without spaces or symbols
  
  const handleClick = (customMessage?: string) => {
    const message = customMessage || formatRequestMessage({
      intro: "Olá! Gostaria de solicitar um orçamento.",
      details: `Código de pedido: ${generateRequestCode()}`
    });
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => handleClick()}
        className="bg-green-500 hover:bg-green-600 transition-colors text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
        aria-label="Contato via WhatsApp"
      >
        <Phone size={24} />
      </button>
    </div>
  );
};

// Function to format WhatsApp message from form data
export const handleWhatsAppMessage = (formData: FormDataType) => {
  const whatsappNumber = "5541999167996";
  
  // Get service label
  const getServiceLabel = (service: string): string => {
    switch (service) {
      case "audiovisual": return "Produção Audiovisual";
      case "marketing": return "Marketing & Performance";
      case "automacao": return "Automação";
      case "impressao3d": return "Impressão 3D";
      case "pos-producao": return "Pós-Produção";
      default: return service;
    }
  };
  
  // Format the message
  let message = `Olá! Meu nome é ${formData.name}.\n\n`;
  message += `Estou interessado(a) no serviço de ${getServiceLabel(formData.service)}.\n\n`;
  
  // Add custom fields if present
  if (formData.customFields && Object.keys(formData.customFields).length > 0) {
    message += "Detalhes específicos:\n";
    Object.entries(formData.customFields).forEach(([key, value]) => {
      message += `- ${key}: ${value}\n`;
    });
    message += "\n";
  }
  
  // Add message content
  message += `Mensagem: ${formData.message}\n\n`;
  
  // Add contact info
  message += `Contato:\nEmail: ${formData.email}\nTelefone: ${formData.phone}`;
  
  // Generate WhatsApp URL
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  // Open in a new tab
  window.open(whatsappURL, '_blank');
};

export default WhatsAppButton;
