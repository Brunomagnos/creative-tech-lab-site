
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Check, X, Search, Trash, RefreshCw } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface RequestData {
  id: string;
  service: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  customFields: Record<string, string>;
  date: string;
}

const RequestHistory = () => {
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  // Load requests on component mount
  useEffect(() => {
    loadRequests();
  }, []);
  
  const loadRequests = () => {
    setIsLoading(true);
    
    try {
      // Get requests from localStorage
      const savedRequestsString = localStorage.getItem('mkRequests');
      const savedRequests = savedRequestsString ? JSON.parse(savedRequestsString) : [];
      
      // Sort requests by date (newest first)
      const sortedRequests = savedRequests.sort((a: RequestData, b: RequestData) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      
      setRequests(sortedRequests);
    } catch (error) {
      console.error("Erro ao carregar pedidos:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm(`Tem certeza que deseja excluir o pedido #${id}?`)) {
      // Filter out the request to delete
      const updatedRequests = requests.filter(req => req.id !== id);
      
      // Save back to localStorage
      localStorage.setItem('mkRequests', JSON.stringify(updatedRequests));
      
      // Update state
      setRequests(updatedRequests);
    }
  };
  
  const handleClearAll = () => {
    if (window.confirm("Tem certeza que deseja excluir TODOS os pedidos? Esta ação não pode ser revertida.")) {
      // Clear localStorage
      localStorage.removeItem('mkRequests');
      
      // Update state
      setRequests([]);
    }
  };
  
  const filteredRequests = requests.filter(request => {
    const searchLower = searchTerm.toLowerCase();
    return (
      request.id.toLowerCase().includes(searchLower) ||
      request.name.toLowerCase().includes(searchLower) ||
      request.email.toLowerCase().includes(searchLower) ||
      request.service.toLowerCase().includes(searchLower)
    );
  });
  
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "dd/MM/yyyy HH:mm", { locale: ptBR });
    } catch {
      return "Data inválida";
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Histórico de Pedidos</h1>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Buscar por código, nome ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <Button 
            onClick={loadRequests}
            variant="outline"
            className="flex items-center gap-2"
          >
            <RefreshCw size={16} />
            Atualizar
          </Button>
          
          <Button 
            onClick={handleClearAll}
            variant="destructive"
            className="flex items-center gap-2"
          >
            <Trash size={16} />
            Limpar Tudo
          </Button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-current border-r-transparent" role="status">
            <span className="sr-only">Carregando...</span>
          </div>
          <p className="mt-4">Carregando pedidos...</p>
        </div>
      ) : requests.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-lg">Nenhum pedido encontrado.</p>
          <p className="text-gray-500">Os pedidos aparecerão aqui quando forem realizados.</p>
        </div>
      ) : (
        <>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Código
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Data
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Serviço
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Contato
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {request.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {formatDate(request.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {request.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {request.service}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div>{request.email}</div>
                        <div className="text-gray-500 dark:text-gray-400">{request.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <button 
                          onClick={() => handleDelete(request.id)}
                          className="text-red-500 hover:text-red-700"
                          title="Excluir pedido"
                        >
                          <Trash size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-4 text-gray-500 text-sm text-right">
            {filteredRequests.length} pedidos encontrados
          </div>
        </>
      )}
    </div>
  );
};

export default RequestHistory;
