
import { Sun } from "lucide-react";

const ThemeToggle = () => {
  return (
    <button
      className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-sm"
      aria-label="Light mode"
    >
      <Sun size={20} className="text-yellow-400" />
    </button>
  );
};

export default ThemeToggle;
