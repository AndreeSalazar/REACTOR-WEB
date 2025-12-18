import React, { useEffect, useState } from "react";
import { DirectXLogo, VulkanLogo } from "./ui/TechLogos";
import GlitchText from "./ui/GlitchText";
import { useLanguage } from "@/context/LanguageContext";

export default function Equation() {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("equation-container");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="equation-container" className="relative py-20">
      {/* Connecting Beams */}
      <div className={`absolute top-1/2 left-0 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-1000 ${active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} style={{ transformOrigin: 'right' }} />
      <div className={`absolute top-1/2 right-0 w-1/2 h-1 bg-gradient-to-l from-transparent via-lime-500 to-transparent transition-all duration-1000 ${active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} style={{ transformOrigin: 'left' }} />

      <div className="flex flex-col items-center justify-center gap-8 md:flex-row relative z-10">
        
        {/* ADead-GPU / DirectX Card */}
        <div className={`transform transition-all duration-1000 ${active ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
          <div className="group relative w-64 h-64 perspective-1000">
             <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-xl group-hover:bg-blue-600/30 transition-all duration-500 animate-pulse-slow" />
             <div className="relative h-full w-full rounded-3xl border border-blue-500/30 bg-black/60 backdrop-blur-xl p-6 flex flex-col items-center justify-center gap-4 transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-inner">
                   <DirectXLogo className="w-16 h-16 opacity-90 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </div>
                <div className="text-center">
                   <h3 className="text-2xl font-bold text-blue-400">{t('equation.adadgpu')}</h3>
                   <div className="text-xs font-mono text-blue-300/60 uppercase tracking-widest mt-1">{t('equation.dx12research')}</div>
                </div>
             </div>
          </div>
        </div>

        {/* The Operator */}
        <div className={`text-6xl font-black text-white/20 transition-all duration-1000 delay-300 ${active ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
           <span className="animate-pulse">+</span>
        </div>

        {/* REACTOR / Vulkan Card */}
        <div className={`transform transition-all duration-1000 ${active ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
          <div className="group relative w-64 h-64 perspective-1000">
             <div className="absolute inset-0 bg-red-600/20 rounded-3xl blur-xl group-hover:bg-red-600/30 transition-all duration-500 animate-pulse-slow" />
             <div className="relative h-full w-full rounded-3xl border border-red-500/30 bg-black/60 backdrop-blur-xl p-6 flex flex-col items-center justify-center gap-4 transition-transform duration-500 group-hover:-rotate-y-12 group-hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20 shadow-inner">
                   <VulkanLogo className="w-16 h-16 opacity-90 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                </div>
                <div className="text-center">
                   <h3 className="text-2xl font-bold text-red-500">{t('equation.reactor')}</h3>
                   <div className="text-xs font-mono text-red-400/60 uppercase tracking-widest mt-1">{t('equation.vulkanframework')}</div>
                </div>
             </div>
          </div>
        </div>

        {/* The Result Operator */}
        <div className={`text-6xl font-black text-white/20 transition-all duration-1000 delay-500 ${active ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
           <span className="animate-pulse">=</span>
        </div>

        {/* Stack-GPU-OP Result Card */}
        <div className={`transform transition-all duration-1000 delay-700 ${active ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-10"}`}>
           <div className="group relative w-72 h-72">
              {/* Spinning Glow Ring */}
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-transparent border-t-lime-400/50 border-r-blue-400/50 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-lime-500/20 rounded-3xl blur-2xl animate-pulse" />
              
              <div className="relative h-full w-full rounded-3xl border border-white/20 bg-black/80 backdrop-blur-2xl p-8 flex flex-col items-center justify-center gap-6 overflow-hidden shadow-[0_0_50px_rgba(132,204,22,0.15)] hover:shadow-[0_0_80px_rgba(132,204,22,0.3)] transition-all duration-500">
                 
                 {/* Holographic Shine */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                 <div className="relative">
                    <div className="absolute inset-0 animate-ping opacity-20 bg-lime-400 rounded-full blur-xl" />
                    <div className="relative flex gap-2">
                       <VulkanLogo className="w-10 h-10" />
                       <DirectXLogo className="w-10 h-10" />
                    </div>
                 </div>
                 
                 <div className="text-center relative z-10">
                    <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-lime-400 animate-gradient-x">
                       {t('equation.stackgpuop')}
                    </h3>
                    <div className="mt-2 text-xs font-mono text-zinc-400 uppercase tracking-widest border-t border-white/10 pt-2">
                       <GlitchText text={t('equation.nextgen')} />
                    </div>
                 </div>

                 {/* Tech Specs */}
                 <div className="flex gap-2 text-[10px] text-zinc-500 font-mono">
                    <span className="bg-zinc-900/50 px-2 py-1 rounded border border-white/5">C++20</span>
                    <span className="bg-zinc-900/50 px-2 py-1 rounded border border-white/5">VK 1.3</span>
                    <span className="bg-zinc-900/50 px-2 py-1 rounded border border-white/5">DX12</span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
