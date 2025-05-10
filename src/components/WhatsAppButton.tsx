
import { Phone } from "lucide-react";
import { formatRequestMessage, generateRequestCode } from "../utils/serviceUtils";

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

export default WhatsAppButton;
