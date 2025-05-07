
import { useState } from "react";
import { toast } from "sonner";
import AppointmentScheduler from "../AppointmentScheduler";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MessagePreview from "./MessagePreview";
import { generateRequestCode } from "../../utils/serviceUtils";

export type FormDataType = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  customFields?: Record<string, string>;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState<FormDataType | null>(null);
  const [requestCode, setRequestCode] = useState<string | null>(null);

  const handleFormSubmit = (data: FormDataType) => {
    setIsSubmitting(true);
    setFormData(data);
    
    // Generate a unique request code
    const newRequestCode = generateRequestCode();
    setRequestCode(newRequestCode);
    
    // Create a preview of the formatted message
    setShowPreview(true);
  };

  const handleConfirmSubmission = () => {
    // Simulate API call
    setTimeout(() => {
      // Hide preview, show success toast
      setShowPreview(false);
      toast.success(`Pedido ${requestCode} enviado com sucesso! Entraremos em contato em breve.`);
      
      // Reset form state
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
            <div className="contrast-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Solicite um Orçamento</h3>
              
              <ContactForm 
                isSubmitting={isSubmitting} 
                onSubmit={handleFormSubmit} 
              />
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ContactInfo onScheduleClick={openScheduler} />
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
