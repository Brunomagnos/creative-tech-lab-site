
import { Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme } = useTheme();

  return (
    <button
      className="p-2 rounded-full bg-white hover:bg-white/80 transition-colors"
      aria-label="Light mode"
    >
      <Sun size={20} className="text-yellow-400" />
    </button>
  );
};

export default ThemeToggle;
