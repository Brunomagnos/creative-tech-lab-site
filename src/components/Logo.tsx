
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
          {/* 3D Printer + Camera Icon */}
          <g>
            {/* Camera Body */}
            <path 
              d="M65 45H25C20 45 15 50 15 55V75C15 80 20 85 25 85H65C70 85 75 80 75 75V55C75 50 70 45 65 45Z" 
              fill={actualColorMode === "color" ? "#1A2A36" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
            />
            
            {/* Camera Lens */}
            <circle 
              cx="45" 
              cy="65" 
              r="15" 
              fill={actualColorMode === "color" ? "#1A2A36" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")} 
              stroke={actualColorMode === "white" ? "#000000" : "#FFFFFF"} 
              strokeWidth="2"
            />
            <circle 
              cx="45" 
              cy="65" 
              r="10" 
              fill={actualColorMode === "color" ? "#000000" : (actualColorMode === "white" ? "#CCCCCC" : "#333333")} 
            />
            <circle 
              cx="42" 
              cy="62" 
              r="3" 
              fill={actualColorMode === "color" ? "#FFFFFF" : (actualColorMode === "white" ? "#FFFFFF" : "#FFFFFF")} 
              fillOpacity="0.5"
            />

            {/* 3D Printer top parts */}
            <rect 
              x="20" 
              y="15" 
              width="20" 
              height="20" 
              fill={actualColorMode === "color" ? "#1A2A36" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
            />
            <path 
              d="M55 35C55 25 47 15 35 15" 
              stroke={actualColorMode === "color" ? "#1A2A36" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
              strokeWidth="6"
              fill="none"
            />
            <rect 
              x="40" 
              y="25" 
              width="10" 
              height="10" 
              fill={actualColorMode === "color" ? "#FFFFFF" : (actualColorMode === "white" ? "#1A2A36" : "#FFFFFF")}
            />
            <rect 
              x="25" 
              y="25" 
              width="15" 
              height="5" 
              fill={actualColorMode === "color" ? "#1A2A36" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
            />

            {/* Orange flowing filament */}
            <path 
              d="M35 35C35 35 45 25 65 35C85 45 85 40 85 40" 
              stroke={actualColorMode === "color" ? "#FF5A00" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
              strokeWidth="6"
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
        <span className={`font-medium text-${size} ${actualColorMode === "color" ? "text-mk-black" : (actualColorMode === "white" ? "text-white" : "text-black")}`}>
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
        {/* 3D Printer + Camera Icon */}
        <g>
          {/* Camera Body */}
          <path 
            d="M65 45H25C20 45 15 50 15 55V75C15 80 20 85 25 85H65C70 85 75 80 75 75V55C75 50 70 45 65 45Z" 
            fill={actualColorMode === "color" ? "#1A2A36" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
          />
          
          {/* Camera Lens */}
          <circle 
            cx="45" 
            cy="65" 
            r="15" 
            fill={actualColorMode === "color" ? "#1A2A36" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")} 
            stroke={actualColorMode === "white" ? "#000000" : "#FFFFFF"} 
            strokeWidth="2"
          />
          <circle 
            cx="45" 
            cy="65" 
            r="10" 
            fill={actualColorMode === "color" ? "#000000" : (actualColorMode === "white" ? "#CCCCCC" : "#333333")} 
          />
          <circle 
            cx="42" 
            cy="62" 
            r="3" 
            fill={actualColorMode === "color" ? "#FFFFFF" : (actualColorMode === "white" ? "#FFFFFF" : "#FFFFFF")} 
            fillOpacity="0.5"
          />

          {/* 3D Printer top parts */}
          <rect 
            x="20" 
            y="15" 
            width="20" 
            height="20" 
            fill={actualColorMode === "color" ? "#1A2A36" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
          />
          <path 
            d="M55 35C55 25 47 15 35 15" 
            stroke={actualColorMode === "color" ? "#1A2A36" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
            strokeWidth="6"
            fill="none"
          />
          <rect 
            x="40" 
            y="25" 
            width="10" 
            height="10" 
            fill={actualColorMode === "color" ? "#FFFFFF" : (actualColorMode === "white" ? "#1A2A36" : "#FFFFFF")}
          />
          <rect 
            x="25" 
            y="25" 
            width="15" 
            height="5" 
            fill={actualColorMode === "color" ? "#1A2A36" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
          />

          {/* Orange flowing filament */}
          <path 
            d="M35 35C35 35 45 25 65 35C85 45 85 40 85 40" 
            stroke={actualColorMode === "color" ? "#FF5A00" : (actualColorMode === "white" ? "#FFFFFF" : "#000000")}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
      <div className="flex flex-col items-start justify-center">
        <span className={`font-bold text-lg leading-tight ${actualColorMode === "color" ? "text-mk-orange" : (actualColorMode === "white" ? "text-white" : "text-black")}`}>
          MK
        </span>
        <span className={`font-medium text-sm leading-tight ${actualColorMode === "color" ? (theme === "dark" ? "text-white" : "text-mk-black") : (actualColorMode === "white" ? "text-white" : "text-black")}`}>
          Creative Lab
        </span>
      </div>
    </div>
  );
};

export default Logo;
