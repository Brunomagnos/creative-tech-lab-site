import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ClipboardList } from "lucide-react";
import AppointmentScheduler from "../AppointmentScheduler";
import ContactForm from "./ContactForm";
import ContactInfoSection from "./ContactInfoSection";
import MessagePreview from "./MessagePreview";
import { generateContactRequestCode } from "./utils";
import { saveRequest } from "./MessagePreviewUtils";
import { Button } from "../ui/button";
import { DynamicFormSchema, baseFormSchema, FormDataType } from "./ContactTypes";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState<FormDataType | null>(null);
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

  const handleFormSubmit = (data: DynamicFormSchema) => {
    setIsSubmitting(true);
    setFormData(data as FormDataType);
    
    // Generate a unique request code
    const newRequestCode = generateContactRequestCode();
    setRequestCode(newRequestCode);
    
    // Create a preview of the formatted message
    setShowPreview(true);
  };

  const handleConfirmSubmission = () => {
    if (formData && requestCode) {
      // Save request
      saveRequest(formData, requestCode);
      
      // Simulate API call
      setTimeout(() => {
        // Hide preview, show success toast
        setShowPreview(false);
        toast.success(`Pedido ${requestCode} enviado com sucesso! Entraremos em contato em breve.`);
        
        // Reset form state
        form.reset();
        setFormData(null);
        setIsSubmitting(false);
      }, 1500);
    }
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
    <section id="contato" className="section-container bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Entre em <span className="text-mk-orange">Contato</span></h2>
          <p className="section-subtitle">
            Estamos prontos para transformar suas ideias em resultados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="contrast-card p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Solicite um Orçamento</h3>
              
              <ContactForm 
                isSubmitting={isSubmitting} 
                form={form}
                onSubmit={handleFormSubmit} 
              />
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ContactInfoSection onScheduleClick={openScheduler} />
            
            {/* Admin Link */}
            <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Área Administrativa</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Visualize e gerencie os pedidos de orçamento</p>
                </div>
                <Link to="/pedidos">
                  <Button variant="outline" className="flex items-center gap-2 rounded-lg">
                    <ClipboardList size={16} />
                    Ver Pedidos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Preview Modal */}
      {showPreview && formData && requestCode && (
        <MessagePreview
          formData={formData}
          requestCode={requestCode}
          onClose={closePreview}
          onConfirm={handleConfirmSubmission}
        />
      )}

      {showScheduler && <AppointmentScheduler onClose={closeScheduler} />}
    </section>
  );
};

export default Contact;
