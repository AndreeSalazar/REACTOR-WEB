import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Architecture() {
  const { t } = useLanguage();

  const LAYERS = [
    { level: 8, name: t('layer.scene'), desc: t('layer.scene'), type: "high" },
    { level: 7, name: t('layer.render'), desc: t('layer.render'), type: "high" },
    { level: 6, name: t('layer.sync'), desc: t('layer.sync'), type: "mid" },
    { level: 5, name: t('layer.cmd'), desc: t('layer.cmd'), type: "mid" },
    { level: 4, name: t('layer.desc'), desc: t('layer.desc'), type: "mid" },
    { level: 3, name: t('layer.pipe'), desc: t('layer.pipe'), type: "low" },
    { level: 2, name: t('layer.res'), desc: t('layer.res'), type: "low" },
    { level: 1, name: t('layer.ctx'), desc: t('layer.ctx'), type: "core", active: true },
  ];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative space-y-3 pl-8 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-lime-500 before:to-transparent">
        {LAYERS.map((layer) => (
          <div
            key={layer.level}
            className={`group relative flex items-center justify-between overflow-hidden rounded-xl border px-6 py-4 backdrop-blur-md transition-all duration-300 hover:translate-x-2 ${
              layer.active
                ? "border-lime-500/50 bg-lime-500/10 shadow-[0_0_30px_rgba(132,204,22,0.15)]"
                : "border-white/5 bg-zinc-900/40 hover:border-lime-500/20 hover:bg-zinc-900/60"
            }`}
          >
            {/* Connector Line */}
            <div className={`absolute -left-8 top-1/2 h-0.5 w-6 transition-colors ${layer.active ? "bg-lime-500" : "bg-zinc-800 group-hover:bg-lime-500/50"}`} />
            <div className={`absolute -left-[35px] top-[calc(50%-3px)] h-2 w-2 rounded-full border-2 transition-colors ${layer.active ? "border-lime-500 bg-black" : "border-zinc-800 bg-black group-hover:border-lime-500/50"}`} />

            <div className="flex items-center gap-4">
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                layer.type === "core" ? "bg-lime-500 text-black" : 
                layer.type === "low" ? "bg-lime-500/20 text-lime-400" :
                "bg-zinc-800 text-zinc-500 group-hover:bg-zinc-700 group-hover:text-zinc-300"
              }`}>
                {layer.level}
              </span>
              <span className={`font-semibold tracking-wide transition-colors ${layer.active ? "text-lime-400" : "text-zinc-300 group-hover:text-white"}`}>
                {layer.name}
              </span>
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400">{layer.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
