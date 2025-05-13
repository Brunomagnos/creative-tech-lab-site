
import { FormDataType } from "./ContactTypes";
import { toast } from "sonner";
import { handleWhatsAppMessage } from "../WhatsAppButton";
import { getServiceLabel } from "./utils";

/**
 * Send message through WhatsApp and save the request
 */
export const sendToWhatsApp = (formData: FormDataType, saveRequest: () => void) => {
  // Send the message through WhatsApp without closing the modal
  handleWhatsAppMessage(formData);
  
  // Show a success message
  toast.success("Chat do WhatsApp aberto em uma nova aba");
  
  // Save the request to localStorage
  saveRequest();
};

/**
 * Copy request information to clipboard
 */
export const copyRequestInfo = (formData: FormDataType, requestCode: string) => {
  // Format message for clipboard
  let clipboardText = `Pedido #${requestCode}\n`;
  clipboardText += `Serviço: ${getServiceLabel(formData.service)}\n`;
  clipboardText += `Cliente: ${formData.name}\n`;
  clipboardText += `Contato: ${formData.email} / ${formData.phone}\n`;
  clipboardText += `Data: ${new Date().toLocaleString('pt-BR')}\n`;
  
  navigator.clipboard.writeText(clipboardText);
  toast.success("Informações do pedido copiadas para a área de transferência");
};

/**
 * Send email with request details
 */
export const sendEmail = (formData: FormDataType, requestCode: string) => {
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

/**
 * Save request to localStorage
 */
export const saveRequest = (formData: FormDataType, requestCode: string) => {
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
