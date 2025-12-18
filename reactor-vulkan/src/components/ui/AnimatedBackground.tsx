import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full bg-black">
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black" />
      
      {/* Moving Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ backgroundSize: '50px 50px', opacity: 0.05 }} />
    </div>
  );
}
