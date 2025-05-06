
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

  // Logo icon only variant
  if (variant === "icon") {
    return (
      <div className={`flex items-center ${sizeClasses[size]} ${className}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-full w-auto`}
        >
          {/* Simplified 3D Printer Icon */}
          <g>
            {/* Printer Base */}
            <rect 
              x="20" 
              y="70" 
              width="60" 
              height="15" 
              fill={actualColorMode === "color" ? "#000000" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
            />
            
            {/* Printer Columns */}
            <rect 
              x="25" 
              y="30" 
              width="10" 
              height="40" 
              fill={actualColorMode === "color" ? "#000000" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
            />
            <rect 
              x="65" 
              y="30" 
              width="10" 
              height="40" 
              fill={actualColorMode === "color" ? "#000000" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
            />
            
            {/* Printer Top */}
            <rect 
              x="20" 
              y="20" 
              width="60" 
              height="10" 
              fill={actualColorMode === "color" ? "#000000" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
            />
            
            {/* Print Head */}
            <rect 
              x="40" 
              y="40" 
              width="20" 
              height="10" 
              fill={actualColorMode === "color" ? "#FF5A00" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
            />
            
            {/* Orange Filament */}
            <path 
              d="M50 40C50 40 60 35 70 40" 
              stroke={actualColorMode === "color" ? "#FF5A00" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    );
  }

  // Text only variant
  if (variant === "text") {
    return (
      <div className={`flex items-center ${className}`}>
        <span className={`font-bold text-${size} ${actualColorMode === "color" ? "text-mk-orange" : (actualColorMode === "white" ? "text-white" : "text-black")}`}>
          MK
        </span>
        <span className={`font-medium text-${size} ${actualColorMode === "color" ? "text-black dark:text-white" : (actualColorMode === "white" ? "text-white" : "text-black")}`}>
          Creative Lab
        </span>
      </div>
    );
  }

  // Full logo (default)
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto`}
      >
        {/* Simplified 3D Printer Icon */}
        <g>
          {/* Printer Base */}
          <rect 
            x="20" 
            y="70" 
            width="60" 
            height="15" 
            fill={actualColorMode === "color" ? "#000000" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
          />
          
          {/* Printer Columns */}
          <rect 
            x="25" 
            y="30" 
            width="10" 
            height="40" 
            fill={actualColorMode === "color" ? "#000000" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
          />
          <rect 
            x="65" 
            y="30" 
            width="10" 
            height="40" 
            fill={actualColorMode === "color" ? "#000000" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
          />
          
          {/* Printer Top */}
          <rect 
            x="20" 
            y="20" 
            width="60" 
            height="10" 
            fill={actualColorMode === "color" ? "#000000" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
          />
          
          {/* Print Head */}
          <rect 
            x="40" 
            y="40" 
            width="20" 
            height="10" 
            fill={actualColorMode === "color" ? "#FF5A00" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
          />
          
          {/* Orange Filament */}
          <path 
            d="M50 40C50 40 60 35 70 40" 
            stroke={actualColorMode === "color" ? "#FF5A00" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
      <div className="flex flex-col items-start justify-center">
        <span className={`font-bold text-lg leading-tight ${actualColorMode === "color" ? "text-mk-orange" : (actualColorMode === "white" ? "text-white" : "text-black")}`}>
          MK
        </span>
        <span className={`font-medium text-sm leading-tight ${actualColorMode === "color" ? (theme === "dark" ? "text-white" : "text-black") : (actualColorMode === "white" ? "text-white" : "text-black")}`}>
          Creative Lab
        </span>
      </div>
    </div>
  );
};

export default Logo;
