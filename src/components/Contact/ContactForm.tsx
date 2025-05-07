
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataType } from "./index";
import ServiceFields from "./ServiceFields";

// Schema for the base form
const baseFormSchema = z.object({
  name: z.string().min(3, { message: "Nome precisa ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(8, { message: "Telefone inválido" }),
  service: z.string().min(1, { message: "Selecione um serviço" }),
  message: z.string().min(10, { message: "Mensagem precisa ter pelo menos 10 caracteres" })
});

interface ContactFormProps {
  isSubmitting: boolean;
  onSubmit: (data: FormDataType) => void;
}

const ContactForm = ({ isSubmitting, onSubmit }: ContactFormProps) => {
  const form = useForm<FormDataType>({
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
  
  const handleFormSubmit = (data: FormDataType) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={form.handleSubmit(handleFormSubmit)}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="form-label">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            {...form.register("name")}
            className="form-input"
            required
          />
          {form.formState.errors.name && (
            <p className="form-error">{form.formState.errors.name.message}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...form.register("email")}
              className="form-input"
              required
            />
            {form.formState.errors.email && (
              <p className="form-error">{form.formState.errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="form-label">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              {...form.register("phone")}
              className="form-input"
              required
            />
            {form.formState.errors.phone && (
              <p className="form-error">{form.formState.errors.phone.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="service" className="form-label">
            Serviço de Interesse
          </label>
          <select
            id="service"
            {...form.register("service")}
            className="form-select"
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
            <p className="form-error">{form.formState.errors.service.message}</p>
          )}
        </div>
        
        {/* Dynamic Service-Specific Fields */}
        <ServiceFields 
          service={watchedService} 
          form={form} 
        />
        
        <div>
          <label htmlFor="message" className="form-label">
            Detalhes do Projeto
          </label>
          <textarea
            id="message"
            {...form.register("message")}
            rows={5}
            className="form-input"
            required
          ></textarea>
          {form.formState.errors.message && (
            <p className="form-error">{form.formState.errors.message.message}</p>
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
  );
};

export default ContactForm;
