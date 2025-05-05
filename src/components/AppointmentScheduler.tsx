
import { useState } from "react";
import { Calendar } from "lucide-react";
import { toast } from "sonner";

const AppointmentScheduler = ({ onClose }: { onClose: () => void }) => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Generate available dates (next 14 days excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends (0 is Sunday, 6 is Saturday)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        const formattedDate = date.toISOString().split('T')[0];
        const displayDate = date.toLocaleDateString('pt-BR', { 
          day: '2-digit', 
          month: '2-digit',
          weekday: 'short'
        });
        
        dates.push({ value: formattedDate, display: displayDate });
      }
    }
    
    return dates;
  };

  // Generate available time slots
  const generateTimeSlots = () => {
    return [
      "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
    ];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Consulta agendada com sucesso! Entraremos em contato para confirmar.");
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="text-mk-orange" />
            <h2 className="text-xl font-bold">Agendar Consulta</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Serviço de Interesse
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange"
              required
            >
              <option value="">Selecione um serviço</option>
              <option value="audiovisual">Produção Audiovisual</option>
              <option value="marketing">Marketing & Performance</option>
              <option value="automacao">Automação</option>
              <option value="impressao3d">Impressão 3D</option>
              <option value="pos-producao">Pós-Produção</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Data
            </label>
            <select
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange"
              required
            >
              <option value="">Selecione uma data</option>
              {generateAvailableDates().map((date) => (
                <option key={date.value} value={date.value}>
                  {date.display}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Horário
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mk-orange"
              required
              disabled={!date}
            >
              <option value="">Selecione um horário</option>
              {generateTimeSlots().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
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
                Agendando...
              </>
            ) : (
              'Agendar Consulta'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentScheduler;
