
import { z } from "zod";

// Schema for the base form
export const baseFormSchema = z.object({
  name: z.string().min(3, { message: "Nome precisa ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(8, { message: "Telefone inválido" }),
  service: z.string().min(1, { message: "Selecione um serviço" }),
  message: z.string().min(10, { message: "Mensagem precisa ter pelo menos 10 caracteres" })
});

// Service-specific schema types
export type DynamicFormSchema = z.infer<typeof baseFormSchema> & {
  customFields?: Record<string, string>;
};

// Export type for form data
export type FormDataType = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  customFields?: Record<string, string>;
};
