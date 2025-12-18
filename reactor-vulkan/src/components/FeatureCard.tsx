import React from "react";
import SpotlightCard from "./ui/SpotlightCard";

export default function FeatureCard({ title, description, icon }: { title: string; description: string; icon?: React.ReactNode }) {
  return (
    <SpotlightCard className="group p-6 h-full">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-500/10 text-lime-400 shadow-[0_0_15px_rgba(132,204,22,0.1)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-lime-500/20 group-hover:text-lime-300">
        {icon || <div className="h-6 w-6 rounded bg-current" />}
      </div>
      <h3 className="mb-3 text-xl font-bold text-zinc-100 group-hover:text-lime-400 transition-colors">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">{description}</p>
    </SpotlightCard>
  );
}
