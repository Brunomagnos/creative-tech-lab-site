import { Phone } from "lucide-react";
import { formatRequestMessage, generateRequestCode } from "../utils/serviceUtils";

const WhatsAppButton = () => {
  const whatsappNumber = "5541999167996"; // Format: country code + number without spaces or symbols
  
  const handleClick = (customMessage?: string) => {
    // Default message
    const defaultMessage = "Olá! Gostaria de mais informações sobre os serviços da MK Creative Lab.";
    
    // Use custom message if provided, otherwise use default
    const message = customMessage || defaultMessage;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={() => handleClick()}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#20BA5C] transition-colors z-50 flex items-center justify-center group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative">
        <Phone size={28} className="text-white" />
        {/* WhatsApp logo indicator */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
          <span className="text-[#25D366] text-[8px] font-bold">W</span>
        </span>
      </div>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
        Fale conosco
      </span>
    </button>
  );
};

// Function to generate a customized WhatsApp message
export const handleWhatsAppMessage = (data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  customFields?: Record<string, string>;
}) => {
  const { name, email, phone, service, message, customFields } = data;
  const whatsappNumber = "5541999167996";
  
  // Create formatted message with service-specific details
  let formattedMessage = `*Novo Pedido de Orçamento*\n\n`;
  formattedMessage += `*Nome:* ${name}\n`;
  formattedMessage += `*Email:* ${email}\n`;
  formattedMessage += `*Telefone:* ${phone}\n`;
  formattedMessage += `*Serviço:* ${service}\n\n`;
  
  // Add custom fields if available
  if (customFields && Object.keys(customFields).length > 0) {
    formattedMessage += "*Detalhes do Serviço:*\n";
    Object.entries(customFields).forEach(([key, value]) => {
      formattedMessage += `*${key}:* ${value}\n`;
    });
    formattedMessage += "\n";
  }
  
  // Add original message
  formattedMessage += `*Mensagem:*\n${message}\n\n`;
  formattedMessage += `Este pedido foi enviado através do site da MK Creative Lab.`;
  
  // Generate unique request code
  const requestCode = generateRequestCode();
  formattedMessage += `\n\nCódigo de solicitação: *${requestCode}*`;
  
  // Open WhatsApp with the formatted message
  const encodedMessage = encodeURIComponent(formattedMessage);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
};

export default WhatsAppButton;
