import React from "react";

export default function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full text-lime-400 opacity-0 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 group-hover:opacity-70 group-hover:animate-pulse">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full text-blue-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-70 group-hover:animate-pulse animation-delay-75">
        {text}
      </span>
    </div>
  );
}
