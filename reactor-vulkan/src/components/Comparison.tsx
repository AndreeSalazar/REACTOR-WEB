import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Comparison() {
  const [activeTab, setActiveTab] = useState<"imperative" | "declarative">("declarative");
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl">
      {/* Mental Model Switcher */}
      <div className="mb-16 flex flex-col items-center">
        <h3 className="mb-8 text-center text-3xl font-bold text-white">{t('comparison.title')}</h3>
        <div className="relative flex w-full max-w-lg rounded-full bg-zinc-900 p-1 ring-1 ring-white/10 shadow-xl">
          <button
            onClick={() => setActiveTab("imperative")}
            className={`relative z-10 w-1/2 rounded-full py-3 text-sm font-medium transition-colors ${
              activeTab === "imperative" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {t('comp.switch.imperative')}
          </button>
          <button
            onClick={() => setActiveTab("declarative")}
            className={`relative z-10 w-1/2 rounded-full py-3 text-sm font-medium transition-colors ${
              activeTab === "declarative" ? "text-black" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {t('comp.switch.declarative')}
          </button>
          <div
            className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full shadow-lg transition-all duration-500 ease-spring ${
              activeTab === "imperative" ? "left-1 bg-red-500/80" : "left-[calc(50%+2px)] bg-lime-500"
            }`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Code Comparison */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl transition-all hover:border-lime-500/20">
          <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3">
            <span className="text-xs font-mono text-zinc-400">pipeline_creation.cpp</span>
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/20" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/20" />
            </div>
          </div>
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent transition-opacity duration-500 ${activeTab === "imperative" ? "opacity-100" : "opacity-0"}`} />
            <div className={`absolute inset-0 bg-gradient-to-b from-lime-500/5 to-transparent transition-opacity duration-500 ${activeTab === "declarative" ? "opacity-100" : "opacity-0"}`} />
            
            {activeTab === "imperative" ? (
              <pre className="animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-x-auto p-6 text-xs leading-relaxed text-zinc-400">
                <code>{`// 1. Shader Stages (Manual Setup)
VkPipelineShaderStageCreateInfo vertStageInfo{};
vertStageInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
vertStageInfo.stage = VK_SHADER_STAGE_VERTEX_BIT;
vertStageInfo.module = vertShaderModule;
vertStageInfo.pName = "main";

VkPipelineShaderStageCreateInfo fragStageInfo{};
fragStageInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
fragStageInfo.stage = VK_SHADER_STAGE_FRAGMENT_BIT;
fragStageInfo.module = fragShaderModule;
fragStageInfo.pName = "main";

// 2. Vertex Input (Manual Zeroing)
VkPipelineVertexInputStateCreateInfo vertexInputInfo{};
vertexInputInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_VERTEX_INPUT_STATE_CREATE_INFO;
vertexInputInfo.vertexBindingDescriptionCount = 0; // Error prone
vertexInputInfo.vertexAttributeDescriptionCount = 0;

// ... 50 lines of boilerplate later ...

VkGraphicsPipelineCreateInfo pipelineInfo{};
pipelineInfo.sType = VK_STRUCTURE_TYPE_GRAPHICS_PIPELINE_CREATE_INFO;
// Linking everything manually...
pipelineInfo.pStages = shaderStages;
pipelineInfo.pVertexInputState = &vertexInputInfo;

if (vkCreateGraphicsPipelines(...) != VK_SUCCESS) {
    throw std::runtime_error("Crash!");
}`}</code>
              </pre>
            ) : (
              <pre className="animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-x-auto p-6 text-sm leading-relaxed text-zinc-300">
                <code>{`// Declarative Pipeline Definition
// "Describe what you want, not how to do it"

auto pipeline = reactor::GraphicsPipeline::create(device)
    .shader(vertShader)
    .shader(fragShader)
    .vertexInput(bindings, attributes)
    .topology(reactor::Topology::TriangleList)
    .viewport(window.extent())
    .rasterization(reactor::PolygonMode::Fill)
    .multisampling(reactor::SampleCount::Count4)
    .depthTest(true)
    .build();

// ✅ Automatic compile-time validation
// ✅ Automatic cleanup (RAII)
// ✅ Smart defaults (Zero-config)`}</code>
              </pre>
            )}
          </div>
        </div>

        {/* Visual Explanation */}
        <div className="flex flex-col justify-center space-y-10">
          <div className="space-y-6">
            <FeaturePoint 
              isActive={activeTab === "declarative"}
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
              title={t('comp.components')}
              desc={t('comp.components.desc')}
            />
            
            <FeaturePoint 
              isActive={activeTab === "declarative"}
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>}
              title={t('comp.lifecycle')}
              desc={t('comp.lifecycle.desc')}
            />

            <FeaturePoint 
              isActive={activeTab === "declarative"}
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title={t('comp.defaults')}
              desc={t('comp.defaults.desc')}
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <StatCard label={t('comp.stat.reduction')} value="-85%" color="text-lime-400" />
        <StatCard label={t('comp.stat.speed')} value="5x" color="text-lime-400" />
        <StatCard label={t('comp.stat.overhead')} value="0%" color="text-lime-400" />
      </div>
    </div>
  );
}

function FeaturePoint({ isActive, icon, title, desc }: { isActive: boolean, icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className={`flex items-start gap-5 transition-all duration-500 ${isActive ? "opacity-100 translate-x-0" : "opacity-40 translate-x-4 grayscale"}`}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-500/10 text-lime-400 shadow-[0_0_15px_rgba(132,204,22,0.1)]">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-base leading-relaxed text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/30 p-8 text-center backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-zinc-900/50 hover:border-lime-500/20">
      <div className={`text-5xl font-black ${color} mb-3 tracking-tight`}>{value}</div>
      <div className="text-sm font-medium uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">{label}</div>
    </div>
  );
}
