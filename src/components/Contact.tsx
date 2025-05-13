import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AppointmentScheduler from "./AppointmentScheduler";
import { baseFormSchema, DynamicFormSchema, FormDataType } from "./Contact/ContactTypes";
import ContactForm from "./Contact/ContactForm";
import ContactInfoSection from "./Contact/ContactInfoSection";
import MessagePreview from "./Contact/MessagePreview";
import { generateContactRequestCode, saveRequestToStorage } from "./Contact/utils";
import AdminLink from "./Contact/AdminLink";

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
    
    // Show message preview
    setShowPreview(true);
  };

  const handleConfirmSubmission = () => {
    // Simulate API call
    setTimeout(() => {
      // Hide preview, show success toast
      setShowPreview(false);
      toast.success(`Pedido ${requestCode} enviado com sucesso! Entraremos em contato em breve.`);
      
      // Reset form
      form.reset();
      setFormData(null);
      setIsSubmitting(false);
    }, 1500);
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
              
              <ContactForm 
                isSubmitting={isSubmitting} 
                form={form}
                onSubmit={handleFormSubmit} 
              />
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ContactInfoSection onScheduleClick={openScheduler} />
            <AdminLink />
          </div>
        </div>
      </div>

      {/* Message Preview Modal */}
      {showPreview && formData && (
        <MessagePreview
          formData={formData}
          requestCode={requestCode || ''}
          onClose={closePreview}
          onConfirm={handleConfirmSubmission}
        />
      )}

      {showScheduler && <AppointmentScheduler onClose={closeScheduler} />}
    </section>
  );
};

export default Contact;
