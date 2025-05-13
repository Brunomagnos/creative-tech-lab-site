
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

interface MessagePreviewFooterProps {
  onClose: () => void;
  onConfirm: () => void;
}

const MessagePreviewFooter = ({ onClose, onConfirm }: MessagePreviewFooterProps) => {
  const [isSending, setIsSending] = useState(false);

  const handleConfirm = () => {
    setIsSending(true);
    onConfirm();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-end">
      <Button
        onClick={onClose}
        variant="outline"
        className="bg-background text-foreground border-border"
      >
        Editar Pedido
      </Button>
      <Button
        onClick={handleConfirm}
        className="bg-mk-orange hover:bg-opacity-90 text-white"
        disabled={isSending}
      >
        {isSending ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </>
        ) : (
          <>
            <Check className="mr-2 h-4 w-4" />
            Confirmar Pedido
          </>
        )}
      </Button>
    </div>
  );
};

export default MessagePreviewFooter;
