
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "5541999167996"; // Format: country code + number without spaces or symbols
  const message = "Olá! Gostaria de mais informações sobre os serviços da MK Creative Lab.";
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#20BA5C] transition-colors z-50 flex items-center justify-center"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageSquare size={28} fill="white" />
    </button>
  );
};

export default WhatsAppButton;
