import React, { useEffect, useState } from "react";

type ReactorAnimatedProps = {
  className?: string;
  spinOuter?: number;
  spinMiddle?: number;
  spinInner?: number;
  pulseDur?: number;
  glowPulseDur?: number;
  ringColorA?: string;
  ringColorB?: string;
  glowA?: string;
  glowB?: string;
  textColorA?: string;
  textColorB?: string;
  glowIntensity?: number;
};

export default function ReactorAnimated({
  className = "mx-auto h-auto w-[540px] max-w-full",
  spinOuter = 20,
  spinMiddle = 15,
  spinInner = 5,
  pulseDur = 2,
  glowPulseDur = 1.5,
  ringColorA = "#111827", 
  ringColorB = "#374151",
  glowA = "#0ea5e9",
  glowB = "#38bdf8",
  textColorA = "#e0f2fe",
  textColorB = "#0ea5e9",
  glowIntensity = 1,
}: ReactorAnimatedProps) {
  const [mounted, setMounted] = useState(false);
  const [randomArcs, setRandomArcs] = useState<React.JSX.Element[]>([]);
  const [particles, setParticles] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    setMounted(true);
    
    // Data Particles (Bits of data flowing into the core)
    const initialParticles = Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      const delay = Math.random() * 2;
      return (
        <g key={`p-${i}`} transform={`rotate(${angle} 0 0)`}>
           <rect x="100" y="-2" width="12" height="4" fill={glowB} opacity={0}>
              <animate attributeName="x" values="250;50" dur={`${2 + Math.random()}s`} begin={`${delay}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0" dur={`${2 + Math.random()}s`} begin={`${delay}s`} repeatCount="indefinite" />
              <animate attributeName="width" values="12;2;12" dur={`${2 + Math.random()}s`} begin={`${delay}s`} repeatCount="indefinite" />
           </rect>
        </g>
      );
    });
    setParticles(initialParticles);

    const interval = setInterval(() => {
       const arcs = Array.from({ length: 4 }).map((_, i) => (
         <path 
            key={Date.now() + i}
            d={`M ${Math.random() * 60 - 30} ${Math.random() * 60 - 30} L ${Math.random() * 100 - 50} ${Math.random() * 100 - 50}`}
            fill="none"
            stroke={glowA}
            strokeWidth="2"
            opacity="0"
         >
           <animate attributeName="opacity" values="0;1;0" dur="0.1s" begin={`${Math.random() * 0.3}s`} />
         </path>
       ));
       setRandomArcs(arcs);
    }, 1500);
    return () => clearInterval(interval);
  }, [glowA, glowB]);

  const clamp = (v: number, min = 0.2, max = 2) => Math.max(min, Math.min(max, v));
  const gi = clamp(glowIntensity);
  
  // HUD Ticks
  const hudTicks = Array.from({ length: 60 }).map((_, i) => {
    const isMajor = i % 5 === 0;
    return (
      <rect
        key={i}
        x="-1"
        y={isMajor ? "-280" : "-275"}
        width={isMajor ? "2" : "1"}
        height={isMajor ? "15" : "8"}
        transform={`rotate(${i * 6} 0 0)`}
        fill={isMajor ? glowB : ringColorB}
        opacity={isMajor ? 0.8 : 0.5}
      />
    );
  });

  // Hexagonal Ring Path Generator
  const createHexagon = (r: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60) * (Math.PI / 180);
      const x = (r * Math.cos(angle)).toFixed(3);
      const y = (r * Math.sin(angle)).toFixed(3);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };

  return (
    <div className={`relative flex items-center justify-center transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>
      {/* Dynamic Background Field */}
      <div 
        className="absolute inset-0 rounded-full opacity-30 blur-[60px]"
        style={{ 
          background: `conic-gradient(from 0deg, ${ringColorA}, ${glowA}, ${ringColorA})`,
          animation: `spin ${spinOuter * 2}s linear infinite`,
          transform: 'scale(1.2)'
        }} 
      />
      <div 
        className="absolute inset-0 rounded-full blur-[90px]"
        style={{ 
          background: `radial-gradient(circle, ${glowA} 0%, transparent 60%)`,
          opacity: 0.5 * gi,
          animation: `pulse ${pulseDur}s ease-in-out infinite`
        }} 
      />

      <svg className={className} viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quantum Reactor HUD">
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={glowA} stopOpacity="0" />
            <stop offset="50%" stopColor={glowA} stopOpacity="0.5" />
            <stop offset="100%" stopColor={glowA} stopOpacity="0" />
          </linearGradient>
          
          <filter id="hudGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={3 * gi} result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <clipPath id="hexClip">
            <polygon points={createHexagon(200)} />
          </clipPath>
        </defs>

        <g transform="translate(300,350)">
          
          {/* HUD Layer (Static/Slow) */}
          <g className="svg-center">
             <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="120s" repeatCount="indefinite" />
             <circle cx="0" cy="0" r="285" fill="none" stroke={ringColorB} strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
             {hudTicks}
          </g>

          {/* Outer Hexagonal Frame */}
          <g className="svg-center" filter="url(#hudGlow)">
             <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur={`${spinOuter}s`} repeatCount="indefinite" />
             <polygon points={createHexagon(240)} fill="none" stroke={ringColorA} strokeWidth="20" opacity="0.8" strokeLinejoin="round" />
             <polygon points={createHexagon(240)} fill="none" stroke={glowB} strokeWidth="2" strokeDasharray="20 40" opacity="0.6" />
             
             {/* Nodes on Hexagon Corners */}
             {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <circle key={i} cx={240 * Math.cos(deg * Math.PI/180)} cy={240 * Math.sin(deg * Math.PI/180)} r="6" fill={ringColorB} stroke={glowA} strokeWidth="2" />
             ))}
          </g>

          {/* Middle Triangular Field */}
          <g className="svg-center">
             <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={`${spinMiddle}s`} repeatCount="indefinite" />
             <polygon points="0,-180 155.8,90 -155.8,90" fill="none" stroke={ringColorB} strokeWidth="4" opacity="0.5" />
             <polygon points="0,180 -155.8,-90 155.8,-90" fill="none" stroke={ringColorB} strokeWidth="4" opacity="0.5" />
             
             {/* Data Streams */}
             {particles}
          </g>

          {/* Core Structure (Polygonal) */}
          <g className="svg-center" filter="url(#hudGlow)">
             <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur={`${spinInner}s`} repeatCount="indefinite" />
             <polygon points={createHexagon(80)} fill={ringColorA} stroke={glowA} strokeWidth="4" opacity="0.9" />
             <polygon points={createHexagon(60)} fill="none" stroke={glowB} strokeWidth="2" />
             
             {/* Inner Triangle (Vulkan Reference) */}
             <polygon points="0,-40 34.6,20 -34.6,20" fill={glowA} opacity="0.8">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="0.5s" repeatCount="indefinite" />
             </polygon>
          </g>
          
          {/* Energy Core (Singularity) */}
          <g filter="url(#hudGlow)">
             <circle cx="0" cy="0" r="30" fill={glowA} opacity={0.4}>
                <animate attributeName="r" values="28;32;28" dur="0.2s" repeatCount="indefinite" />
             </circle>
             {randomArcs}
          </g>

          {/* Text Overlay */}
          <g transform="translate(0, 0)">
             {/* Floating Numbers */}
             <text x="180" y="-180" fontFamily="monospace" fontSize="12" fill={glowB} opacity="0.7">
                SYS.RDY
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
             </text>
             <text x="-220" y="100" fontFamily="monospace" fontSize="10" fill={ringColorB} opacity="0.7">
                VULKAN.API.1.4
             </text>
          </g>
        </g>

        {/* Main Title - HUD Style */}
        <g transform="translate(0, 40)">
           <text x="300" y="520" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="70" fill={textColorA} textAnchor="middle" letterSpacing="10" filter="url(#hudGlow)">
             REACTOR
             <animate attributeName="letter-spacing" values="10;12;10" dur={`${pulseDur * 2}s`} repeatCount="indefinite" />
           </text>
           <rect x="180" y="535" width="240" height="2" fill={glowB} opacity="0.5">
              <animate attributeName="width" values="0;240" dur="1s" fill="freeze" />
           </rect>
           <text x="300" y="560" fontFamily="monospace" fontSize="16" fill={textColorB} textAnchor="middle" letterSpacing="4" opacity="0.8">
             [ QUANTUM CORE ONLINE ]
           </text>
        </g>
        
        {/* Holographic Projection Base */}
        <path d="M 200 650 L 400 650 L 350 680 L 250 680 Z" fill={ringColorA} opacity="0.6" />
        <path d="M 220 650 L 300 350 L 380 650" fill="url(#beamGradient)" opacity="0.2" style={{ mixBlendMode: 'screen' }} />

      </svg>
    </div>
  );
}
