
import { FormDataType } from "./ContactTypes";

/**
 * Generate a unique request code for orders
 */
export const generateContactRequestCode = (): string => {
  const prefix = "MK";
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${prefix}-${timestamp}-${random}`;
};

/**
 * Save request to localStorage
 */
export const saveRequestToStorage = (requestCode: string, formData: FormDataType) => {
  const serviceNames: Record<string, string> = {
    audiovisual: "Produção Audiovisual",
    marketing: "Marketing & Performance",
    automacao: "Automação",
    impressao3d: "Impressão 3D",
    "pos-producao": "Pós-Produção"
  };
  
  const serviceName = serviceNames[formData.service] || formData.service;

  // Create request object to save
  const request = {
    id: requestCode,
    service: serviceName,
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

/**
 * Get a human-readable service label
 */
export const getServiceLabel = (service: string): string => {
  switch (service) {
    case "audiovisual": return "Produção Audiovisual";
    case "marketing": return "Marketing & Performance";
    case "automacao": return "Automação";
    case "impressao3d": return "Impressão 3D";
    case "pos-producao": return "Pós-Produção";
    default: return service;
  }
};
