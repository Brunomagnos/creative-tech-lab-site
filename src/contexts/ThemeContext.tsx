
import React, { createContext, useContext, useState } from "react";

type Theme = "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Since we're removing the light/dark functionality, we'll just use "light" as the fixed theme
  const [theme] = useState<Theme>("light");

  // This is now a no-op function since we're removing theme toggling
  const toggleTheme = () => {
    // No-op since we're not allowing theme changes anymore
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
