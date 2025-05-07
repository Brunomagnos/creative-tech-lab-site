
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Send, AlertTriangle, Check } from "lucide-react";
import { toast } from "sonner";
import AppointmentScheduler from "./AppointmentScheduler";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleWhatsAppMessage } from "./WhatsAppButton";

// Schema for the base form
const baseFormSchema = z.object({
  name: z.string().min(3, { message: "Nome precisa ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(8, { message: "Telefone inválido" }),
  service: z.string().min(1, { message: "Selecione um serviço" }),
  message: z.string().min(10, { message: "Mensagem precisa ter pelo menos 10 caracteres" })
});

// Custom fields for Audiovisual
const audiovisualFields = z.object({
  eventType: z.string().optional(),
  eventDate: z.string().optional(),
  eventDuration: z.string().optional()
});

// Custom fields for Marketing
const marketingFields = z.object({
  platforms: z.string().optional(),
  budget: z.string().optional(),
  targetAudience: z.string().optional()
});

// Custom fields for Automation
const automationFields = z.object({
  currentSystems: z.string().optional(),
  processes: z.string().optional()
});

// Custom fields for 3D Printing
const printingFields = z.object({
  projectType: z.string().optional(),
  dimensions: z.string().optional(),
  material: z.string().optional()
});

// Service-specific schema types
type DynamicFormSchema = z.infer<typeof baseFormSchema> & {
  customFields?: Record<string, string>;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [serviceCustomFields, setServiceCustomFields] = useState<JSX.Element | null>(null);
  const [requestCode, setRequestCode] = useState<string | null>(null);

  const form = useForm<DynamicFormSchema>({
    resolver: zodResolver(baseFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      customFields: {}
    }
  });

  const watchedService = form.watch("service");
  
  // Generate a custom fields form based on selected service
  useEffect(() => {
    if (!watchedService) {
      setServiceCustomFields(null);
      return;
    }
    
    // Clear any previous custom fields data
    form.setValue("customFields", {});
    
    // Set appropriate custom fields based on service
    switch (watchedService) {
      case "audiovisual":
        setServiceCustomFields(
          <div className="space-y-4 mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
            <h4 className="font-medium text-black dark:text-white">Detalhes da Produção Audiovisual</h4>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tipo de Evento/Produção
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange bg-white dark:bg-gray-800 text-black dark:text-white"
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Tipo de Evento/Produção": e.target.value
                  });
                }}
              >
                <option value="">Selecione</option>
                <option value="Casamento">Casamento</option>
                <option value="Evento Corporativo">Evento Corporativo</option>
                <option value="Aniversário">Aniversário</option>
                <option value="Vídeo Institucional">Vídeo Institucional</option>
                <option value="Clipe Musical">Clipe Musical</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Data Prevista do Evento
              </label>
              <Input 
                type="date" 
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Data Prevista": e.target.value
                  });
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Duração Estimada (horas)
              </label>
              <Input 
                type="number" 
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Duração Estimada": `${e.target.value} horas`
                  });
                }}
              />
            </div>
          </div>
        );
        break;
        
      case "marketing":
        setServiceCustomFields(
          <div className="space-y-4 mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
            <h4 className="font-medium text-black dark:text-white">Detalhes do Marketing & Performance</h4>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Plataformas de Interesse
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Google Ads", "Meta Ads (Facebook/Instagram)", "LinkedIn Ads", "TikTok Ads"].map(platform => (
                  <div key={platform} className="flex items-center">
                    <input 
                      type="checkbox" 
                      id={platform.replace(/\s/g, '')} 
                      className="mr-2"
                      onChange={(e) => {
                        const currentCustomFields = form.getValues("customFields") || {};
                        const currentPlatforms = currentCustomFields["Plataformas"] || '';
                        
                        if (e.target.checked) {
                          const newPlatforms = currentPlatforms ? `${currentPlatforms}, ${platform}` : platform;
                          form.setValue("customFields", {
                            ...currentCustomFields,
                            "Plataformas": newPlatforms
                          });
                        } else {
                          const platformsArray = currentPlatforms.split(', ').filter(p => p !== platform);
                          form.setValue("customFields", {
                            ...currentCustomFields,
                            "Plataformas": platformsArray.join(', ')
                          });
                        }
                      }}
                    />
                    <label htmlFor={platform.replace(/\s/g, '')} className="text-sm text-gray-700 dark:text-gray-300">
                      {platform}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Orçamento Mensal Estimado
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange bg-white dark:bg-gray-800 text-black dark:text-white"
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Orçamento Mensal": e.target.value
                  });
                }}
              >
                <option value="">Selecione</option>
                <option value="Até R$ 1.000">Até R$ 1.000</option>
                <option value="R$ 1.000 - R$ 3.000">R$ 1.000 - R$ 3.000</option>
                <option value="R$ 3.000 - R$ 5.000">R$ 3.000 - R$ 5.000</option>
                <option value="R$ 5.000 - R$ 10.000">R$ 5.000 - R$ 10.000</option>
                <option value="Acima de R$ 10.000">Acima de R$ 10.000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Público-Alvo Principal
              </label>
              <Input 
                placeholder="Ex: Mulheres, 25-45 anos, classe B" 
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Público-Alvo": e.target.value
                  });
                }}
              />
            </div>
          </div>
        );
        break;
        
      case "automacao":
        setServiceCustomFields(
          <div className="space-y-4 mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
            <h4 className="font-medium text-black dark:text-white">Detalhes da Automação</h4>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Sistemas Atuais
              </label>
              <Input 
                placeholder="Ex: ERP, CRM, Planilhas Excel" 
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Sistemas Atuais": e.target.value
                  });
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Processos que Deseja Automatizar
              </label>
              <Textarea 
                placeholder="Descreva os processos que deseja automatizar" 
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Processos para Automatizar": e.target.value
                  });
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Número de Usuários
              </label>
              <Input 
                type="number" 
                placeholder="Quantas pessoas vão utilizar o sistema" 
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Número de Usuários": e.target.value
                  });
                }}
              />
            </div>
          </div>
        );
        break;
        
      case "impressao3d":
        setServiceCustomFields(
          <div className="space-y-4 mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
            <h4 className="font-medium text-black dark:text-white">Detalhes da Impressão 3D</h4>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tipo de Projeto
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange bg-white dark:bg-gray-800 text-black dark:text-white"
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Tipo de Projeto": e.target.value
                  });
                }}
              >
                <option value="">Selecione</option>
                <option value="Protótipo">Protótipo</option>
                <option value="Peça funcional">Peça funcional</option>
                <option value="Modelo arquitetônico">Modelo arquitetônico</option>
                <option value="Arte ou decoração">Arte ou decoração</option>
                <option value="Brinde personalizado">Brinde personalizado</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Dimensões Aproximadas (cm)
              </label>
              <div className="grid grid-cols-3 gap-2">
                <Input 
                  placeholder="Largura" 
                  type="number" 
                  onChange={(e) => {
                    const currentCustomFields = form.getValues("customFields") || {};
                    const currentDimensions = currentCustomFields["Dimensões"] || '';
                    const height = currentDimensions.split('x')[1] || '';
                    const depth = currentDimensions.split('x')[2] || '';
                    form.setValue("customFields", {
                      ...currentCustomFields,
                      "Dimensões": `${e.target.value}x${height}x${depth}`
                    });
                  }}
                />
                <Input 
                  placeholder="Altura" 
                  type="number"
                  onChange={(e) => {
                    const currentCustomFields = form.getValues("customFields") || {};
                    const currentDimensions = currentCustomFields["Dimensões"] || '';
                    const width = currentDimensions.split('x')[0] || '';
                    const depth = currentDimensions.split('x')[2] || '';
                    form.setValue("customFields", {
                      ...currentCustomFields,
                      "Dimensões": `${width}x${e.target.value}x${depth}`
                    });
                  }}
                />
                <Input 
                  placeholder="Profundidade" 
                  type="number"
                  onChange={(e) => {
                    const currentCustomFields = form.getValues("customFields") || {};
                    const currentDimensions = currentCustomFields["Dimensões"] || '';
                    const width = currentDimensions.split('x')[0] || '';
                    const height = currentDimensions.split('x')[1] || '';
                    form.setValue("customFields", {
                      ...currentCustomFields,
                      "Dimensões": `${width}x${height}x${e.target.value}`
                    });
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Largura x Altura x Profundidade</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Material Preferido
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange bg-white dark:bg-gray-800 text-black dark:text-white"
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Material": e.target.value
                  });
                }}
              >
                <option value="">Selecione</option>
                <option value="PLA">PLA (Mais comum)</option>
                <option value="ABS">ABS (Mais resistente)</option>
                <option value="PETG">PETG (Resistente à água)</option>
                <option value="TPU">TPU (Flexível)</option>
                <option value="Resina">Resina (Alta definição)</option>
                <option value="Não sei">Não sei, preciso de orientação</option>
              </select>
            </div>
          </div>
        );
        break;
        
      case "pos-producao":
        setServiceCustomFields(
          <div className="space-y-4 mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
            <h4 className="font-medium text-black dark:text-white">Detalhes da Pós-Produção</h4>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tipo de Material
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange bg-white dark:bg-gray-800 text-black dark:text-white"
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Tipo de Material": e.target.value
                  });
                }}
              >
                <option value="">Selecione</option>
                <option value="Vídeo para redes sociais">Vídeo para redes sociais</option>
                <option value="Filme institucional">Filme institucional</option>
                <option value="Vídeo de casamento">Vídeo de casamento</option>
                <option value="Clipe musical">Clipe musical</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Duração Estimada do Vídeo Final
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange bg-white dark:bg-gray-800 text-black dark:text-white"
                onChange={(e) => {
                  const currentCustomFields = form.getValues("customFields") || {};
                  form.setValue("customFields", {
                    ...currentCustomFields,
                    "Duração Estimada": e.target.value
                  });
                }}
              >
                <option value="">Selecione</option>
                <option value="Menos de 1 minuto">Menos de 1 minuto</option>
                <option value="1-3 minutos">1-3 minutos</option>
                <option value="3-5 minutos">3-5 minutos</option>
                <option value="5-10 minutos">5-10 minutos</option>
                <option value="Mais de 10 minutos">Mais de 10 minutos</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Serviços Necessários
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Edição de vídeo", "Color grading", "Motion graphics", "Design de áudio", "VFX", "Legendas"].map(service => (
                  <div key={service} className="flex items-center">
                    <input 
                      type="checkbox" 
                      id={service.replace(/\s/g, '')} 
                      className="mr-2"
                      onChange={(e) => {
                        const currentCustomFields = form.getValues("customFields") || {};
                        const currentServices = currentCustomFields["Serviços Necessários"] || '';
                        
                        if (e.target.checked) {
                          const newServices = currentServices ? `${currentServices}, ${service}` : service;
                          form.setValue("customFields", {
                            ...currentCustomFields,
                            "Serviços Necessários": newServices
                          });
                        } else {
                          const servicesArray = currentServices.split(', ').filter(s => s !== service);
                          form.setValue("customFields", {
                            ...currentCustomFields,
                            "Serviços Necessários": servicesArray.join(', ')
                          });
                        }
                      }}
                    />
                    <label htmlFor={service.replace(/\s/g, '')} className="text-sm text-gray-700 dark:text-gray-300">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        break;
        
      default:
        setServiceCustomFields(null);
    }
  }, [watchedService, form]);
  
  // Generate unique request code
  const generateRequestCode = () => {
    const prefix = "MK";
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}-${timestamp}-${random}`;
  };

  const onSubmit = (data: DynamicFormSchema) => {
    setIsSubmitting(true);
    
    // Create a preview of the formatted message first
    setShowPreview(true);
    
    // Generate a unique request code
    const newRequestCode = generateRequestCode();
    setRequestCode(newRequestCode);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, send this data to a backend service
      console.log(data);
      
      // Hide preview, show success toast
      setShowPreview(false);
      toast.success(`Pedido ${newRequestCode} enviado com sucesso! Entraremos em contato em breve.`);
      
      // Reset form
      form.reset();
      setServiceCustomFields(null);
      setIsSubmitting(false);
    }, 1500);
  };
  
  const sendToWhatsApp = (data: DynamicFormSchema) => {
    // Close the preview
    setShowPreview(false);
    
    // Send the message through WhatsApp
    handleWhatsAppMessage({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      customFields: data.customFields
    });
  };

  const openScheduler = () => {
    setShowScheduler(true);
  };

  const closeScheduler = () => {
    setShowScheduler(false);
  };
  
  const closePreview = () => {
    setShowPreview(false);
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="section-container bg-white dark:bg-mk-gray-light">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-black dark:text-white">Entre em <span className="text-mk-orange">Contato</span></h2>
          <p className="section-subtitle text-black dark:text-white">
            Estamos prontos para transformar suas ideias em resultados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="bg-white dark:bg-mk-black rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Solicite um Orçamento</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...form.register("name")}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange bg-white dark:bg-gray-800 text-black dark:text-white"
                      required
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...form.register("email")}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange bg-white dark:bg-gray-800 text-black dark:text-white"
                        required
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...form.register("phone")}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange bg-white dark:bg-gray-800 text-black dark:text-white"
                        required
                      />
                      {form.formState.errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      {...form.register("service")}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange bg-white dark:bg-gray-800 text-black dark:text-white"
                      required
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="audiovisual">Produção Audiovisual</option>
                      <option value="marketing">Marketing & Performance</option>
                      <option value="automacao">Automação</option>
                      <option value="impressao3d">Impressão 3D</option>
                      <option value="pos-producao">Pós-Produção</option>
                    </select>
                    {form.formState.errors.service && (
                      <p className="text-red-500 text-xs mt-1">{form.formState.errors.service.message}</p>
                    )}
                  </div>
                  
                  {/* Dynamic Service-Specific Fields */}
                  {serviceCustomFields}
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                      Detalhes do Projeto
                    </label>
                    <textarea
                      id="message"
                      {...form.register("message")}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange bg-white dark:bg-gray-800 text-black dark:text-white"
                      required
                    ></textarea>
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-mk-orange text-white py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-mk-black text-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-mk-orange p-3 rounded-full mt-1">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Telefone</h4>
                    <p className="text-gray-300">+55 41 99916-7996</p>
                    <p className="text-sm text-gray-400 mt-1">Disponível em horário comercial</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-mk-orange p-3 rounded-full mt-1">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-gray-300">mkcreativelab@empresa.com.br</p>
                    <p className="text-sm text-gray-400 mt-1">Resposta em até 24 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-mk-orange p-3 rounded-full mt-1">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Localização</h4>
                    <p className="text-gray-300">Curitiba, Paraná, Brasil</p>
                    <p className="text-sm text-gray-400 mt-1">Atendemos em todo o Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-bold text-lg mb-4">Agende uma Consulta</h4>
                <p className="text-gray-300 mb-6">
                  Prefere conversar diretamente conosco? Agende uma consulta online ou presencial.
                </p>
                <button 
                  onClick={openScheduler}
                  className="block w-full bg-white text-mk-black py-3 rounded-md font-medium text-center hover:bg-gray-100 transition-colors"
                >
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-mk-black rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black dark:text-white">Confirmar Pedido #{requestCode}</h3>
              <button 
                onClick={closePreview}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 mb-4">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Informações de Contato</h4>
                <div className="grid grid-cols-2 gap-2 text-black dark:text-gray-200">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Nome:</p>
                    <p>{form.getValues("name")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email:</p>
                    <p>{form.getValues("email")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Telefone:</p>
                    <p>{form.getValues("phone")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Serviço:</p>
                    <p>{(() => {
                      const service = form.getValues("service");
                      switch(service) {
                        case "audiovisual": return "Produção Audiovisual";
                        case "marketing": return "Marketing & Performance";
                        case "automacao": return "Automação";
                        case "impressao3d": return "Impressão 3D";
                        case "pos-producao": return "Pós-Produção";
                        default: return service;
                      }
                    })()}</p>
                  </div>
                </div>
              </div>
              
              {form.getValues("customFields") && Object.keys(form.getValues("customFields") || {}).length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Detalhes Específicos do Serviço</h4>
                  <div className="grid grid-cols-1 gap-2 text-black dark:text-gray-200">
                    {Object.entries(form.getValues("customFields") || {}).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{key}:</p>
                        <p>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Mensagem</h4>
                <p className="text-black dark:text-gray-200 whitespace-pre-wrap">{form.getValues("message")}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button
                onClick={closePreview}
                variant="outline"
                className="bg-white dark:bg-transparent text-gray-700 dark:text-white border-gray-300 dark:border-gray-700"
              >
                Editar Pedido
              </Button>
              <Button
                onClick={() => sendToWhatsApp(form.getValues())}
                variant="outline"
                className="bg-[#25D366] hover:bg-[#20BA5C] text-white border-[#25D366] hover:border-[#20BA5C]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Enviar via WhatsApp
              </Button>
              <Button
                onClick={() => onSubmit(form.getValues())}
                className="bg-mk-orange hover:bg-opacity-90 text-white"
              >
                <Check className="mr-2 h-4 w-4" />
                Confirmar Pedido
              </Button>
            </div>
          </div>
        </div>
      )}

      {showScheduler && <AppointmentScheduler onClose={closeScheduler} />}
    </section>
  );
};

export default Contact;
