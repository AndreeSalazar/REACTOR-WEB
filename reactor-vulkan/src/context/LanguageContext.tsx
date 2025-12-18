import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navbar
    'nav.features': 'Características',
    'nav.architecture': 'Arquitectura',
    'nav.start': 'Empezar',
    'nav.roadmap': 'Roadmap',
    'nav.github': 'GitHub',
    'nav.getStarted': 'Comenzar',

    // Hero
    'hero.version': 'Lanzamiento v0.4.1',
    'hero.title': 'Stack-GPU-OP',
    'hero.subtitle': 'La evolución de ADead-GPU portada a Vulkan. El framework gráfico más avanzado y accesible.',
    'hero.quickStart': 'Inicio Rápido',
    'hero.badge.dx12': 'ADN DirectX 12',
    'hero.badge.vulkan': 'Núcleo Vulkan 1.3',
    'hero.badge.fps': '74-75 FPS Estable',

    // Equation
    'equation.title': 'La Ecuación',
    'equation.subtitle': 'Combinando lo mejor de dos mundos.',
    'equation.adadgpu': 'ADead-GPU',
    'equation.dx12research': 'Investigación DirectX 12',
    'equation.reactor': 'REACTOR',
    'equation.vulkanframework': 'Framework Vulkan',
    'equation.stackgpuop': 'Stack-GPU-OP',
    'equation.advancedgraphics': 'Gráficos Avanzados',
    'equation.nextgen': 'Framework Next Gen',

    // Features
    'features.title': 'Tecnología de Vanguardia',
    'features.subtitle': 'Características profesionales implementadas en v0.4.1.',
    'feat.phong.title': 'Phong Shading',
    'feat.phong.desc': 'Iluminación profesional completa: Ambient (30%) + Diffuse (100%) + Specular (60%).',
    'feat.depth.title': 'Depth Buffer',
    'feat.depth.desc': 'Renderizado 3D correcto con formato D32_SFLOAT y back-face culling optimizado.',
    'feat.sdf.title': 'SDF Rendering',
    'feat.sdf.desc': 'Motor de Raymarching con 6 primitivas y operaciones CSG (Union, Subtract, Intersect).',
    'feat.api.title': 'API Declarativa',
    'feat.api.desc': 'Diseña pipelines complejos con un Builder pattern fluido e intuitivo.',
    'feat.raii.title': 'RAII Automático',
    'feat.raii.desc': 'Gestión de memoria y recursos automática. Cero memory leaks.',
    'feat.isr.title': 'ISR Ready',
    'feat.isr.desc': 'Sistema de Intelligent Shading Rate preparado para implementación.',

    // Pipeline Builder
    'builder.title': 'Diseño de Pipelines Declarativo',
    'builder.subtitle': 'Configura gráficos complejos con una API fluida y legible.',
    'builder.configurator': 'Configurador de Pipeline',
    'builder.shaders': 'Shaders',
    'builder.rasterization': 'Rasterización',
    'builder.depthBlend': 'Profundidad y Mezcla',

    // Comparison
    'comparison.title': 'Batalla de APIs',
    'comparison.subtitle': '¿Por qué elegir REACTOR sobre el código raw?',
    'comp.switch.imperative': 'Vulkan Clásico (Imperativo)',
    'comp.switch.declarative': 'React Way (Declarativo)',
    'comp.components': 'Componentes vs Structs',
    'comp.components.desc': 'En lugar de rellenar VkCreateInfo structs infinitos y propensos a errores, compones tu pipeline encadenando métodos lógicos.',
    'comp.lifecycle': 'Ciclo de Vida Automático',
    'comp.lifecycle.desc': 'Como el useEffect cleanup. Los recursos se destruyen automáticamente cuando salen del scope.',
    'comp.defaults': 'Smart Defaults',
    'comp.defaults.desc': 'Reactor asume los defaults más sensatos. Solo especificas lo que quieres cambiar.',
    'comp.stat.reduction': 'Reducción de Código',
    'comp.stat.speed': 'Velocidad de Desarrollo',
    'comp.stat.overhead': 'Overhead en Runtime',

    // Architecture
    'arch.title': 'Arquitectura Modular',
    'arch.subtitle': 'Diseñado por capas para máxima flexibilidad.',
    'arch.stackTitle': 'Extensiones Stack-GPU-OP',
    'arch.stackDesc': 'Sobre el núcleo de REACTOR, Stack-GPU-OP añade capas avanzadas de renderizado como ISR y SDF Raymarching.',
    'arch.currentStatus': 'Estado Actual: Capa 6',
    'arch.currentStatusDesc': 'Implementando extensiones avanzadas de sincronización y compute shaders para ISR.',
    
    // Architecture Layers
    'layer.scene': 'Grafo de Escena',
    'layer.render': 'Grafo de Renderizado',
    'layer.sync': 'Sincronización',
    'layer.cmd': 'Command Buffers',
    'layer.desc': 'Descriptores',
    'layer.pipe': 'Pipelines',
    'layer.res': 'Recursos',
    'layer.ctx': 'Contexto',

    // Roadmap
    'roadmap.title': 'Roadmap',
    'roadmap.subtitle': 'El camino hacia la versión 1.0.',
    'roadmap.now': 'AHORA',
    'roadmap.v04.phong': 'Phong Shading',
    'roadmap.v04.depth': 'Depth Buffer',
    'roadmap.v04.sdf': 'SDF Primitives',
    'roadmap.v04.fps': '74-75 FPS Estable',
    'roadmap.v05.window': 'Integración de Ventanas',
    'roadmap.v05.isr': 'Implementación ISR',
    'roadmap.v05.hotreload': 'Shader Hot-reload',
    'roadmap.v10.raytracing': 'Ray Tracing',
    'roadmap.v10.mesh': 'Mesh Shaders',
    'roadmap.v10.production': 'Listo para Producción',

    // Quick Start
    'start.title': 'Inicio Rápido',
    'start.subtitle': 'Ejecución directa sin dependencias externas.',
    'start.tab.direct': 'Ejecutar Directamente',
    'start.tab.compile': 'Compilar y Ejecutar',
    'start.tab.scratch': 'Desde Cero',
    'start.note': '* Los scripts detectan automáticamente Vulkan SDK 1.4+ y Visual Studio 2022',

    // CTA
    'cta.title': '¿Listo para probar',
    'cta.subtitle': 'Únete al desarrollo del framework gráfico más prometedor y experimenta la potencia de Vulkan sin el dolor de cabeza.',
    'cta.clone': 'Clonar Repositorio',

    // Footer
    'footer.madein': 'Hecho en Perú',
    'footer.by': 'por Andree Salazar',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.architecture': 'Architecture',
    'nav.start': 'Start',
    'nav.roadmap': 'Roadmap',
    'nav.github': 'GitHub',
    'nav.getStarted': 'Get Started',

    // Hero
    'hero.version': 'v0.4.1 Release',
    'hero.title': 'Stack-GPU-OP',
    'hero.subtitle': 'The evolution of ADead-GPU ported to Vulkan. The most advanced and accessible graphics framework.',
    'hero.quickStart': 'Quick Start',
    'hero.badge.dx12': 'DirectX 12 DNA',
    'hero.badge.vulkan': 'Vulkan 1.3 Core',
    'hero.badge.fps': '74-75 FPS Stable',

    // Equation
    'equation.title': 'The Equation',
    'equation.subtitle': 'Combining the best of two worlds.',
    'equation.adadgpu': 'ADead-GPU',
    'equation.dx12research': 'DirectX 12 Research',
    'equation.reactor': 'REACTOR',
    'equation.vulkanframework': 'Vulkan Framework',
    'equation.stackgpuop': 'Stack-GPU-OP',
    'equation.advancedgraphics': 'Advanced Graphics',
    'equation.nextgen': 'Next Gen Framework',

    // Features
    'features.title': 'Cutting-Edge Technology',
    'features.subtitle': 'Professional features implemented in v0.4.1.',
    'feat.phong.title': 'Phong Shading',
    'feat.phong.desc': 'Full professional lighting: Ambient (30%) + Diffuse (100%) + Specular (60%).',
    'feat.depth.title': 'Depth Buffer',
    'feat.depth.desc': 'Correct 3D rendering with D32_SFLOAT format and optimized back-face culling.',
    'feat.sdf.title': 'SDF Rendering',
    'feat.sdf.desc': 'Raymarching engine with 6 primitives and CSG operations (Union, Subtract, Intersect).',
    'feat.api.title': 'Declarative API',
    'feat.api.desc': 'Design complex pipelines with a fluid and intuitive Builder pattern.',
    'feat.raii.title': 'Automatic RAII',
    'feat.raii.desc': 'Automatic memory and resource management. Zero memory leaks.',
    'feat.isr.title': 'ISR Ready',
    'feat.isr.desc': 'Intelligent Shading Rate system ready for implementation.',

    // Pipeline Builder
    'builder.title': 'Declarative Pipeline Design',
    'builder.subtitle': 'Configure complex graphics with a fluid and readable API.',
    'builder.configurator': 'Pipeline Configurator',
    'builder.shaders': 'Shaders',
    'builder.rasterization': 'Rasterization',
    'builder.depthBlend': 'Depth & Blend',

    // Comparison
    'comparison.title': 'Battle of APIs',
    'comparison.subtitle': 'Why choose REACTOR over raw code?',
    'comp.switch.imperative': 'Classic Vulkan (Imperative)',
    'comp.switch.declarative': 'React Way (Declarative)',
    'comp.components': 'Components vs Structs',
    'comp.components.desc': 'Instead of filling infinite error-prone VkCreateInfo structs, you compose your pipeline by chaining logical methods.',
    'comp.lifecycle': 'Automatic Lifecycle',
    'comp.lifecycle.desc': 'Like useEffect cleanup. Resources are automatically destroyed when they go out of scope.',
    'comp.defaults': 'Smart Defaults',
    'comp.defaults.desc': 'Reactor assumes the most sensible defaults. You only specify what you want to change.',
    'comp.stat.reduction': 'Code Reduction',
    'comp.stat.speed': 'Dev Speed',
    'comp.stat.overhead': 'Runtime Overhead',

    // Architecture
    'arch.title': 'Modular Architecture',
    'arch.subtitle': 'Designed in layers for maximum flexibility.',
    'arch.stackTitle': 'Stack-GPU-OP Extensions',
    'arch.stackDesc': 'On top of the REACTOR core, Stack-GPU-OP adds advanced rendering layers like ISR and SDF Raymarching.',
    'arch.currentStatus': 'Current Status: Layer 6',
    'arch.currentStatusDesc': 'Implementing advanced synchronization extensions and compute shaders for ISR.',

    // Architecture Layers
    'layer.scene': 'Scene Graph',
    'layer.render': 'Render Graph',
    'layer.sync': 'Synchronization',
    'layer.cmd': 'Command Buffers',
    'layer.desc': 'Descriptors',
    'layer.pipe': 'Pipelines',
    'layer.res': 'Resources',
    'layer.ctx': 'Context',

    // Roadmap
    'roadmap.title': 'Roadmap',
    'roadmap.subtitle': 'The path to version 1.0.',
    'roadmap.now': 'NOW',
    'roadmap.v04.phong': 'Phong Shading',
    'roadmap.v04.depth': 'Depth Buffer',
    'roadmap.v04.sdf': 'SDF Primitives',
    'roadmap.v04.fps': '74-75 FPS Stable',
    'roadmap.v05.window': 'Window Integration',
    'roadmap.v05.isr': 'ISR Implementation',
    'roadmap.v05.hotreload': 'Shader Hot-reload',
    'roadmap.v10.raytracing': 'Ray Tracing',
    'roadmap.v10.mesh': 'Mesh Shaders',
    'roadmap.v10.production': 'Production Ready',

    // Quick Start
    'start.title': 'Quick Start',
    'start.subtitle': 'Direct execution without external dependencies.',
    'start.tab.direct': 'Run Directly',
    'start.tab.compile': 'Compile & Run',
    'start.tab.scratch': 'From Scratch',
    'start.note': '* Scripts automatically detect Vulkan SDK 1.4+ and Visual Studio 2022',

    // CTA
    'cta.title': 'Ready to try',
    'cta.subtitle': 'Join the development of the most promising graphics framework and experience the power of Vulkan without the headache.',
    'cta.clone': 'Clone Repository',

    // Footer
    'footer.madein': 'Made in Peru',
    'footer.by': 'by Andree Salazar',
    'footer.rights': 'All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
