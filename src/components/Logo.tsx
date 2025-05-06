
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

interface LogoProps {
  variant?: "full" | "icon" | "text";
  colorMode?: "color" | "black" | "white" | "auto";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  variant = "full",
  colorMode = "color",
  size = "md",
  className = "",
}) => {
  const { theme } = useTheme();
  
  // Auto mode will choose based on current theme
  const actualColorMode = colorMode === "auto" 
    ? (theme === "dark" ? "white" : "color")
    : colorMode;

  // Size mapping
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
    xl: "h-12",
  };

  // Color definitions
  const colors = {
    color: {
      primary: "text-mk-black",
      accent: "text-mk-orange",
      secondary: "text-white",
    },
    black: {
      primary: "text-black",
      accent: "text-black",
      secondary: "text-black",
    },
    white: {
      primary: "text-white",
      accent: "text-white",
      secondary: "text-white",
    },
  };

  // Logo icon only variant
  if (variant === "icon") {
    return (
      <div className={`flex items-center ${sizeClasses[size]} ${className}`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-full w-auto`}
        >
          <rect 
            width="40" 
            height="40" 
            rx="8" 
            className={`fill-current ${colors[actualColorMode].primary}`}
          />
          <path
            d="M10 10L18 20L10 30M22 10L30 20L22 30"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`stroke-current ${colors[actualColorMode].accent}`}
          />
        </svg>
      </div>
    );
  }

  // Text only variant
  if (variant === "text") {
    return (
      <div className={`flex items-center ${className}`}>
        <span className={`font-bold text-${size} ${colors[actualColorMode].accent}`}>
          MK
        </span>
        <span className={`font-medium text-${size} ${colors[actualColorMode].primary}`}>
          Creative Lab
        </span>
      </div>
    );
  }

  // Full logo (default)
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto`}
      >
        <rect 
          width="40" 
          height="40" 
          rx="8" 
          className={`fill-current ${colors[actualColorMode].primary}`}
        />
        <path
          d="M10 10L18 20L10 30M22 10L30 20L22 30"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-current ${colors[actualColorMode].accent}`}
        />
      </svg>
      <div className="flex flex-col items-start justify-center">
        <span className={`font-bold text-lg leading-tight ${colors[actualColorMode].accent}`}>
          MK
        </span>
        <span className={`font-medium text-sm leading-tight ${colors[actualColorMode].primary}`}>
          Creative Lab
        </span>
      </div>
    </div>
  );
};

export default Logo;
