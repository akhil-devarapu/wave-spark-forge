import React, { useState } from 'react';

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'aurora' | 'grid' | 'glow' | 'dots' | 'waves';
  showVariantSelector?: boolean;
}

const AuroraBackground: React.FC<{ children?: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`relative min-h-screen overflow-hidden bg-background w-full ${className}`}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-90">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/60 via-purple-600/50 to-indigo-600/60"></div>
        </div>
        
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-80 animate-aurora1"
            style={{
              background: 'radial-gradient(ellipse 800px 600px at 50% 20%, rgba(59, 130, 246, 0.6) 0%, transparent 50%)'
            }}
          ></div>
          
          <div 
            className="absolute inset-0 opacity-70 animate-aurora2"
            style={{
              background: 'radial-gradient(ellipse 600px 400px at 80% 30%, rgba(139, 92, 246, 0.7) 0%, transparent 50%)'
            }}
          ></div>
          
          <div 
            className="absolute inset-0 opacity-60 animate-aurora3"
            style={{
              background: 'radial-gradient(ellipse 700px 500px at 20% 60%, rgba(236, 72, 153, 0.5) 0%, transparent 50%)'
            }}
          ></div>
          
          <div 
            className="absolute inset-0 opacity-50 animate-aurora4"
            style={{
              background: 'radial-gradient(ellipse 900px 300px at 60% 80%, rgba(34, 197, 94, 0.4) 0%, transparent 50%)'
            }}
          ></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20"></div>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const GridBackground: React.FC<{ children?: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`min-h-screen w-full bg-background relative ${className}`}>
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "hsl(var(--background))",
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border) / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border) / 0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 60%, hsl(var(--primary) / 0.1) 0%, hsl(var(--secondary) / 0.05) 40%, transparent 70%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const GlowBackground: React.FC<{ children?: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`min-h-screen w-full relative bg-background ${className}`}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)
          `,
          opacity: 0.6,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const DotsBackground: React.FC<{ children?: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`min-h-screen w-full bg-background relative ${className}`}>
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--muted-foreground) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const WavesBackground: React.FC<{ children?: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`min-h-screen w-full bg-background relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z"
            fill="hsl(var(--primary) / 0.1)"
            className="animate-pulse"
          />
          <path
            d="M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z"
            fill="hsl(var(--secondary) / 0.1)"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export const BackgroundComponent: React.FC<BackgroundProps> = ({ 
  children, 
  className = '', 
  variant = 'aurora',
  showVariantSelector = false
}) => {
  const [currentVariant, setCurrentVariant] = useState<string>(variant);

  const renderBackground = () => {
    switch (currentVariant) {
      case 'grid':
        return <GridBackground className={className}>{children}</GridBackground>;
      case 'glow':
        return <GlowBackground className={className}>{children}</GlowBackground>;
      case 'dots':
        return <DotsBackground className={className}>{children}</DotsBackground>;
      case 'waves':
        return <WavesBackground className={className}>{children}</WavesBackground>;
      case 'aurora':
      default:
        return <AuroraBackground className={className}>{children}</AuroraBackground>;
    }
  };

  return (
    <div className="relative">
      {renderBackground()}
      
      {showVariantSelector && (
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {['aurora', 'grid', 'glow', 'dots', 'waves'].map((bg) => (
            <button
              key={bg}
              onClick={() => setCurrentVariant(bg)}
              className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
                currentVariant === bg
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background/80 text-foreground border-border hover:bg-muted'
              }`}
            >
              {bg}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};