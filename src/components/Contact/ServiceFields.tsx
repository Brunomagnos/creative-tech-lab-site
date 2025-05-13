
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { FormDataType } from "./ContactTypes";

interface ServiceFieldsProps {
  service: string;
  form: UseFormReturn<FormDataType>;
}

const ServiceFields = ({ service, form }: ServiceFieldsProps) => {
  if (!service) {
    return null;
  }

  // Helper function to update custom fields
  const updateCustomField = (key: string, value: string) => {
    const currentCustomFields = form.getValues("customFields") || {};
    form.setValue("customFields", {
      ...currentCustomFields,
      [key]: value
    });
  };

  switch (service) {
    case "audiovisual":
      return (
        <div className="space-y-4 mt-4 p-4 bg-secondary rounded-md">
          <h4 className="font-medium text-foreground">Detalhes da Produção Audiovisual</h4>
          <div>
            <label className="form-label">
              Tipo de Evento/Produção
            </label>
            <select
              className="form-select"
              onChange={(e) => updateCustomField("Tipo de Evento/Produção", e.target.value)}
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
            <label className="form-label">
              Data Prevista do Evento
            </label>
            <Input 
              type="date" 
              onChange={(e) => updateCustomField("Data Prevista", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">
              Duração Estimada (horas)
            </label>
            <Input 
              type="number" 
              onChange={(e) => updateCustomField("Duração Estimada", `${e.target.value} horas`)}
            />
          </div>
        </div>
      );
      
    case "marketing":
      return (
        <div className="space-y-4 mt-4 p-4 bg-secondary rounded-md">
          <h4 className="font-medium text-foreground">Detalhes do Marketing & Performance</h4>
          <div>
            <label className="form-label">
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
                        updateCustomField("Plataformas", newPlatforms);
                      } else {
                        const platformsArray = currentPlatforms.split(', ').filter(p => p !== platform);
                        updateCustomField("Plataformas", platformsArray.join(', '));
                      }
                    }}
                  />
                  <label htmlFor={platform.replace(/\s/g, '')} className="text-sm text-foreground">
                    {platform}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="form-label">
              Orçamento Mensal Estimado
            </label>
            <select
              className="form-select"
              onChange={(e) => updateCustomField("Orçamento Mensal", e.target.value)}
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
            <label className="form-label">
              Público-Alvo Principal
            </label>
            <Input 
              placeholder="Ex: Mulheres, 25-45 anos, classe B" 
              onChange={(e) => updateCustomField("Público-Alvo", e.target.value)}
            />
          </div>
        </div>
      );
      
    case "automacao":
      return (
        <div className="space-y-4 mt-4 p-4 bg-secondary rounded-md">
          <h4 className="font-medium text-foreground">Detalhes da Automação</h4>
          <div>
            <label className="form-label">
              Sistemas Atuais
            </label>
            <Input 
              placeholder="Ex: ERP, CRM, Planilhas Excel" 
              onChange={(e) => updateCustomField("Sistemas Atuais", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">
              Processos que Deseja Automatizar
            </label>
            <Textarea 
              placeholder="Descreva os processos que deseja automatizar" 
              onChange={(e) => updateCustomField("Processos para Automatizar", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">
              Número de Usuários
            </label>
            <Input 
              type="number" 
              placeholder="Quantas pessoas vão utilizar o sistema" 
              onChange={(e) => updateCustomField("Número de Usuários", e.target.value)}
            />
          </div>
        </div>
      );
      
    case "impressao3d":
      return (
        <div className="space-y-4 mt-4 p-4 bg-secondary rounded-md">
          <h4 className="font-medium text-foreground">Detalhes da Impressão 3D</h4>
          <div>
            <label className="form-label">
              Tipo de Projeto
            </label>
            <select
              className="form-select"
              onChange={(e) => updateCustomField("Tipo de Projeto", e.target.value)}
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
            <label className="form-label">
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
                  updateCustomField("Dimensões", `${e.target.value}x${height}x${depth}`);
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
                  updateCustomField("Dimensões", `${width}x${e.target.value}x${depth}`);
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
                  updateCustomField("Dimensões", `${width}x${height}x${e.target.value}`);
                }}
              />
            </div>
            <p className="text-xs text-foreground/60 mt-1">Largura x Altura x Profundidade</p>
          </div>
          <div>
            <label className="form-label">
              Material Preferido
            </label>
            <select
              className="form-select"
              onChange={(e) => updateCustomField("Material", e.target.value)}
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
      
    case "pos-producao":
      return (
        <div className="space-y-4 mt-4 p-4 bg-secondary rounded-md">
          <h4 className="font-medium text-foreground">Detalhes da Pós-Produção</h4>
          <div>
            <label className="form-label">
              Tipo de Material
            </label>
            <select
              className="form-select"
              onChange={(e) => updateCustomField("Tipo de Material", e.target.value)}
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
            <label className="form-label">
              Duração Estimada do Vídeo Final
            </label>
            <select
              className="form-select"
              onChange={(e) => updateCustomField("Duração Estimada", e.target.value)}
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
            <label className="form-label">
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
                        updateCustomField("Serviços Necessários", newServices);
                      } else {
                        const servicesArray = currentServices.split(', ').filter(s => s !== service);
                        updateCustomField("Serviços Necessários", servicesArray.join(', '));
                      }
                    }}
                  />
                  <label htmlFor={service.replace(/\s/g, '')} className="text-sm text-foreground">
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
      
    default:
      return null;
  }
};

export default ServiceFields;
