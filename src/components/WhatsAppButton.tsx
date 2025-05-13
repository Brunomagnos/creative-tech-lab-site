
import React from "react";
import { Phone } from "lucide-react";
import { generateRequestCode } from "../utils/serviceUtils";
import { FormDataType } from "./Contact/ContactTypes";

// This component will no longer render a floating button, but only provide utility functions
const WhatsAppButton = () => {
  return null; // No visible component
};

// Function to format WhatsApp message from form data
export const handleWhatsAppMessage = (formData: FormDataType, shouldOpenInNewTab = true) => {
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
  
  if (shouldOpenInNewTab) {
    // Open in a new tab without closing the current one
    const newWindow = window.open(whatsappURL, '_blank');
    if (newWindow) {
      newWindow.opener = null; // Prevent the new window from accessing the opener window
    }
  }
  
  return whatsappURL;
};

export default WhatsAppButton;
