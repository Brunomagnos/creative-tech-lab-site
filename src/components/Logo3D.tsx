
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Logo3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let frameCount = 0;
    
    // Set canvas dimensions
    canvas.width = 200;
    canvas.height = 200;
    
    // Colors based on theme
    const textColor = theme === 'dark' ? '#FFFFFF' : '#000000';
    const printerColor = theme === 'dark' ? '#444444' : '#222222';
    const accentColor = '#FF5A00'; // MK orange
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate animation progress
      const progress = (frameCount % 120) / 120;
      
      // Draw 3D printer base
      ctx.fillStyle = printerColor;
      ctx.fillRect(40, 140, 120, 30);
      
      // Draw printer column
      ctx.fillRect(40, 60, 15, 80);
      ctx.fillRect(145, 60, 15, 80);
      ctx.fillRect(40, 45, 120, 15);
      
      // Draw print head
      ctx.fillStyle = accentColor;
      ctx.fillRect(50 + 80 * progress, 60, 20, 15);
      
      // Connect print head to top
      ctx.beginPath();
      ctx.moveTo(60 + 80 * progress, 60);
      ctx.lineTo(60 + 80 * progress, 45);
      ctx.strokeStyle = printerColor;
      ctx.lineWidth = 5;
      ctx.stroke();
      
      // Draw printing text (MK)
      ctx.fillStyle = textColor;
      ctx.font = 'bold 40px Montserrat';
      
      // Only draw the part that should be "printed" so far
      if (progress < 0.5) {
        // Drawing M (first half of animation)
        const mProgress = progress * 2; // rescale 0-0.5 to 0-1
        ctx.fillText('M', 60, 120);
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillText('K', 105, 120);
      } else {
        // Drawing K (second half of animation)
        ctx.fillText('M', 60, 120);
        ctx.fillText('K', 105, 120);
      }
      
      // Draw "Creative Lab" text
      ctx.fillStyle = textColor;
      ctx.font = '14px Inter';
      ctx.fillText('Creative Lab', 70, 140);
      
      frameCount++;
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);
  
  return (
    <div className={`${className} flex items-center justify-center`}>
      <canvas ref={canvasRef} className="w-full max-w-[200px] mx-auto" />
    </div>
  );
};

export default Logo3D;
