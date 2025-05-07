
/**
 * This utility file contains functions for handling service-related functionality
 */

export interface ServiceField {
  name: string;
  label: string;
  type: 'text' | 'select' | 'date' | 'number' | 'checkbox' | 'textarea';
  options?: { value: string; label: string }[];
  placeholder?: string;
}

export interface ServiceConfig {
  title: string;
  fields: ServiceField[];
}

export const serviceConfigs: Record<string, ServiceConfig> = {
  audiovisual: {
    title: "Detalhes da Produção Audiovisual",
    fields: [
      {
        name: "eventType",
        label: "Tipo de Evento/Produção",
        type: "select",
        options: [
          { value: "Casamento", label: "Casamento" },
          { value: "Evento Corporativo", label: "Evento Corporativo" },
          { value: "Aniversário", label: "Aniversário" },
          { value: "Vídeo Institucional", label: "Vídeo Institucional" },
          { value: "Clipe Musical", label: "Clipe Musical" },
          { value: "Outro", label: "Outro" }
        ]
      },
      {
        name: "eventDate",
        label: "Data Prevista do Evento",
        type: "date"
      },
      {
        name: "eventDuration",
        label: "Duração Estimada (horas)",
        type: "number",
        placeholder: "Ex: 4"
      }
    ]
  },
  marketing: {
    title: "Detalhes do Marketing & Performance",
    fields: [
      {
        name: "platforms",
        label: "Plataformas de Interesse",
        type: "checkbox",
        options: [
          { value: "Google Ads", label: "Google Ads" },
          { value: "Meta Ads", label: "Meta Ads (Facebook/Instagram)" },
          { value: "LinkedIn Ads", label: "LinkedIn Ads" },
          { value: "TikTok Ads", label: "TikTok Ads" }
        ]
      },
      {
        name: "budget",
        label: "Orçamento Mensal Estimado",
        type: "select",
        options: [
          { value: "Até R$ 1.000", label: "Até R$ 1.000" },
          { value: "R$ 1.000 - R$ 3.000", label: "R$ 1.000 - R$ 3.000" },
          { value: "R$ 3.000 - R$ 5.000", label: "R$ 3.000 - R$ 5.000" },
          { value: "R$ 5.000 - R$ 10.000", label: "R$ 5.000 - R$ 10.000" },
          { value: "Acima de R$ 10.000", label: "Acima de R$ 10.000" }
        ]
      },
      {
        name: "targetAudience",
        label: "Público-Alvo Principal",
        type: "text",
        placeholder: "Ex: Mulheres, 25-45 anos, classe B"
      }
    ]
  },
  automacao: {
    title: "Detalhes da Automação",
    fields: [
      {
        name: "currentSystems",
        label: "Sistemas Atuais",
        type: "text",
        placeholder: "Ex: ERP, CRM, Planilhas Excel"
      },
      {
        name: "processes",
        label: "Processos que Deseja Automatizar",
        type: "textarea",
        placeholder: "Descreva os processos que deseja automatizar"
      },
      {
        name: "numUsers",
        label: "Número de Usuários",
        type: "number",
        placeholder: "Quantas pessoas vão utilizar o sistema"
      }
    ]
  },
  impressao3d: {
    title: "Detalhes da Impressão 3D",
    fields: [
      {
        name: "projectType",
        label: "Tipo de Projeto",
        type: "select",
        options: [
          { value: "Protótipo", label: "Protótipo" },
          { value: "Peça funcional", label: "Peça funcional" },
          { value: "Modelo arquitetônico", label: "Modelo arquitetônico" },
          { value: "Arte ou decoração", label: "Arte ou decoração" },
          { value: "Brinde personalizado", label: "Brinde personalizado" },
          { value: "Outro", label: "Outro" }
        ]
      },
      {
        name: "dimensions",
        label: "Dimensões Aproximadas (cm)",
        type: "text",
        placeholder: "Ex: 10x15x5 (LxAxP)"
      },
      {
        name: "material",
        label: "Material Preferido",
        type: "select",
        options: [
          { value: "PLA", label: "PLA (Mais comum)" },
          { value: "ABS", label: "ABS (Mais resistente)" },
          { value: "PETG", label: "PETG (Resistente à água)" },
          { value: "TPU", label: "TPU (Flexível)" },
          { value: "Resina", label: "Resina (Alta definição)" },
          { value: "Não sei", label: "Não sei, preciso de orientação" }
        ]
      }
    ]
  },
  "pos-producao": {
    title: "Detalhes da Pós-Produção",
    fields: [
      {
        name: "materialType",
        label: "Tipo de Material",
        type: "select",
        options: [
          { value: "Vídeo para redes sociais", label: "Vídeo para redes sociais" },
          { value: "Filme institucional", label: "Filme institucional" },
          { value: "Vídeo de casamento", label: "Vídeo de casamento" },
          { value: "Clipe musical", label: "Clipe musical" },
          { value: "Outro", label: "Outro" }
        ]
      },
      {
        name: "duration",
        label: "Duração Estimada do Vídeo Final",
        type: "select",
        options: [
          { value: "Menos de 1 minuto", label: "Menos de 1 minuto" },
          { value: "1-3 minutos", label: "1-3 minutos" },
          { value: "3-5 minutos", label: "3-5 minutos" },
          { value: "5-10 minutos", label: "5-10 minutos" },
          { value: "Mais de 10 minutos", label: "Mais de 10 minutos" }
        ]
      },
      {
        name: "services",
        label: "Serviços Necessários",
        type: "checkbox",
        options: [
          { value: "Edição de vídeo", label: "Edição de vídeo" },
          { value: "Color grading", label: "Color grading" },
          { value: "Motion graphics", label: "Motion graphics" },
          { value: "Design de áudio", label: "Design de áudio" },
          { value: "VFX", label: "VFX" },
          { value: "Legendas", label: "Legendas" }
        ]
      }
    ]
  }
};

/**
 * Format a form message based on service selected
 */
export const formatRequestMessage = (data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  customFields?: Record<string, string>;
}): string => {
  const { name, email, phone, service, message, customFields = {} } = data;
  
  // Get readable service name
  const serviceNames: Record<string, string> = {
    audiovisual: "Produção Audiovisual",
    marketing: "Marketing & Performance",
    automacao: "Automação",
    impressao3d: "Impressão 3D",
    "pos-producao": "Pós-Produção"
  };
  
  const serviceName = serviceNames[service] || service;
  
  // Create formatted message
  let formattedMessage = `*Novo Pedido de Orçamento: ${serviceName}*\n\n`;
  formattedMessage += `*Nome:* ${name}\n`;
  formattedMessage += `*Email:* ${email}\n`;
  formattedMessage += `*Telefone:* ${phone}\n\n`;
  
  // Add custom fields if available
  if (customFields && Object.keys(customFields).length > 0) {
    formattedMessage += `*Detalhes do ${serviceName}:*\n`;
    Object.entries(customFields).forEach(([key, value]) => {
      formattedMessage += `*${key}:* ${value}\n`;
    });
    formattedMessage += "\n";
  }
  
  // Add original message
  formattedMessage += `*Mensagem do Cliente:*\n${message}\n\n`;
  
  // Add recommendations based on service
  switch (service) {
    case "audiovisual":
      formattedMessage += "Recomendação: Agendar reunião para entender melhor as necessidades visuais e expectativas estéticas.";
      break;
    case "marketing":
      formattedMessage += "Recomendação: Preparar análise preliminar das plataformas mencionadas e sugerir estratégia inicial.";
      break;
    case "automacao":
      formattedMessage += "Recomendação: Realizar diagnóstico dos processos atuais para identificar oportunidades de otimização.";
      break;
    case "impressao3d":
      formattedMessage += "Recomendação: Verificar viabilidade técnica do projeto e sugerir materiais mais adequados.";
      break;
    case "pos-producao":
      formattedMessage += "Recomendação: Agendar sessão para revisar o material bruto e alinhar expectativas estéticas.";
      break;
  }
  
  return formattedMessage;
};

/**
 * Generate a unique request code
 */
export const generateRequestCode = (): string => {
  const prefix = "MK";
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${prefix}-${timestamp}-${random}`;
};
