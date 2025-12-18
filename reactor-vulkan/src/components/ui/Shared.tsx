import React from "react";

export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-md border border-white/5 bg-white/5 px-2 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-zinc-400">{subtitle}</p>}
    </div>
  );
}
