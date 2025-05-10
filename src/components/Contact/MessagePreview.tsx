
import { Check, Mail, Phone, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { handleWhatsAppMessage } from "../WhatsAppButton";
import { FormDataType } from "./index";
import { toast } from "sonner";
import { useState } from "react";

interface MessagePreviewProps {
  formData: FormDataType;
  requestCode: string;
  onClose: () => void;
  onConfirm: () => void;
}

const MessagePreview = ({ formData, requestCode, onClose, onConfirm }: MessagePreviewProps) => {
  const [isSending, setIsSending] = useState(false);

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

  const sendToWhatsApp = () => {
    // Send the message through WhatsApp without closing the modal
    handleWhatsAppMessage(formData);
    
    // Show a success message
    toast.success("Chat do WhatsApp aberto em uma nova aba");
    
    // Save the request to localStorage
    saveRequest();
  };
  
  const copyRequestInfo = () => {
    // Format message for clipboard
    let clipboardText = `Pedido #${requestCode}\n`;
    clipboardText += `Serviço: ${getServiceLabel(formData.service)}\n`;
    clipboardText += `Cliente: ${formData.name}\n`;
    clipboardText += `Contato: ${formData.email} / ${formData.phone}\n`;
    clipboardText += `Data: ${new Date().toLocaleString('pt-BR')}\n`;
    
    navigator.clipboard.writeText(clipboardText);
    toast.success("Informações do pedido copiadas para a área de transferência");
  };
  
  const sendEmail = () => {
    // Prepare email subject and body
    const subject = `Novo pedido #${requestCode} - ${getServiceLabel(formData.service)}`;
    
    let body = `Olá! Meu nome é ${formData.name}.\n\n`;
    body += `Estou interessado(a) no serviço de ${getServiceLabel(formData.service)}.\n\n`;
    
    if (formData.customFields && Object.keys(formData.customFields).length > 0) {
      body += "Detalhes específicos:\n";
      Object.entries(formData.customFields).forEach(([key, value]) => {
        body += `- ${key}: ${value}\n`;
      });
      body += "\n";
    }
    
    body += `Mensagem: ${formData.message}\n\n`;
    body += `Contato:\nEmail: ${formData.email}\nTelefone: ${formData.phone}`;
    
    // Create mailto URL
    const mailtoURL = `mailto:mkcreativelab@empresa.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoURL, '_blank');
    
    // Show success message
    toast.success("Cliente de email aberto em uma nova aba");
  };
  
  const saveRequest = () => {
    // Create request object to save
    const request = {
      id: requestCode,
      service: getServiceLabel(formData.service),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      customFields: formData.customFields || {},
      date: new Date().toISOString()
    };
    
    // Get existing requests from localStorage
    const existingRequestsString = localStorage.getItem('mkRequests');
    const existingRequests = existingRequestsString ? JSON.parse(existingRequestsString) : [];
    
    // Add new request and save back to localStorage
    existingRequests.push(request);
    localStorage.setItem('mkRequests', JSON.stringify(existingRequests));
  };

  const handleConfirm = () => {
    setIsSending(true);
    
    // Save the request first
    saveRequest();
    
    // Call the original confirm function
    onConfirm();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-card text-card-foreground rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Pedido #{requestCode}</h3>
          <button 
            onClick={onClose}
            className="text-foreground/70 hover:text-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="border-t border-b border-border py-4 mb-4">
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Informações de Contato</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm text-foreground/70">Nome:</p>
                <p>{formData.name}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/70">Email:</p>
                <p>{formData.email}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/70">Telefone:</p>
                <p>{formData.phone}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/70">Serviço:</p>
                <p>{getServiceLabel(formData.service)}</p>
              </div>
            </div>
          </div>
          
          {formData.customFields && Object.keys(formData.customFields).length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Detalhes Específicos do Serviço</h4>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(formData.customFields).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-foreground/70">{key}:</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Mensagem</h4>
            <p className="whitespace-pre-wrap">{formData.message}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-foreground/70">Escolha como deseja continuar:</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <Button
            onClick={sendToWhatsApp}
            variant="outline"
            className="bg-[#25D366] hover:bg-[#20BA5C] text-white border-[#25D366] hover:border-[#20BA5C]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Enviar via WhatsApp
          </Button>
          
          <Button
            onClick={sendEmail}
            variant="outline"
            className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
          >
            <Mail className="h-4 w-4 mr-2" />
            Enviar via Email
          </Button>
          
          <Button
            onClick={copyRequestInfo}
            variant="outline"
            className="bg-gray-600 hover:bg-gray-700 text-white border-gray-600 hover:border-gray-700"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copiar Informações
          </Button>
        </div>
        
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
      </div>
    </div>
  );
};

export default MessagePreview;
