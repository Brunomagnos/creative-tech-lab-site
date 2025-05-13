
import React from "react";
import { Send } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { DynamicFormSchema } from "./ContactTypes";
import CustomServiceFields from "./CustomServiceFields";

interface ContactFormProps {
  isSubmitting: boolean;
  form: UseFormReturn<DynamicFormSchema>;
  onSubmit: (data: DynamicFormSchema) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isSubmitting, form, onSubmit }) => {
  const watchedService = form.watch("service");

  return (
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
        <CustomServiceFields service={watchedService} form={form} />
        
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
  );
};

export default ContactForm;
