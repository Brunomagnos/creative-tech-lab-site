
import { useState } from "react";
import { FormDataType } from "./ContactTypes";
import MessagePreviewDetails from "./MessagePreviewDetails";
import MessagePreviewActions from "./MessagePreviewActions";
import MessagePreviewFooter from "./MessagePreviewFooter";

interface MessagePreviewProps {
  formData: FormDataType;
  requestCode: string;
  onClose: () => void;
  onConfirm: () => void;
}

const MessagePreview = ({ formData, requestCode, onClose, onConfirm }: MessagePreviewProps) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-card text-card-foreground rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Pedido #{requestCode}</h3>
          <button 
            onClick={onClose}
            className="text-foreground/70 hover:text-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Contact and message details */}
        <MessagePreviewDetails formData={formData} />
        
        <div className="mb-4">
          <p className="text-sm text-foreground/70">Escolha como deseja continuar:</p>
        </div>
        
        {/* Action buttons */}
        <MessagePreviewActions 
          formData={formData} 
          requestCode={requestCode} 
        />
        
        {/* Footer buttons */}
        <MessagePreviewFooter onClose={onClose} onConfirm={onConfirm} />
      </div>
    </div>
  );
};

export default MessagePreview;
