
import { Phone } from "lucide-react";

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

export default WhatsAppButton;
