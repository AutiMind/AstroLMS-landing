import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'medium',
  showText = true 
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const textSizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 48 48"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer hexagonal crystal */}
          <path
            d="M24 2 L36 10 L36 26 L24 34 L12 26 L12 10 Z"
            fill="url(#crystal-gradient)"
            stroke="url(#border-gradient)"
            strokeWidth="1.5"
            className="drop-shadow-lg"
          />
          
          {/* Inner neural network pattern */}
          <g opacity="0.9">
            {/* Central node */}
            <circle cx="24" cy="18" r="2.5" fill="#ffffff" className="animate-pulse" />
            
            {/* Neural connections */}
            <path
              d="M24 18 L18 12 M24 18 L30 12 M24 18 L16 22 M24 18 L32 22 M24 18 L20 28 M24 18 L28 28"
              stroke="#ffffff"
              strokeWidth="1"
              opacity="0.6"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            
            {/* Outer nodes */}
            <circle cx="18" cy="12" r="1.5" fill="#ffffff" opacity="0.8" />
            <circle cx="30" cy="12" r="1.5" fill="#ffffff" opacity="0.8" />
            <circle cx="16" cy="22" r="1.5" fill="#ffffff" opacity="0.8" />
            <circle cx="32" cy="22" r="1.5" fill="#ffffff" opacity="0.8" />
            <circle cx="20" cy="28" r="1.5" fill="#ffffff" opacity="0.8" />
            <circle cx="28" cy="28" r="1.5" fill="#ffffff" opacity="0.8" />
          </g>
          
          {/* Subtle glow effect */}
          <path
            d="M24 2 L36 10 L36 26 L24 34 L12 26 L12 10 Z"
            fill="none"
            stroke="url(#glow-gradient)"
            strokeWidth="0.5"
            opacity="0.6"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="crystal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            
            <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            
            <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            
            {/* Subtle animation filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
        
        {/* Rotating orbital ring */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
          <svg
            viewBox="0 0 48 48"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="18"
              r="14"
              fill="none"
              stroke="url(#orbit-gradient)"
              strokeWidth="0.5"
              opacity="0.4"
              strokeDasharray="2 4"
            />
            <defs>
              <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" opacity="0" />
                <stop offset="50%" stopColor="#6366f1" opacity="1" />
                <stop offset="100%" stopColor="#8b5cf6" opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-white ${textSizeClasses[size]} leading-tight`}>
            AstroLMS
          </span>
          <span className="text-xs text-blue-200 opacity-80 -mt-1">
            AI-enhanced Learning
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;