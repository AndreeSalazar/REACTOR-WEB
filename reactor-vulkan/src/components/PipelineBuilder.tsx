import React, { useState } from "react";
import CodeBlock from "./CodeBlock";
import { useLanguage } from "@/context/LanguageContext";

export default function PipelineBuilder() {
  const { t } = useLanguage();
  const [config, setConfig] = useState({
    topology: "TriangleList",
    cullMode: "Back",
    frontFace: "CounterClockwise",
    depthTest: true,
    depthWrite: true,
    blending: "Alpha",
    msaa: "4x",
    shaderVert: "main.vert",
    shaderFrag: "pbr.frag",
  });

  const updateConfig = (key: string, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    return `// 1. Define Pipeline Config
auto pipeline = reactor::GraphicsPipeline::create(device)
    .layout(pipelineLayout)
    .renderPass(renderPass, 0)
    
    // Shaders
    .shader(reactor::ShaderStage::Vertex, "${config.shaderVert}")
    .shader(reactor::ShaderStage::Fragment, "${config.shaderFrag}")
    
    // Input Assembly
    .topology(reactor::Topology::${config.topology})
    
    // Rasterization
    .cullMode(reactor::CullMode::${config.cullMode})
    .frontFace(reactor::FrontFace::${config.frontFace})
    .msaa(reactor::SampleCount::Count${config.msaa})
    
    // Depth & Blending
    .depthTest(${config.depthTest})
    .depthWrite(${config.depthWrite})
    .blending(reactor::BlendMode::${config.blending})
    
    .build();`;
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Visual Controls */}
        <div className="lg:col-span-5">
          <div className="h-full rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-md">
            <div className="mb-6 flex items-center gap-2 border-b border-white/5 pb-4">
              <div className="h-3 w-3 rounded-full bg-lime-500 animate-pulse" />
              <h3 className="font-semibold text-white">{t('builder.configurator')}</h3>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">{t('builder.shaders')}</label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-400">Vertex</span>
                    <input 
                      type="text" 
                      value={config.shaderVert}
                      onChange={(e) => updateConfig("shaderVert", e.target.value)}
                      className="w-full rounded bg-black/40 px-3 py-2 text-xs text-lime-400 outline-none border border-white/5 focus:border-lime-500/50"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-400">Fragment</span>
                    <input 
                      type="text" 
                      value={config.shaderFrag}
                      onChange={(e) => updateConfig("shaderFrag", e.target.value)}
                      className="w-full rounded bg-black/40 px-3 py-2 text-xs text-lime-400 outline-none border border-white/5 focus:border-lime-500/50"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">{t('builder.rasterization')}</label>
                <div className="grid grid-cols-2 gap-3">
                  <Select 
                    label="Topology" 
                    value={config.topology} 
                    options={["TriangleList", "TriangleStrip", "LineList", "PointList"]} 
                    onChange={(v) => updateConfig("topology", v)} 
                  />
                  <Select 
                    label="Cull Mode" 
                    value={config.cullMode} 
                    options={["None", "Front", "Back", "FrontAndBack"]} 
                    onChange={(v) => updateConfig("cullMode", v)} 
                  />
                  <Select 
                    label="Front Face" 
                    value={config.frontFace} 
                    options={["Clockwise", "CounterClockwise"]} 
                    onChange={(v) => updateConfig("frontFace", v)} 
                  />
                  <Select 
                    label="MSAA" 
                    value={config.msaa} 
                    options={["1x", "2x", "4x", "8x"]} 
                    onChange={(v) => updateConfig("msaa", v)} 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">{t('builder.depthBlend')}</label>
                <div className="flex flex-wrap gap-4">
                  <Toggle label="Depth Test" checked={config.depthTest} onChange={(v) => updateConfig("depthTest", v)} />
                  <Toggle label="Depth Write" checked={config.depthWrite} onChange={(v) => updateConfig("depthWrite", v)} />
                </div>
                <div className="mt-3">
                   <Select 
                    label="Blending Mode" 
                    value={config.blending} 
                    options={["None", "Alpha", "Additive", "Multiply"]} 
                    onChange={(v) => updateConfig("blending", v)} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Code Preview */}
        <div className="lg:col-span-7">
           <div className="relative h-full">
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-lime-500/10 blur-xl" />
              <CodeBlock 
                title="src/pipelines/pbr_pipeline.cpp" 
                code={generateCode()} 
                language="cpp" 
              />
              <div className="mt-4 flex gap-4 text-xs text-zinc-500">
                 <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-zinc-600" />
                    <span>Zero Runtime Overhead</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-zinc-600" />
                    <span>Compile-time Validation</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-zinc-600" />
                    <span>RAII Managed</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function Select({ label, value, options, onChange }: { label: string, value: string, options: string[], onChange: (v: string) => void }) {
  return (
    <div className="space-y-1">
      <span className="text-[10px] text-zinc-400">{label}</span>
      <div className="relative">
        <select 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded bg-black/40 px-3 py-2 text-xs text-zinc-200 outline-none border border-white/5 focus:border-lime-500/50"
        >
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
           <svg className="h-3 w-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string, checked: boolean, onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <div className="relative">
        <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
        <div className={`h-5 w-9 rounded-full transition-colors ${checked ? "bg-lime-500" : "bg-zinc-700"}`} />
        <div className={`absolute top-1 left-1 h-3 w-3 rounded-full bg-white transition-transform ${checked ? "translate-x-4" : ""}`} />
      </div>
      <span className="text-xs text-zinc-300">{label}</span>
    </label>
  );
}
