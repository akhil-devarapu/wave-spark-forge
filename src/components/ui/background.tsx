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
    <div
      className={`relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform
            [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]
          `}
        ></div>
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