import React, { useState } from "react";
import CodeBlock from "./CodeBlock";
import { useLanguage } from "@/context/LanguageContext";

export default function QuickStart() {
  const { t } = useLanguage();

  const TABS = [
    {
      id: "direct",
      labelKey: "start.tab.direct",
      code: `# Navegar al ejecutable
cd build\\examples\\stack-gpu-cube\\Release

# Ejecutar
.\\stack-gpu-cube.exe`,
    },
    {
      id: "compile",
      labelKey: "start.tab.compile",
      code: `# 1. Compilar (solo si hiciste cambios)
cmake --build build --config Release --target stack-gpu-cube

# 2. Ejecutar
cd build\\examples\\stack-gpu-cube\\Release
.\\stack-gpu-cube.exe`,
    },
    {
      id: "scratch",
      labelKey: "start.tab.scratch",
      code: `# 1. Setup completo (solo primera vez)
quick-setup.bat

# 2. Ejecutar
cd build\\examples\\stack-gpu-cube\\Release
.\\stack-gpu-cube.exe`,
    },
  ];

  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const activeContent = TABS.find((t) => t.id === activeTab);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex flex-wrap justify-center gap-2 rounded-full bg-white/5 p-1 backdrop-blur-sm">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-lime-500 text-black shadow-lg shadow-lime-500/20"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {t(tab.labelKey)}
          </button>
        ))}
      </div>
      <CodeBlock code={activeContent?.code || ""} language="bash" title={`Terminal - ${t(activeContent?.labelKey || '')}`} />
      <p className="mt-4 text-center text-xs text-zinc-500">
        {t('start.note')}
      </p>
    </div>
  );
}
