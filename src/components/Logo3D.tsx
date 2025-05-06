
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Logo3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 200;
    canvas.height = 200;
    
    // Colors based on theme
    const textColor = theme === 'dark' ? '#FFFFFF' : '#000000';
    const printerColor = theme === 'dark' ? '#444444' : '#222222';
    const accentColor = '#FF5A00'; // MK orange
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw 3D printer base
    ctx.fillStyle = printerColor;
    ctx.fillRect(40, 140, 120, 30);
    
    // Draw printer column
    ctx.fillRect(40, 60, 15, 80);
    ctx.fillRect(145, 60, 15, 80);
    ctx.fillRect(40, 45, 120, 15);
    
    // Draw print head at a fixed position (middle)
    ctx.fillStyle = accentColor;
    ctx.fillRect(90, 60, 20, 15);
    
    // Connect print head to top
    ctx.beginPath();
    ctx.moveTo(100, 60);
    ctx.lineTo(100, 45);
    ctx.strokeStyle = printerColor;
    ctx.lineWidth = 5;
    ctx.stroke();
    
    // Draw MK text
    ctx.fillStyle = textColor;
    ctx.font = 'bold 40px Montserrat';
    ctx.fillText('M', 60, 120);
    ctx.fillText('K', 105, 120);
    
    // Draw "Creative Lab" text
    ctx.fillStyle = textColor;
    ctx.font = '14px Inter';
    ctx.fillText('Creative Lab', 70, 140);
  }, [theme]);
  
  return (
    <div className={`${className} flex items-center justify-center`}>
      <canvas ref={canvasRef} className="w-full max-w-[200px] mx-auto" />
    </div>
  );
};

export default Logo3D;
