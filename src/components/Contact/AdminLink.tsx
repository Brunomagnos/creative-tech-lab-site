
import { Link } from "react-router-dom";
import { ClipboardList } from "lucide-react";
import { Button } from "../ui/button";

const AdminLink = () => {
  return (
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
  );
};

export default AdminLink;
