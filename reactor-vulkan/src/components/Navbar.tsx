import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const menuItems = [
    { key: 'nav.features', href: '#features' },
    { key: 'nav.architecture', href: '#architecture' },
    { key: 'nav.start', href: '#start' },
    { key: 'nav.roadmap', href: '#roadmap' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "border-white/10 bg-black/80 backdrop-blur-xl h-16" : "border-transparent bg-transparent h-24"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-8 w-8">
             <div className="absolute inset-0 animate-ping rounded-full bg-lime-500 opacity-20" />
             <div className="relative h-full w-full rounded-full bg-gradient-to-tr from-lime-600 to-lime-400 shadow-[0_0_15px_rgba(132,204,22,0.5)] transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="font-mono text-xl font-bold tracking-widest text-white group-hover:text-lime-400 transition-colors">REACTOR</span>
        </Link>
        
        <div className="hidden gap-8 md:flex">
          {menuItems.map((item) => (
            <Link 
              key={item.key} 
              href={item.href} 
              className="relative text-sm font-medium text-zinc-400 transition-colors hover:text-white group"
            >
              {t(item.key)}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-lime-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center h-9 w-9 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {language.toUpperCase()}
          </button>

          <a
            href="https://github.com/AndreeSalazar/REACTOR-Framework-for-Vulkan-"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-lime-500/50 hover:bg-lime-500/10 hover:text-lime-400"
          >
            <svg className="h-4 w-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>{t('nav.github')}</span>
          </a>
          <a
            href="#start"
            className="rounded-full bg-lime-500 px-5 py-2 text-sm font-bold text-black shadow-[0_0_20px_rgba(132,204,22,0.4)] transition-all hover:bg-lime-400 hover:shadow-[0_0_30px_rgba(132,204,22,0.6)] hover:scale-105"
          >
            {t('nav.getStarted')}
          </a>
        </div>
      </div>
    </nav>
  );
}
