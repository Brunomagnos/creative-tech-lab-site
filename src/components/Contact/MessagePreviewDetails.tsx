
import { FormDataType } from "./ContactTypes";
import { getServiceLabel } from "./utils";

interface MessagePreviewDetailsProps {
  formData: FormDataType;
}

const MessagePreviewDetails = ({ formData }: MessagePreviewDetailsProps) => {
  return (
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
  );
};

export default MessagePreviewDetails;
