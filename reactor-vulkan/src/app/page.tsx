"use client";
import React, { useEffect, useState } from "react";
import ReactorAnimated from "@/components/ReactorAnimated";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import CodeBlock from "@/components/CodeBlock";
import QuickStart from "@/components/QuickStart";
import Architecture from "@/components/Architecture";
import PipelineBuilder from "@/components/PipelineBuilder";
import Comparison from "@/components/Comparison";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import GlitchText from "@/components/ui/GlitchText";
import { Badge, SectionHeading } from "@/components/ui/Shared";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const [spinOuter] = useState(28);
  const [spinMiddle] = useState(22);
  const [spinInner] = useState(18);
  const [pulseDur] = useState(6);
  const [glowPulseDur] = useState(4);
  const [ringColorA] = useState("#1e3a24");
  const [ringColorB] = useState("#2e5036");
  const [glowA] = useState("#76b900");
  const [glowB] = useState("#8bc34a");
  const [textColorA] = useState("#aeea00");
  const [textColorB] = useState("#76b900");
  const [glowIntensity] = useState(1);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-lime-500/30">
      <AnimatedBackground />
      <Navbar />
      
      <main className="mx-auto flex w-full flex-col">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12">
          <div className="relative z-10 scale-90 sm:scale-100 transition-transform duration-700 hover:scale-105">
            <ReactorAnimated
              spinOuter={spinOuter}
              spinMiddle={spinMiddle}
              spinInner={spinInner}
              pulseDur={pulseDur}
              glowPulseDur={glowPulseDur}
              ringColorA={ringColorA}
              ringColorB={ringColorB}
              glowA={glowA}
              glowB={glowB}
              textColorA={textColorA}
              textColorB={textColorB}
              glowIntensity={glowIntensity}
            />
          </div>

          <div className="mt-8 flex flex-col items-center text-center">
            <ScrollReveal>
              <h1 className="sr-only">Stack-GPU-OP</h1>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(132,204,22,0.2)]">
                 <span className="relative flex h-2 w-2">
                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
                   <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-500"></span>
                 </span>
                 <span className="text-sm font-medium text-lime-400">{t('hero.version')}</span>
              </div>
              <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-4">
                <GlitchText text={t('hero.title')} />
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl leading-relaxed">
                {t('hero.subtitle').split('Vulkan')[0]} <span className="text-lime-400 font-bold">Vulkan</span>
                {t('hero.subtitle').split('Vulkan')[1]}
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a href="#start" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-lime-500 px-8 py-4 font-bold text-black transition duration-300 hover:bg-lime-400 hover:shadow-[0_0_30px_rgba(132,204,22,0.6)] hover:scale-105">
                  <span className="mr-2 text-xl">🚀</span> {t('hero.quickStart')}
                </a>
                <a href="https://github.com/AndreeSalazar/REACTOR-Framework-for-Vulkan-" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/50 px-8 py-4 font-medium text-white transition hover:border-lime-500/50 hover:bg-zinc-800 hover:scale-105">
                  <span className="mr-2 text-xl">⭐</span> {t('nav.github')}
                </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-3 opacity-80">
                <Badge className="border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.2)]">{t('hero.badge.dx12')}</Badge>
                <Badge className="border-red-500/20 bg-red-500/10 text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)]">{t('hero.badge.vulkan')}</Badge>
                <Badge className="border-green-500/20 bg-green-500/10 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.2)]">{t('hero.badge.fps')}</Badge>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The Equation Section */}
        <section className="border-y border-white/5 bg-zinc-900/30 px-6 py-32 backdrop-blur-sm">
           <div className="mx-auto max-w-5xl text-center">
              <ScrollReveal>
                 <SectionHeading title={t('equation.title')} subtitle={t('equation.subtitle')} />
                 <div className="mt-16 flex flex-col items-center justify-center gap-8 md:flex-row perspective-1000">
                    <div className="transform transition-transform duration-500 hover:rotate-y-12 hover:scale-105 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-transparent p-10 backdrop-blur-md shadow-2xl">
                       <div className="text-4xl font-bold text-blue-400 mb-2">{t('equation.adadgpu')}</div>
                       <div className="text-sm font-mono text-blue-300/60 uppercase tracking-widest">{t('equation.dx12research')}</div>
                    </div>
                    <div className="text-6xl font-black text-white/20 animate-pulse">+</div>
                    <div className="transform transition-transform duration-500 hover:-rotate-y-12 hover:scale-105 rounded-3xl border border-lime-500/20 bg-gradient-to-bl from-lime-900/20 to-transparent p-10 backdrop-blur-md shadow-2xl">
                       <div className="text-4xl font-bold text-lime-400 mb-2">{t('equation.reactor')}</div>
                       <div className="text-sm font-mono text-lime-300/60 uppercase tracking-widest">{t('equation.vulkanframework')}</div>
                    </div>
                    <div className="text-6xl font-black text-white/20 animate-pulse">=</div>
                    <div className="transform transition-transform duration-500 hover:scale-110 rounded-3xl border border-white/20 bg-white/5 p-10 shadow-[0_0_60px_rgba(132,204,22,0.15)] backdrop-blur-xl relative overflow-hidden group">
                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       <div className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-4xl font-black text-transparent relative z-10">{t('equation.stackgpuop')}</div>
                       <div className="text-sm font-mono text-zinc-400 uppercase tracking-widest mt-2 relative z-10">{t('equation.advancedgraphics')}</div>
                    </div>
                 </div>
              </ScrollReveal>
           </div>
        </section>

        {/* Features Grid (Updated for v0.4.0) */}
        <section id="features" className="px-6 py-32 relative">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <SectionHeading title={t('features.title')} subtitle={t('features.subtitle')} />
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
                <FeatureCard title={t('feat.phong.title')} description={t('feat.phong.desc')} icon={<span className="text-3xl">💡</span>} />
                <FeatureCard title={t('feat.depth.title')} description={t('feat.depth.desc')} icon={<span className="text-3xl">🧊</span>} />
                <FeatureCard title={t('feat.sdf.title')} description={t('feat.sdf.desc')} icon={<span className="text-3xl">📐</span>} />
                <FeatureCard title={t('feat.api.title')} description={t('feat.api.desc')} icon={<span className="text-3xl">✨</span>} />
                <FeatureCard title={t('feat.raii.title')} description={t('feat.raii.desc')} icon={<span className="text-3xl">♻️</span>} />
                <FeatureCard title={t('feat.isr.title')} description={t('feat.isr.desc')} icon={<span className="text-3xl">⚡</span>} />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pipeline Builder Section */}
        <section className="bg-zinc-900/30 px-6 py-32 border-y border-white/5">
          <div className="mx-auto max-w-7xl">
             <ScrollReveal>
               <SectionHeading title={t('builder.title')} subtitle={t('builder.subtitle')} />
               <div className="mt-12 rounded-3xl border border-white/10 bg-black/50 p-8 shadow-2xl">
                 <PipelineBuilder />
               </div>
             </ScrollReveal>
          </div>
        </section>

        {/* Comparison Section (Battle of APIs) */}
        <section className="px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <SectionHeading title={t('comparison.title')} subtitle={t('comparison.subtitle')} />
              <div className="mt-12">
                <Comparison />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="bg-zinc-900/30 px-6 py-32 border-y border-white/5">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <SectionHeading title={t('arch.title')} subtitle={t('arch.subtitle')} />
              <div className="grid gap-16 lg:grid-cols-2 lg:items-center mt-12">
                <div className="transform hover:scale-105 transition-transform duration-500">
                  <Architecture />
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">{t('arch.stackTitle')}</h3>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                      {t('arch.stackDesc')}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-lime-500/20 bg-lime-500/5 p-6 backdrop-blur-sm">
                    <h4 className="font-bold text-lime-400 text-xl mb-2">{t('arch.currentStatus')}</h4>
                    <p className="text-zinc-300">{t('arch.currentStatusDesc')}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Roadmap (Updated) */}
        <section id="roadmap" className="px-6 py-32">
          <div className="mx-auto max-w-5xl">
             <ScrollReveal>
               <SectionHeading title={t('roadmap.title')} subtitle={t('roadmap.subtitle')} />
               <div className="grid gap-8 sm:grid-cols-3 mt-12">
                  <div className="relative group rounded-3xl border border-lime-500/30 bg-lime-500/5 p-8 transition-all hover:bg-lime-500/10 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)]">
                     <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-lime-500 flex items-center justify-center shadow-lg animate-bounce">
                        <span className="text-black font-bold text-xs">{t('roadmap.now')}</span>
                     </div>
                     <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-lime-400">v0.4.0</h3>
                     </div>
                     <ul className="space-y-4 text-sm text-zinc-300">
                        <li className="flex items-center gap-3"><span className="text-lime-500 text-lg">✓</span> {t('roadmap.v04.phong')}</li>
                        <li className="flex items-center gap-3"><span className="text-lime-500 text-lg">✓</span> {t('roadmap.v04.depth')}</li>
                        <li className="flex items-center gap-3"><span className="text-lime-500 text-lg">✓</span> {t('roadmap.v04.sdf')}</li>
                        <li className="flex items-center gap-3"><span className="text-lime-500 text-lg">✓</span> {t('roadmap.v04.fps')}</li>
                     </ul>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8 opacity-75 transition hover:opacity-100 hover:border-white/20 hover:bg-zinc-900/60">
                     <h3 className="mb-6 text-2xl font-bold text-white">v0.5.0</h3>
                     <ul className="space-y-4 text-sm text-zinc-400">
                        <li className="flex items-center gap-3"><span className="text-zinc-600 text-lg">○</span> {t('roadmap.v05.window')}</li>
                        <li className="flex items-center gap-3"><span className="text-zinc-600 text-lg">○</span> {t('roadmap.v05.isr')}</li>
                        <li className="flex items-center gap-3"><span className="text-zinc-600 text-lg">○</span> {t('roadmap.v05.hotreload')}</li>
                     </ul>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8 opacity-50 transition hover:opacity-100 hover:border-white/20 hover:bg-zinc-900/60">
                     <h3 className="mb-6 text-2xl font-bold text-white">v1.0.0</h3>
                     <ul className="space-y-4 text-sm text-zinc-500">
                        <li className="flex items-center gap-3"><span className="text-zinc-700 text-lg">○</span> {t('roadmap.v10.raytracing')}</li>
                        <li className="flex items-center gap-3"><span className="text-zinc-700 text-lg">○</span> {t('roadmap.v10.mesh')}</li>
                        <li className="flex items-center gap-3"><span className="text-zinc-700 text-lg">○</span> {t('roadmap.v10.production')}</li>
                     </ul>
                  </div>
               </div>
             </ScrollReveal>
          </div>
        </section>

        {/* Quick Start Section */}
        <section id="start" className="bg-zinc-900/30 px-6 py-32 border-y border-white/5">
           <div className="mx-auto max-w-7xl">
             <ScrollReveal>
               <SectionHeading title={t('start.title')} subtitle={t('start.subtitle')} />
               <div className="mt-12">
                 <QuickStart />
               </div>
             </ScrollReveal>
           </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden px-6 py-40">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-lime-900/30 via-black to-black" />
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal>
              <h2 className="text-5xl font-black tracking-tight text-white sm:text-7xl mb-8">
                {t('cta.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">Stack-GPU-OP</span>?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-xl text-zinc-400 leading-relaxed">
                {t('cta.subtitle')}
              </p>
              <div className="mt-12 flex justify-center gap-8">
                <a href="https://github.com/AndreeSalazar/REACTOR-Framework-for-Vulkan-" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-lime-500 px-10 py-5 font-bold text-black text-lg transition duration-300 hover:scale-110 hover:bg-lime-400 hover:shadow-[0_0_50px_rgba(132,204,22,0.5)]">
                  <span className="mr-3 text-2xl">⚡</span> {t('cta.clone')}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
