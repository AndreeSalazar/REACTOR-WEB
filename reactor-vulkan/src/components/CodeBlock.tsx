import React from "react";

export default function CodeBlock({ code, language = "cpp", title }: { code: string; language?: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl">
      {title && (
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/20" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
            <div className="h-3 w-3 rounded-full bg-green-500/20" />
          </div>
          <span className="ml-2 text-xs font-medium text-zinc-500">{title}</span>
        </div>
      )}
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-sm leading-relaxed text-zinc-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
