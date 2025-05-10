
import React from "react";

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
  // Size mapping
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
    xl: "h-12",
  };

  // Text only variant
  if (variant === "text") {
    return (
      <div className={`flex items-center ${className}`}>
        <span className={`font-bold text-${size} ${colorMode === "color" ? "text-mk-orange" : (colorMode === "white" ? "text-white" : "text-black")}`}>
          MK
        </span>
        <span className={`font-medium text-${size} ${colorMode === "color" ? "text-black" : (colorMode === "white" ? "text-white" : "text-black")}`}>
          Creative Lab
        </span>
      </div>
    );
  }

  // Full logo (default)
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex flex-col items-start justify-center">
        <span className={`font-bold text-lg leading-tight ${colorMode === "color" ? "text-mk-orange" : (colorMode === "white" ? "text-white" : "text-black")}`}>
          MK
        </span>
        <span className={`font-medium text-sm leading-tight ${colorMode === "color" ? "text-black" : (colorMode === "white" ? "text-white" : "text-black")}`}>
          Creative Lab
        </span>
      </div>
    </div>
  );
};

export default Logo;
